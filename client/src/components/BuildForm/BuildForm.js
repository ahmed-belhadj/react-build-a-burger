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
      <p>
        Total: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {ingredients.map(ingredient => (
        <BuildInput
          key={ingredient.label}
          label={ingredient.label}
          more={() => props.addIngredient(ingredient.type)}
          less={() => props.removeIngredient(ingredient.type)}
          disabled={props.disable[ingredient.type]}
        />
      ))}
      <button className={classes.orderButton} disabled={!props.purchase}>
        ORDER NOW!
      </button>
    </div>
  );
};

export default BuildForm;
