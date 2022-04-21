import {
  SEARCH_RECIPES,
  CLEAR_RECIPES,
  GET_RECIPE,
  SEARCH_FAIL,
  CLEAR_ERRORS,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  SET_LOADING,
} from "../types";

const foodReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
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
        recipe: {},
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.filter((fav) => fav.id !== action.payload),
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default foodReducer;
