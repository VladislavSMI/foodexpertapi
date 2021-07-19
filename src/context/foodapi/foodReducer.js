import {
  SEARCH_RECIPES,
  SET_LOADING,
  CLEAR_RECIPES,
  GET_RECIPE,
} from "../types";

const foodReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default foodReducer;
