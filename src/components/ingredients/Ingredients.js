import React from "react";
import PropTypes from "prop-types";

import { IngredientItem } from "./IngredientItem";

export const Ingredients = ({ ingredients }) => {
  let id = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return (
    // <div></div>
    <div className="card">
      <h2>Ingredients</h2>
      <div>
        {ingredients.map((ing) => (
          <IngredientItem key={id()} ing={ing} />
        ))}
      </div>
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
