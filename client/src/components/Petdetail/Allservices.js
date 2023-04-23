import React from "react";
import medicare from "../../Assets/medicare.jpg";
import products from "../../Assets/products.jpg";
import petstore from "../../Assets/petstore.jpg";
import { Link } from "react-router-dom";
import Footers from "../Footer/Footers";
const Allservices = () => {
  return (
    <div className="d-flex gap-5 mt-5 pb-3">
      <div className="col">
        <img
          src={medicare}
          alt="medicare"
          className="rounded allservice-img"
        ></img>
        <div className="text-center pt-4">
          <p>
            Medical care is an important aspect of pet care. Regular check-ups
            with a veterinarian can help prevent and treat illnesses, while
            vaccinations can protect them from infectious diseases.
          </p>
          <Link to="/medicare" className="btn btn-primary">Medicare</Link>
        </div>
      </div>
      <div className="col">
        <img
          src={products}
          alt="medicare"
          className="rounded allservice-img"
        ></img>
        <div className="text-center pt-4">
          <p>
            Pet products can help improve the quality of life for our furry
            friends. From nutritious food and comfortable bedding to toys and
            grooming supplies, wide variety of products available to meet the
            needs of our pets.
          </p>
          <Link to="/products" className="btn btn-primary">Products</Link>
        </div>
      </div>
      <div className="col">
        <img
          src={petstore}
          alt="medicare"
          className="rounded allservice-img"
        ></img>
        <div className="text-center pt-4">
          <p>
            Pet stores provide a convenient one-stop-shop for all your pet’s
            needs. They offer a wide variety of products, including food, toys,
            bedding, grooming, grooming and veterinary care.
          </p>
          <button className="btn btn-primary">Petstore</button>
        </div>
      </div>
    </div>
  );
};

export default Allservices;
