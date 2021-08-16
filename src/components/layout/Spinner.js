import React, { Fragment } from "react";
import spinner from "./spinner_3.gif";

export const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          alt="Loading..."
          style={{
            width: "200px",
            margin: "auto",
            display: "block",
          }}
        />
      </Fragment>
    </div>
  );
};
