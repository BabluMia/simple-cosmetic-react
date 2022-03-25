import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const {name,brand,image_link,category} =props.detail
    const {newPrice} = props
     // for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <button className="custom-btn ms-2" onClick={handleShow}>
            See Detail
          </button>
        <Modal show={show}  onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>
                <strong>Product Name: </strong>
                {name}
              </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <img src={image_link} className="img-fluid" alt="" />
              </div>
              <div className="col-6">
                <p>
                  <strong>Brand: </strong> {brand}
                </p>
                <p>
                  <strong>Category: </strong>
                  {category ? category : "N/A"}
                </p>
                <p>
                  <strong>Product Name: </strong>
                  {name}
                </p>
                <p>
                  <strong>Price: </strong>$ {newPrice}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
};

export default ReactModal;