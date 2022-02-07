import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="description">
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default Product;
