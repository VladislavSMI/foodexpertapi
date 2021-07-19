import React, { useState, useContext } from "react";
import FoodContext from "../../context/foodapi/foodContext";
import AlertContext from "../../context/alert/alertContext";

export const Search = () => {
  const foodContext = useContext(FoodContext);
  const alertContext = useContext(AlertContext);

  const { recipes, clearRecipes, searchRecipes } = foodContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please search for some desired meal", "light");
    } else {
      searchRecipes(text);
      setText("");
    }
  };

  // if (recipes.length == 0) {
  //   setAlert("Please reenter your search", "light");
  // }

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {recipes.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearRecipes}>
          Clear
        </button>
      )}
    </div>
  );
};
