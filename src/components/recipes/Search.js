import React, { useState, useContext, useEffect } from "react";
import FoodContext from "../../context/foodapi/foodContext";
import AlertContext from "../../context/alert/alertContext";

export const Search = () => {
  const foodContext = useContext(FoodContext);
  const alertContext = useContext(AlertContext);

  const { recipes, clearRecipes, searchRecipes, error, clearErrors } =
    foodContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please type something in search field", "light");
    } else {
      searchRecipes(text);
      setText("");
    }
  };


  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Recipe..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary btn-block"
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
