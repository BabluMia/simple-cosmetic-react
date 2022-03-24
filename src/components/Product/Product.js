import "./Product.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Product = (props) => {
  // for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { brand, category, name, price, image_link, id } = props.product;
  const { addToCart } = props;
  // console.log(addToCart);
  let newPrice;
  if (props.product.length % 2 === 0) {
    newPrice = +price + 5.0;
  } else {
    newPrice = +price + 6.45;
  }
  return (
    <div className="cart">
      <div className="row">
        <div className="col-lg-4">
          <img className="img-fluid h-100" src={image_link} alt="" />
        </div>
        <div className="col-lg-8">
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
          <button className="custom-btn" onClick={() => addToCart(id)}>
            Add Cart
          </button>
          <button className="custom-btn ms-2" onClick={handleShow}>
            See Detail
          </button>
        </div>
      </div>
      <div className="modal" >
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
      </div>
    </div>
  );
};

export default Product;
