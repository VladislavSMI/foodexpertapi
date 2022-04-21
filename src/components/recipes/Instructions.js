import React from "react";
import PropTypes from "prop-types";

export const Instructions = ({ instructions, name, listStyleType }) => {
  return (
    <div className="card bg-primary">
      <h2>{name}</h2>
      <div className="list">
        <ul className={listStyleType}>
          {instructions.map((steps) =>
            steps.steps.map((step, index) => <li key={index}>{step.step}</li>)
          )}
        </ul>
      </div>
    </div>
  );
};

Instructions.defaultProps = {
  instructions: [],
};

Instructions.propTypes = {
  instructions: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  listStyleType: PropTypes.string.isRequired,
};
