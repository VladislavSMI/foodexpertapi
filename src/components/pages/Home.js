import React from "react";
import { Search } from "../recipes/Search";
import { Recipes } from "../recipes/Recipes";

export const Home = () => {
  return (
    <div>
      <Search />
      <Recipes />
    </div>
  );
};
