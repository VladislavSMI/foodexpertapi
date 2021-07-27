import React, { useContext } from "react";
import { RecipeItem } from "./RecipeItem";
import { Spinner } from "../layout/Spinner";
import FoodContext from "../../context/foodapi/foodContext";

export const FavouriteRecipes = () => {
  const foodContext = useContext(FoodContext);

  const { loading, favourite } = foodContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {favourite.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridGap: "1rem",
};
