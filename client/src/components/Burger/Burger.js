import React from "react";

import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burger.css";

const Burger = () => {
  return (
    <div className={classes.burger}>
      <Ingredient type="top-bun" />
      <Ingredient type="cheese" />
      <Ingredient type="patty" />
      <Ingredient type="bottom-bun" />
    </div>
  );
};

export default Burger;
