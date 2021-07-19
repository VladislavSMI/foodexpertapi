import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";
import { Ingredients } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";

import { Link } from "react-router-dom";
import FoodContext from "../../context/foodapi/foodContext";

export const Recipe = ({ match }) => {
  const foodContext = useContext(FoodContext);
  const { getRecipe, loading, recipe } = foodContext;

  useEffect(() => {
    getRecipe(match.params.id);
    // eslint-disable-next-line
  }, []);

  // typeof undefined => the fix the problem with first rendering and cannt map of undefined bug
  if (
    loading ||
    typeof recipe.extendedIngredients === "undefined" ||
    typeof recipe.analyzedInstructions[0].steps === "undefined"
  ) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-dark">
          Back To Search
        </Link>
        <div className="card grid-2">
          <div className="all-center">
            <img src={recipe.image} alt="" style={{ width: "250px" }} />
            <h1>{recipe.title}</h1>
            <p>Time to prepare: {recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
          </div>
        </div>
        <div className="card text-center">
          {recipe.vegetarian ? (
            <div className="badge badge-success">Vegeterian</div>
          ) : (
            <div className="badge badge-danger">Vegeterian</div>
          )}

          {recipe.vegan ? (
            <div className="badge badge-success">Vegan</div>
          ) : (
            <div className="badge badge-danger">Vegan</div>
          )}

          {recipe.glutenFree ? (
            <div className="badge badge-success">Gluten-free</div>
          ) : (
            <div className="badge badge-danger">Gluten-free</div>
          )}

          {recipe.dairyFree ? (
            <div className="badge badge-success">Dairy-free </div>
          ) : (
            <div className="badge badge-danger">Dairy-free </div>
          )}
          {recipe.veryHealthy ? (
            <div className="badge badge-success">Very healthy</div>
          ) : (
            <div className="badge badge-danger">Very healthy</div>
          )}
          {recipe.spoonacularScore >= 75 ? (
            <div className="badge badge-success">{recipe.spoonacularScore}</div>
          ) : (
            <div className="badge badge-danger">{recipe.spoonacularScore}</div>
          )}
        </div>
        <Ingredients ingredients={recipe.extendedIngredients} />
        <Instructions steps={recipe.analyzedInstructions[0].steps} />
      </Fragment>
    );
  }
};
