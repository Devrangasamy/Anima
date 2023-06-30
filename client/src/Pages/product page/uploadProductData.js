import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Sample } from "../sample/sample";
import { Sam } from "./Sample";
import "./uploadProductData.css";

export const UploadProductData = () => {
  const [productName, setproductName] = Sam("");
  const [cost, setCost] = Sam("");
  const [animal, setAnimal] = Sam("");
  const [imageLink, setImageLink] = Sam("");
  const [rating, setRating] = Sam("");

  // For Showing the descriptions
  const [desc, setDesc] = useState([]);
  // For the tittle and the value
  const [descTittle, setDescTittle] = useState("");
  const [descDesc, setDescDesc] = useState("");

  const [totalSpec, setTotalSpec] = useState([]); //To store the specification single singly
  const [specsList, setSpecsList] = useState([]); // data for the specification list
  const [specTittle, setSpecTittle] = useState("");

  // this is for the sub tittle in the specs container
  const [specSubTittle, setSpecSubTittle] = useState("");
  const [specSubValue, setSpecSubValue] = useState("");

  // to provide id
  const [descId, setDescId] = useState(0);
  const increaseDescId = () => {
    setDescId((prev) => prev + 1);
  };

  // Function to add at front and last description's
  const reset = () => {
    setDescDesc("");
    setDescTittle("");
    setSpecSubTittle("");
    setSpecSubValue("");
  };
  const addDescFront = () => {
    setDesc([{ id: descId, tittle: descTittle, value: descDesc }, ...desc]);
    increaseDescId();
    reset();
  };
  const addDescBack = () => {
    setDesc([...desc, { id: descId, tittle: descTittle, value: descDesc }]);
    increaseDescId();
    console.log(desc);
    reset();
  };
  const deleteDesc = (event) => {
    console.log(event.target.value);
  };

  const addToTotalSpec = () => {
    setTotalSpec([
      ...totalSpec,
      { tittle: specTittle, specificationList: specsList },
    ]);
    setSpecsList([]);
    console.log(totalSpec);
  };

  const addSpec = () => {
    setSpecsList([
      ...specsList,
      { tittle: specSubTittle, value: specSubValue },
    ]);
    reset();
    console.log(specsList);
  };

  const descDisplay = (
    <div>
      <h5>Entered Descriptions</h5>
      {desc.map((item, index) => (
        <div
          key={index}
          className="UPDdescContainer"
          style={{ marginBottom: "5px" }}
        >
          <div style={{ width: "30px" }}>
            <Form.Control type="text" value={`${index}`} size="sm" readOnly />
          </div>
          <div
            className="UPDDescInputContainer"
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            <Form.Control type="text" size="sm" readOnly value={item.tittle} />
          </div>
          <div
            className="UPDDescInputContainer"
            style={{ marginRight: "10px" }}
          >
            <Form.Control type="text" size="sm" readOnly value={item.value} />
          </div>
          <div>
            <Button
              variant="danger"
              size="sm"
              onClick={deleteDesc}
              value={index}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );    

  const postTheData = (event) => {
    event.preventDefault();
    let data = {
      productname: productName,
      cost: cost,
      rating: rating,
      animal: animal,
      photos: imageLink,
      description: desc,
      specification: totalSpec,
    };
    axios
      .post("http://localhost:8000/api/product", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={postTheData}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pedigree"
            value={productName}
            onChange={setproductName}
          />
        </Form.Group>
        <Form.Group controlId="formAnimalName">
          <Form.Label>Animal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dog"
            value={animal}
            onChange={setAnimal}
          />
        </Form.Group>
        <Form.Group controlId="formCost">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="text"
            placeholder="1000"
            value={cost}
            onChange={setCost}
          />
        </Form.Group>
        <Form.Group controlId="formImageLink">
          <Form.Label>ImageLink</Form.Label>
          <Form.Control
            type="text"
            placeholder="http://localhost:2000/sampleimage"
            value={imageLink}
            onChange={setImageLink}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <div className="UPDdescContainer">
            <div
              className="UPDDescInputContainer"
              style={{ marginRight: "10px" }}
            >
              <Form.Control
                type="text"
                placeholder="Tittle"
                value={descTittle}
                onChange={(e) => setDescTittle(e.target.value)}
              />
            </div>
            <div
              className="UPDDescInputContainer"
              style={{ marginRight: "10px" }}
            >
              <Form.Control
                type="text"
                placeholder="Value"
                value={descDesc}
                onChange={(e) => setDescDesc(e.target.value)}
              />
            </div>
            <div>
              <Button
                variant="outline-primary"
                onClick={addDescBack}
                style={{ marginRight: "10px" }}
              >
                Add to Back
              </Button>
              <Button variant="outline-primary" onClick={addDescFront}>
                Add to Front
              </Button>
            </div>
          </div>
          {desc.length > 0 && descDisplay}
        </Form.Group>
        <Form.Group controlId="formSpecification">
          <input
            value={specTittle}
            onChange={(e) => setSpecTittle(e.target.value)}
            placeholder="Tittle"
          ></input>
          <br />
          <input
            onChange={(e) => setSpecSubTittle(e.target.value)}
            value={specSubTittle}
            placeholder="specs tittle"
          ></input>
          <input
            onChange={(e) => setSpecSubValue(e.target.value)}
            value={specSubValue}
            placeholder="specs value"
          ></input>
          <button onClick={addSpec} type="button">
            Add to spec list
          </button>
          <button type="button" onClick={addToTotalSpec}>
            Add spec
          </button>
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Ratings</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter between 0 and 5"
            value={rating}
            onChange={setRating}
          />
        </Form.Group>
        <Button
          variant="primary"
          size="sm"
          type="submit"
          onClick={() => console.log("Primary")}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
