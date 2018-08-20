import React from "react";

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
      <p>Continue?</p>
    </div>
  );
};

export default OrderSummary;
