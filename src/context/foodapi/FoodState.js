import React, { useReducer } from "react";
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
} from "../types";

let foodApiKey = process.env.REACT_APP_FOOD_API_KEY;

const FoodState = (props) => {
  const initialState = {
    recipes: [],
    recipe: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  // Search recipes
  const searchRecipes = async (text) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=1&apiKey=${foodApiKey}`
      );
      console.log(res.data.results);

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
      console.log(err);
    }
  };

  // Get Recipe
  const getRecipe = async (id) => {
    setLoading();
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${foodApiKey}`
    );

    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });
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
        loading: state.loading,
        error: state.error,
        searchRecipes,
        getRecipe,
        clearRecipes,
        clearErrors,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
