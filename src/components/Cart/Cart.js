import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const cart = props.cart;

  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  const formatNumber = (num) => {
    return Number(num.toFixed(2));
  };

  const tax = formatNumber(totalCost / 10);

  const grandTotal = totalCost + tax;

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Total Cost: ${formatNumber(totalCost)}</p>
      <p>
        <small>Tax+VAT: ${tax}</small>
      </p>
      <h5 style={{ color: "red" }}>Net Price: ${formatNumber(grandTotal)}</h5>
      <br />
      <button className="btn">
        <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Place Order
      </button>
    </div>
  );
};

export default Cart;
