import React from "react";

import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burger.css";

const Burger = props => {
  let dynamicIngredients = Object.keys(props.ingredients)
    .map(type => {
      return [...Array(props.ingredients[type])].map((_, index) => {
        return <Ingredient key={type + index} type={type} />;
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);
  if (dynamicIngredients.length === 0) {
    dynamicIngredients = <p>Start adding ingredients to build your burger!</p>;
  }
  return (
    <div className={classes.burger}>
      <Ingredient type="top-bun" />
      {dynamicIngredients}
      <Ingredient type="bottom-bun" />
    </div>
  );
};

export default Burger;
