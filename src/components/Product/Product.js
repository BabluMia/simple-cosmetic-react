import "./Product.css";
import ReactModal from "../ReactModal/ReactModal";

const Product = (props) => {
 

  const { brand, category, name, price, image_link} = props.product;
  const { addToCart ,click} = props;
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
        <div className="col-lg-8  ">
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
          <button className="custom-btn" onClick={() => addToCart(name)}>
            Add Cart
          </button>
          <ReactModal detail={props.product} newPrice={newPrice}></ReactModal>
          <button className="custom-btn mt-2 " onClick={()=>click(props.product)}> Add Side</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
