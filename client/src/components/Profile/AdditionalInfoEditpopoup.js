import React, { useState } from "react";
import axios from "axios";
// Components
import CustomHooksForm from "./CustomHooksForm";
import { Button, Modal } from "react-bootstrap";

const AdditionalInfoEditpopoup = (props) => {
  const { birthday, address, gender, handleShow, update, close } = props;

  const [updatebirthday, setbirthday] = CustomHooksForm(birthday);
  const [updategender, setgender] = CustomHooksForm(gender);
  const [updateaddress, setaddress] = CustomHooksForm(address);

  const [show, setShow] = useState(false);

  React.useEffect(() => {
    if (handleShow) {
      setShow(true);
    }
  }, [handleShow]);

  const handleClose = () => {
    setShow(false);
    close();
  };

  const submit = (e) => {
    e.preventDefault();
    handleClose();
    axios
      .put(
        `https://rich-gray-macaw-sock.cyclic.app/api/auth/${localStorage.getItem("username")}`,
        {
          birthday: String(updatebirthday),
          gender: updategender,
          address: updateaddress,
        }
      )
      .then((data) => {
        console.log("data upadted successfully");
        update();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Birthday</label>
              <input
                type="date"
                className="form-control"
                value={updatebirthday}
                onChange={setbirthday}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                value={updategender}
                onChange={setgender}
                className="form-control"
                required
              >
                <option value="">select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                value={updateaddress}
                onChange={setaddress}
                className="form-control"
              ></textarea>
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

export default AdditionalInfoEditpopoup;
