import React from "react";
import PropTypes from "prop-types";

export const Ingredients = ({ ingredients, name, listStyleType }) => {

  return (
    <div className="card bg-primary">
      <h2>{name}</h2>
      <div className="list">
        <ul className={listStyleType}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Ingredients.defaultProps = {
  ingredients: [],
};

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  listStyleType: PropTypes.string.isRequired,
};
