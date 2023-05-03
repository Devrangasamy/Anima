import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import axios from "axios";
// import Slider from "react-slick";
import "./Slider.css";

function SliderContent() {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rich-gray-macaw-sock.cyclic.app/api/product")
      .then((response) => {
        setList(response.data);
      })
      // setList([...response.data.slice(response.data.length-4,response.data.length)])})
      .catch((error) => console.log(error));
  }, []);

  // console.log(List);
  //   const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = List.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, List]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="new-products p-1 mt-4">
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> Available Products
          </h2>
        </div>
        <div className="section-center">
          {List.map((product, perind) => {
            //   const { _id, image, name, title, quote } = product;
            let position = "nextSlide";
            if (perind === index) {
              position = "activeSlide";
            }
            if (
              perind === index - 1 ||
              (index === 0 && perind === List.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={perind} className={position}>
                <img
                  src={product.photos}
                  alt={product.productname}
                  className="person-img"
                />
                <h4>{product.productname}</h4>
                <h6 className="title">₹{product.cost}</h6>
                {/* <p className="text">{quote}</p> */}
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default SliderContent;
