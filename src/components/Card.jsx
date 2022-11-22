import React from "react";
import { useStoreDataContext } from "../context/Store";

const Card = ({ product }) => {
  const { setSelectedItems } = useStoreDataContext();

  return (
    <div onClick={() => setSelectedItems((x) => [...x, product])}>
      <img src={product.image} alt="productImage" style={{ height: "150px" }} />
      <div>
        <div>{product.productName}</div>
        <div>{product.productDescription}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
};

export default Card;
