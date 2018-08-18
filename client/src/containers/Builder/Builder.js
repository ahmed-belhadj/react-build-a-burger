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
    price: 4,
    purchase: false
  };
  handleAddIngredient = type => {
    const ingredientTotal = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    const updatedPrice = this.state.price + INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredientTotal;
    this.setState({ price: updatedPrice, ingredients: updatedIngredients });
    this.handleUpdatePurchase(updatedIngredients);
  };
  handleRemoveIngredient = type => {
    if (this.state.ingredients[type] === 0) {
      return;
    }
    const ingredientTotal = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    const updatedPrice = this.state.price - INGREDIENT_PRICES[type];
    updatedIngredients[type] = ingredientTotal;
    this.setState({ price: updatedPrice, ingredients: updatedIngredients });
    this.handleUpdatePurchase(updatedIngredients);
  };
  handleUpdatePurchase(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({ purchase: sum > 0 });
  }
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }
    return (
      <hoc>
        <Burger ingredients={this.state.ingredients} />
        <BuildForm
          price={this.state.price}
          addIngredient={this.handleAddIngredient}
          removeIngredient={this.handleRemoveIngredient}
          purchase={this.state.purchase}
          disable={disabledIngredients}
        />
      </hoc>
    );
  }
}

export default Builder;
