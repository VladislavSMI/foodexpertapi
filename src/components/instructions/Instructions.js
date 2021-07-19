import React from "react";
import PropTypes from "prop-types";

export const Instructions = ({ steps }) => {
  let id = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return (
    <div className="card">
      <h2>Instructions</h2>
      <div className="list">
        <ol>
          {steps.map((step) => (
            <li key={id()}>{step.step} </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.array.isRequired,
};
