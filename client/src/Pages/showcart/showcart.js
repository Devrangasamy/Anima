import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useAuth } from "../../Utilis/Authentication";
import { Loading } from "../../components/loading/Loading";
import config from "../../config.json";
import { Redirect } from "../Redirect/Redirect";
import "./showcart.css";

export const Showcart = () => {
  const [redirectFlag, setRedirectFlag] = useState(false);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [dispCart, setDispCart] = useState("");
  const [doneUploading, setDoneUploading] = useState(false);

  const auth = useAuth();
  // auth.id = "6401928fd92c2d5b1d5a3a01";

  useEffect(() => {
    setLoadingFlag(true);
    let finalList = [];
    let dummy;
    if (!auth.user) {
      setLoadingFlag(false);
      setRedirectFlag(true);
      return;
    }
    async function fetchData() {
      await axios
        .get(config.GET_CART_ITEMS, {
          params: {
            id: auth.id,
          },
        })
        .then(async (res) => {
          dummy = res.data.data;
          for (let i = 0; i < dummy.length; i++) {
            await axios
              .get(`${config.GET_PRODUCT_BY_ID}${dummy[i].id}`)
              .then((result) => finalList.push(result.data))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
      setDispCart(
        finalList.map((x, index) => (
          <div key={index} className="showcart_main_cont">
            <div className="show-cart-image-div">
              <img src={x.photos} className="show-cart-image-cont"></img>
            </div>
            <div className="show-cart-name-cont">
              <h4>{x.productname}</h4>
            </div>
            <div className="show-cart-update-count-cont center-content">
              <div>
                <div>
                  <InputGroup className="center-content">
                    <InputGroup.Text>{dummy[index].count}</InputGroup.Text>
                  </InputGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="primary"
                    value={dummy[index].id}
                    onClick={(e) => addOneMoreItem(e)}
                  >
                    +
                  </Button>
                  <Button
                    style={{ marginRight: "0px" }}
                    variant="danger"
                    value={dummy[index].id}
                    onClick={(e) => reduceOneItem(e)}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
            <div className="show-cart-remove-cont">
              <Button
                variant="danger"
                size="sm"
                value={dummy[index].id}
                onClick={(e) => removeThatItem(e)}
              >
                Remove Item
              </Button>
            </div>
          </div>
        ))
      );
      setLoadingFlag(false);
    }
    fetchData();
  }, [doneUploading]);

  // add one more item to the existing cart
  const addOneMoreItem = async (e) => {
    setLoadingFlag(true);
    await axios
      .put(config.UPDATE_USER_CART, {
        id: auth.id,
        productId: e.target.value,
        sign: "+",
        removeall: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setDoneUploading(!doneUploading);
  };

  const reduceOneItem = async (e) => {
    setLoadingFlag(true);
    await axios
      .put(config.UPDATE_USER_CART, {
        id: auth.id,
        productId: e.target.value,
        sign: "-",
        removeall: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setDoneUploading(!doneUploading);
  };

  const removeThatItem = async (e) => {
    setLoadingFlag(true);
    await axios
      .put(config.UPDATE_USER_CART, {
        id: auth.id,
        productId: e.target.value,
        sign: "-",
        removeall: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setDoneUploading(!doneUploading);
  };

  return (
    <div className="show-cart-main-div">
      {loadingFlag ? (
        <div className="show-cart-loding-div">
          <Loading />
        </div>
      ) : (
        <>
          {redirectFlag ? (
            <>
              <Redirect
                to_address="login"
                message="You must login to view cart"
              />
            </>
          ) : (
            <>
              {dispCart}
              <div className="">
                <Button
                  variant="success"
                  onClick={() => console.log("Primary")}
                >
                  Buy now
                </Button>
                <Button variant="danger" onClick={() => console.log("Danger")}>
                  Dummy button
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
