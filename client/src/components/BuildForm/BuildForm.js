import React from "react";

import BuildInput from "./BuildInput/BuildInput";
import classes from "./BuildForm.css";

const BuildForm = props => {
  const ingredients = [
    { label: "Lettuce", type: "lettuce" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Patty", type: "patty" }
  ];
  return (
    <div className={classes.buildForm}>
      {ingredients.map(ingredient => (
        <BuildInput key={ingredient.label} label={ingredient.label} />
      ))}
    </div>
  );
};

export default BuildForm;
