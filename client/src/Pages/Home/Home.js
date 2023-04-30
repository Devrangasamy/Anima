import React, { useEffect, useState } from "react";
import "./Home.css";
import pet1 from "../../Assets/pet1.jpg";
import pet2 from "../../Assets/pet2.jpg";
import pet3 from "../../Assets/pet3.jpg";
import pet4 from "../../Assets/pet4.jpg";
import pet5 from "../../Assets/pet5.jpg";
import next from "../../Assets/next.jpg";
import slide2image from "../../Assets/Slide2home.jpg";
import Navbar from '../../components/Navbar/Navbar'
import Footers from "../../components/Footer/Footers";
import { Link } from "react-router-dom";
import axios from "axios"
export const Home = () => {
  const [List,setList]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
    .then((response) => 
     {

      setList([...response.data.slice(response.data.length-4,response.data.length)])})
    .catch((error) => console.log(error))    
},[]
)
  // console.log(List[0].photos)
const displayAllData = List.map((x, index) => 
<div key = {index} className='col-sm-3 col-md pro-con'>
    <img className='convert-imgs' src = {x.photos} alt = {""}></img><br></br>
    <div id='product-page-data-container'>
        <div id='product-name'>{x.productname}</div>
        <h4 id='price-container'>MRP₹-{x.cost}</h4>
      </div>
    </div>
)


  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="container">
        <div className="row my-3">
          <div className="col-sm-12 col-lg-6 my-lg-5 py-lg-5">
            <h1 className="quotes">Loving sitters take care of your pet</h1>
            <p className="care">
              Our facility provides professional care-giving in a clean safe and
              home-like environment for your pet
            </p>
            <p className="imagequotes">
              <span>We can take care of your</span>
            </p>
            <div className="pets">
              <img src={pet1} alt="pet1"></img>
              <img src={pet2} alt="pet2"></img>
              <img src={pet3} alt="pet3"></img>
              <img src={pet4} alt="pet4"></img>
              <img src={pet5} alt="pet5"></img>
              <img className="next" src={next} alt="pet5"></img>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <img className="main-image" src={slide2image} alt="pet5"></img>
          </div>
        </div>
      <br></br>  <br></br> <br></br> <br></br>
      
    
      <div className="" >
        <div>
          <h1 className="kind-service d-flex justify-content-center">
            The Kind of service we provide.
          </h1>
        </div>
        <div>
          <p className="d-flex justify-content-center">
            Our websites may also offer services such as online pet stores, pet
            adoption, pet sitting, and veterinary care directories.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div class="row d-flex justify-content-center container-first">
          <div class="col-sm-6 col-md-4 col-lg-3 main-first" >
              <div>
                <i class="fa-solid fa-heart-circle-plus icon-first"></i>
              </div>
              <div>
                <h3 class="head-firsts">Pet Care</h3>
                <br></br>
            <p class="para-first">Pet care websites provide information, resources, and services related to the care of pets, including dogs, cats, birds, fish, and other animals.</p>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 main-first">
              <div>
                <i class="fa-solid fa-gift icon-first"></i>
              </div>
              <div>
                <h3 class="head-first">Pet Gifts</h3>
                <br></br>
            <p class="para-first">Toys, treats, beds, and grooming supplies are all great pet gift ideas.</p>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center container-first">
            <div class="col-sm-6 col-md-4 col-lg-3 main-first">
              <div>
                <i class="fa-sharp fa-solid fa-heart-pulse icon-first"></i>

              </div>
              <div>
                <h3 class="head-firsts">Medi-Care</h3>
                <br></br>
            <p class="para-first">Regular veterinary check-ups, vaccinations, and preventive care measures are essential for maintaining your pet's health and well-being.</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 main-first">
              <div>

                <i class="fa-solid fa-house icon-first"></i>
              </div>
              <div>
                <h3 class="head-first">Home Visit</h3>
                <br></br>
            <p class="para-first">Home visit pet care services provide convenient and personalized care for pets in the comfort of their own homes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-between px-5">
        <h3 class="trending-pro">New Products</h3>
       <h6><Link to="/products" className="all-pro">Show all new Products</Link></h6> 
      </div>
      <div>
      <div class="row p-5 m-5 new-products gap-5" >
          {displayAllData}
        <Link to="/products" className="all-pro" style={{textAlign:"center",color:"black"}}>See More...</Link>
        </div>

      </div>
      <Footers></Footers>
    </div>
  );
};
