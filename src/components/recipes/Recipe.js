import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";
import { Instructions } from "./Instructions";
import { Ingredients } from "./Ingredients";

import { Link } from "react-router-dom";
import FoodContext from "../../context/foodapi/foodContext";

export const Recipe = ({ match }) => {
  const foodContext = useContext(FoodContext);
  const {
    getRecipe,
    loading,
    recipe,
    favourite,
    addFavourite,
    deleteFavourite,
  } = foodContext;

  useEffect(() => {
    getRecipe(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    id,
    image,
    title,
    readyInMinutes,
    summary,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
    extendedIngredients,
    analyzedInstructions,
  } = recipe;

  let existInFavourite = favourite.filter((fav) => fav.id === id);

  if (loading) return <Spinner />;
  
  return (
    <Fragment>
      <div className="text-center">
        <Link to="/" className="btn btn-dark my-1">
          Back To Search
        </Link>
        {!existInFavourite.length ? (
          <button
            className="btn btn-light"
            onClick={() => addFavourite({ id, image, title })}
          >
            Add To Favourite
          </button>
        ) : (
          <button className="btn btn-dark" onClick={() => deleteFavourite(id)}>
            Delete From Favourite
          </button>
        )}
      </div>
      <div className="card grid-2 bg-primary">
        <div className="all-center">
          <img src={image} alt="" style={{ width: "250px" }} />
          <h1>{title}</h1>
          <p>Time to prepare: {readyInMinutes} minutes</p>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
      </div>
      <div className="card text-center">
        {vegetarian ? (
          <div className="badge badge-success">Vegeterian</div>
        ) : (
          <div className="badge badge-danger">Vegeterian</div>
        )}

        {vegan ? (
          <div className="badge badge-success">Vegan</div>
        ) : (
          <div className="badge badge-danger">Vegan</div>
        )}

        {glutenFree ? (
          <div className="badge badge-success">Gluten-free</div>
        ) : (
          <div className="badge badge-danger">Gluten-free</div>
        )}

        {dairyFree ? (
          <div className="badge badge-success">Dairy-free </div>
        ) : (
          <div className="badge badge-danger">Dairy-free </div>
        )}
        {veryHealthy ? (
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
      <Ingredients
        name={"Ingredients"}
        ingredients={extendedIngredients}
        listStyleType={"square"}
      />
      <Instructions
        name={"Instructions"}
        instructions={analyzedInstructions}
        listStyleType={"decimal"}
      />
    </Fragment>
  );
};
