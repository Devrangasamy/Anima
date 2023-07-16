import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilis/Authentication";
import Navbar from "../../components/Navbar/Navbar";
import { Loading } from "../../components/loading/Loading";
import config from "../../config.json";
import { Redirect } from "../Redirect/Redirect";
import "./Product.css";
var prev_size = 0;

export const Product = () => {
  const [, setSortingOption] = useState("Alphabetical");
  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [redirectFlag, setRedirectFlag] = useState(false);

  const auth = useAuth();

  //   To route the page
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth.user);
    setLoading(true);
    axios
      .get("http://localhost:8000/api/product")
      .then((response) => {
        setDataList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const addToCart = async (event) => {
    if (!auth.user) {
      setRedirectFlag(true);
    }
    setLoading(true);
    await axios
      .put(config.UPDATE_USER_CART, {
        id: auth.id,
        productId: event.target.value,
        sign: "+",
        removeall: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  const buyNow = (event) => {
    console.log(event.target.value);
    navigate("/products/showCart");
  };
  // This function will invoke when there is a change in the sort and updateds the data in the page
  const optionChange = (event) => {
    setSortingOption(event.target.value);
    switch (event.target.value) {
      case "alphabetical":
        dataList.sort((a, b) => {
          if (a.productname < b.productname) return -1;
          else if (a.productname > b.productname) return 1;
          return 0;
        });
        break;
      case "low to high":
        dataList.sort((a, b) => a.cost - b.cost);
        break;
      case "high to low":
        dataList.sort((a, b) => b.cost - a.cost);
        break;
      default:
        break;
    }
  };
  //This function will invoke when the search button is pressed
  const searchThisItem = () => {
    let search = searchText.toLowerCase();
    if (prev_size > search.length) {
      axios
        .get("http:localhost:8000/api/product")
        .then((response) => setDataList(response.data))
        .catch((error) => console.log(error));
    }
    prev_size = search.length;
    let lst = [];
    for (let i = 0; i < dataList.length; i++) {
      let val = dataList[i].productname.toLowerCase();
      if (val.indexOf(search) !== -1) lst.push(dataList[i]);
    }
    setDataList(lst);
  };

  //   function to navigate the page to product page
  const divContainerClick = (id) => {
    navigate(`/products/${id}`);
  };

  const displayAllData = dataList.map((x, index) => (
    <div key={x._id} className="product-container">
      <div onClick={() => divContainerClick(x._id)}>
        <img className="convert-image" src={x.photos} alt={""}></img>
        <br></br>
        <div id="product-page-data-container">
          <div id="product-container-product-name">{x.productname}</div>
          <div id="product-container-price-container">MRP₹-{x.cost}</div>
        </div>
      </div>
      <button value={x._id} onClick={(event) => addToCart(event)}>
        Add to Cart
      </button>
      <button value={x._id} onClick={(event) => buyNow(event)}>
        Buy Now
      </button>
    </div>
  ));

  return (
    <>
      {isLoading ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : (
        <>
          {redirectFlag ? (
            <>
              <Redirect
                to_address="login"
                message="Please login to add products to cart"
              />
            </>
          ) : (
            <>
              <div>
                <Navbar></Navbar>{" "}
              </div>
              <div id="product-page-all-container">
                <div id="product-page-nav-container">
                  <div id="product-page-nav-total-data-container">
                    <span>Showing {dataList.length} items</span>
                  </div>
                  <div id="product-page-nav-serach-container">
                    <span>Search</span>
                    <input
                      onChange={(event) => {
                        setSearchText(event.target.value);
                        searchThisItem();
                      }}
                      value={searchText}
                    ></input>
                  </div>
                  <div id="product-page-nav-sort-container">
                    <span>Sort by :</span>
                    <select onChange={(event) => optionChange(event)}>
                      <option value={"none"}>None</option>
                      <option value={"alphabetical"}>Alphabetical</option>
                      <option value={"low to high"}>Low to High</option>
                      <option value={"high to low"}>High to Low</option>
                    </select>
                  </div>
                </div>
                <div className="grid-container">
                  {/* This is using the index as the keyprops and the value for the buttons */}
                  {displayAllData}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
