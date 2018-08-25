import React, { Component } from "react";
import faker from "faker";

import Wrapper from "../../hoc/Wrapper/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildForm from "../../components/BuildForm/BuildForm";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Loader from "../../components/UI/Loader/Loader";
import withErrorMessage from "../../hoc/withErrorMessage/withErrorMessage";

import axios from "../../axios-instance";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  patty: 1.3,
  bacon: 0.7
};
class Builder extends Component {
  state = {
    ingredients: null,
    price: 4,
    purchase: false,
    purchasing: false,
    loading: false,
    error: null
  };
  componentDidMount() {
    axios
      .get("https://build-a-burger-5c46e.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
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
  handleUpdatePurchase = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({ purchase: sum > 0 });
  };
  handlePurchase = () => {
    this.setState({ purchasing: true });
  };
  handleCancelPurchase = () => {
    this.setState({ purchasing: false });
  };
  handleContinuePurchase = () => {
    this.setState({ loading: true });
    const order = {
      customer: {
        name: faker.name.findName(),
        address: {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          country: faker.address.country()
        },
        email: faker.internet.exampleEmail()
      },
      ingredients: this.state.ingredients,
      price: this.state.price,
      orderType: "delivery"
    };
    axios
      .post("/orders.json", order)
      .then(response => this.setState({ loading: false, purchasing: false }))
      .catch(error => this.setState({ loading: false, purchasing: false }));
  };
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }
    let orderSummary = null;

    let burgerAndBuildForm = this.state.error ? (
      <p>Cannot load app data!</p>
    ) : (
      <Loader />
    );
    if (this.state.ingredients) {
      burgerAndBuildForm = (
        <Wrapper>
          <Burger ingredients={this.state.ingredients} />
          <BuildForm
            price={this.state.price}
            addIngredient={this.handleAddIngredient}
            removeIngredient={this.handleRemoveIngredient}
            purchase={this.state.purchase}
            purchasing={this.handlePurchase}
            disable={disabledIngredients}
          />
        </Wrapper>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelPurchase={this.handleCancelPurchase}
          continuePurchase={this.handleContinuePurchase}
          price={this.state.price}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Loader />;
    }
    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          closeModal={this.handleCancelPurchase}
        >
          {orderSummary}
        </Modal>
        {burgerAndBuildForm}
      </Wrapper>
    );
  }
}

export default withErrorMessage(Builder, axios);
