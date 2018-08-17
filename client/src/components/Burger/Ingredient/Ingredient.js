import React from "react";

import classes from "./Ingredient.css";

const Ingredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "top-bun":
      ingredient = (
        <div className={classes.topBun}>
          <div className={classes.sesameSeeds1} />
          <div className={classes.sesameSeeds2} />
        </div>
      );
      break;
    case "bacon":
      ingredient = <div className={classes.bacon} />;
      break;
    case "lettuce":
      ingredient = <div className={classes.lettuce} />;
      break;
    case "cheese":
      ingredient = <div className={classes.cheese} />;
      break;
    case "patty":
      ingredient = <div className={classes.patty} />;
      break;
    case "bottom-bun":
      ingredient = <div className={classes.bottomBun} />;
      break;
    default:
      ingredient = null;
  }
};

export default Ingredient;
