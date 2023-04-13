import React from "react";
import "./Petregisteration.css";
export const Petregisteration = () => {
  return (
    <div className="parent container d-flex justify-content-center align-items-center h-100 petregisteration">
      <div className="child formpet">
        <form action="/action_page.php">
          <div class="my-3">
            <label for="email">Pet Name : </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Petname"
              name="name"
            />
          </div>
          <div class="mb-3">
            <label for="pwd">Bread : </label>
            <input
              type="text"
              class="form-control"
              id="bread"
              placeholder="Enter bread"
              name="bread"
            />
          </div>
          <div class="mb-3">
            <label for="pwd">Age : </label>
            <input
              type="number"
              class="form-control"
              id="age"
              placeholder="Enter Age"
              name="bread"
            />
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
