import React, { useReducer } from "react";
import axios from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";

import {
  SEARCH_RECIPES,
  SET_LOADING,
  CLEAR_RECIPES,
  GET_RECIPE,
} from "../types";

let foodApiKey = process.env.REACT_APP_FOOD_API_KEY;

const FoodState = (props) => {
  const initialState = {
    recipes: [],
    recipe: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  // Search recipes
  const searchRecipes = async (text) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=1&apiKey=${foodApiKey}`
      );
      
      dispatch({
        type: SEARCH_RECIPES,
        payload: res.data.results,
      });

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

  return (
    <FoodContext.Provider
      value={{
        recipes: state.recipes,
        recipe: state.recipe,
        loading: state.loading,
        searchRecipes,
        getRecipe,
        clearRecipes,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
