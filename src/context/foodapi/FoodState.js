import React, { useReducer, useEffect } from "react";
import axios from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";

import {
  SEARCH_RECIPES,
  SET_LOADING,
  CLEAR_RECIPES,
  GET_RECIPE,
  SEARCH_FAIL,
  CLEAR_ERRORS,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
} from "../types";

let foodApiKey;

if (process.env.NODE_ENV !== "production") {
  foodApiKey = process.env.REACT_APP_FOOD_API_KEY_LOCAL;
} else {
  foodApiKey = process.env.REACT_APP_FOOD_API_KEY_PRODUCTION;
}

const FoodState = (props) => {
  const initialState = {
    recipes: [],
    recipe: {},
    favourite: JSON.parse(localStorage.getItem("favouriteRecipes"))
      ? JSON.parse(localStorage.getItem("favouriteRecipes"))
      : [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouriteRecipes", JSON.stringify(state.favourite));
  }, [state.favourite]);

  // Search recipes
  const searchRecipes = async (text) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=3&apiKey=${foodApiKey}`
      );
      if (res.data.results.length === 0) {
        dispatch({
          type: SEARCH_FAIL,
          payload: "Invalid search, please search again",
        });
      } else {
        dispatch({
          type: SEARCH_RECIPES,
          payload: res.data.results,
        });
      }
    } catch (err) {
      dispatch({
        type: SEARCH_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  // Get Recipe
  const getRecipe = async (id) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${foodApiKey}`
      );

      dispatch({
        type: GET_RECIPE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_FAIL,
        payload: err.response.message,
      });
    }
  };

  // Add Favourite
  const addFavourite = (favouriteRecipe) => {
    const uniqueFavouriteRecipe = state.favourite.filter(
      (fav) => fav.id === favouriteRecipe.id
    );

    if (!uniqueFavouriteRecipe.length) {
      dispatch({
        type: ADD_FAVOURITE,
        payload: favouriteRecipe,
      });
    }
  };

  // Delete Favourite
  const deleteFavourite = (idRecipe) => {
    dispatch({ type: DELETE_FAVOURITE, payload: idRecipe });
  };

  // Clear Recipes
  const clearRecipes = () => dispatch({ type: CLEAR_RECIPES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <FoodContext.Provider
      value={{
        recipes: state.recipes,
        recipe: state.recipe,
        favourite: state.favourite,
        loading: state.loading,
        error: state.error,
        searchRecipes,
        getRecipe,
        addFavourite,
        deleteFavourite,
        clearRecipes,
        clearErrors,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
