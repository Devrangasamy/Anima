import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

// components

import CustomHooksForm from "./CustomHooksForm";

const ProfileInformationEditPopup = (props) => {
  const [show, setShow] = useState(false);

  const { username, useremail, usercontact, handleShow, update, close } = props;

  const [updatename, setupdatename] = CustomHooksForm(username);
  const [updateemail, setupdateemail] = CustomHooksForm(useremail);
  const [updatecontact, setupdatecontact] = CustomHooksForm(usercontact);
  const [updateimg, setupdateimg] = useState();

  React.useEffect(() => {
    if (handleShow) {
      setShow(true);
    }
  }, [handleShow]);

  const handleClose = () => {
    setShow(false);
    close();
  };

  function convertToBase64(e) {
    setupdateimg(e.target.files[0]);
  }
  const submit = (e) => {
    e.preventDefault();
    handleClose();
    const formData = new FormData();
    console.log(updatename);
    formData.append("username", updatename);
    formData.append("email", updateemail);
    formData.append("contact", updatecontact);
    formData.append("image", updateimg);
    axios
      .put(
        `https://rich-gray-macaw-sock.cyclic.app/api/auth/${localStorage.getItem("username")}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((data) => {
        localStorage.setItem("username", updatename);
        console.log("data upadted successfully");
        update();
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert(err.message);
        }
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 mt-3">
              <div className="mb-3">
                <label className="form-label">Profile Image</label>
                <input
                  accept="image/*"
                  type="file"
                  onChange={convertToBase64}
                  className="form-control"
                ></input>
              </div>
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={updatename}
                onChange={setupdatename}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={updateemail}
                onChange={setupdateemail}
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                type="number"
                value={updatecontact}
                onChange={setupdatecontact}
                className="form-control"
              ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileInformationEditPopup;
