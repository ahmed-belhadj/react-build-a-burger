import React, { Component } from "react";

import Button from "../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {}
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredient => {
        return (
          <li key={ingredient}>
            <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:
            {this.props.ingredients[ingredient]}
          </li>
        );
      }
    );
    return (
      <div>
        <h3>Order summary</h3>
        <p>Ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue?</p>
        <Button type="danger" clicked={this.props.cancelPurchase}>
          CANCEL
        </Button>
        <Button type="success" clicked={this.props.continuePurchase}>
          CONTINUE
        </Button>
      </div>
    );
  }
}

export default OrderSummary;
