import React from "react";
import PropTypes from "prop-types";

export const Ingredients = ({ ingredients }) => {
  let id = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return (
    <div className="card">
      <h2>Ingredients</h2>

      <div className="list">
        <ul>
          {ingredients.map((ingredient) => (
            <li key={id()}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
