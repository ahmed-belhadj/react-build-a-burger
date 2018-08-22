import React from "react";

import Button from "../Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:
        {props.ingredients[ingredient]}
      </li>
    );
  });
  return (
    <div>
      <h3>Order summary</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue?</p>
      <Button type="danger" clicked={props.cancelPurchase}>
        CANCEL
      </Button>
      <Button type="success" clicked={props.continuePurchase}>
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
