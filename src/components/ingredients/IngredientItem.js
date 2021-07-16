import React from "react";
import PropTypes from "prop-types";

export const IngredientItem = ({ ing }) => {
  return (
    <div className="list">
      <ul>
        <li>{ing.original}</li>
      </ul>
    </div>
  );
};

IngredientItem.propTypes = {
  ing: PropTypes.object.isRequired,
};
