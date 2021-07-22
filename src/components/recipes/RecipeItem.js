import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const RecipeItem = ({ recipe }) => {
  return (
    <div className="card text-center bg-primary">
      <img src={recipe.image} alt="" style={{ width: "200px" }} />
      <h3>{recipe.title}</h3>
      <div className="my">
        <Link to={`/recipe/${recipe.id}`} className="btn btn-dark btn-sm ny-1">
          More
        </Link>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
