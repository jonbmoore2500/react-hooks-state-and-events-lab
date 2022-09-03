import React, { useState } from "react";

function Item({ name, category }) {
  
  const [cartStatus, setCartStatus] = useState("")
  function handleCart() {
    let newStatus = ""
    if (cartStatus === "") {
      newStatus = "in-cart"
    }
    setCartStatus(() => newStatus)
  }
  
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartStatus.length > 3 ? "Remove from Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
