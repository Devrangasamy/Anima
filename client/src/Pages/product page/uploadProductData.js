import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Sample } from "../sample/sample";
import { Sam } from "./Sample";

export const UploadProductData = () => {
  const [productName, setproductName] = Sam("");
  const [cost, setCost] = Sam("");
  const [animal, setAnimal] = Sam("");
  const [imageLink, setImageLink] = Sam("");
  const [rating, setRating] = Sam("");

  // For Showing the descriptions
  const [desc, setDesc] = useState([]);
  const [descTittle, setDescTittle] = useState("");
  const [descDesc, setDescDesc] = useState("");
  const [totalSpec, setTotalSpec] = useState([])
  const [specsList, setSpecsList] = useState([]);
  const [specTittle, setSpecTittle] = useState("");
  const [specSubTittle, setSpecSubTittle] = useState("");
  const [specSubValue, setSpecSubValue] = useState("");

  // Function to add at front and last description's
  const reset = () => {
    setDescDesc("");
    setDescTittle("");
    setSpecSubTittle("");
    setSpecSubValue("");
  };
  const addDescFront = () => {
    setDesc([...desc, { tittle: descTittle, value: descDesc }]);
    reset();
  };
  const addDescBack = () => {
    setDesc([{ tittle: descTittle, value: descDesc }, ...desc]);
    reset();
  };

  const addToTotalSpec = () => {
    setTotalSpec([...totalSpec, {tittle : specTittle, specificationList : specsList}])
  }

  const addSpec = () => {
    setSpecsList([
      ...specsList,
      { tittle: specSubTittle, value: specSubValue },
    ]);
    reset()
    console.log(specsList)
  };

  const descDisplay = desc.map((item, index) => (
    <div key={index}>
      <input value={item.tittle} readOnly></input>
      <input value={item.value} readOnly></input>
    </div>
  ));

  return (
    <>
      <Form>
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
          <Form.Control
            type="text"
            placeholder="Tittle"
            value={descTittle}
            onChange={(e) => setDescTittle(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Value"
            value={descDesc}
            onChange={(e) => setDescDesc(e.target.value)}
          />
          <button onClick={addDescBack} type="button">
            Add to Back
          </button>
          <button onClick={addDescFront} type="button">
            Add to Front
          </button>
        </Form.Group>
        <Form.Group controlId="formSpecification">
          <input
            value={specTittle}
            onChange={(e) => setSpecTittle(e.target.value)}
          ></input>
          <br />
          <input
            onChange={(e) => setSpecSubTittle(e.target.value)}
            value={specSubTittle}
          ></input>
          <input
            onChange={(e) => setSpecSubValue(e.target.value)}
            value={specSubValue}
          ></input>
          <button onClick={addSpec} type="button">
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
      </Form>
      {descDisplay}
    </>
  );
};
