import React, { Fragment } from "react";
import { Search } from "../recipes/Search";
import { Recipes } from "../recipes/Recipes";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Recipes />
    </Fragment>
  );
};
