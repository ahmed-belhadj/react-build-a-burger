import React, { Component } from "react";

import hoc from "../../hoc/hoc";
import Burger from "../../components/Burger/Burger";
import BuildForm from "../../components/BuildForm/BuildForm";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  patty: 1.3,
  bacon: 0.7
};
class Builder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      patty: 0
    },
    price: 4
  };
  handleAddIngredient = type => {
    const ingredientTotal = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    const ingredientPrice = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.price + ingredientPrice;
    updatedIngredients[type] = ingredientTotal;
    this.setState({ price: updatedPrice, ingredients: updatedIngredients });
  };
  handleRemoveIngredient = type => {};
  render() {
    return (
      <hoc>
        <Burger ingredients={this.state.ingredients} />
        <BuildForm addIngredient={this.handleAddIngredient} />
      </hoc>
    );
  }
}

export default Builder;
