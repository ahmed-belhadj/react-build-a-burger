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
        <BuildInput
          key={ingredient.label}
          label={ingredient.label}
          more={() => props.addIngredient(ingredient.type)}
          less={() => props.removeIngredient(ingredient.type)}
          disabled={props.disable[ingredient.type]}
        />
      ))}
    </div>
  );
};

export default BuildForm;
