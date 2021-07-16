import React, { useState, useContext } from "react";
import FoodContext from "../../context/foodapi/foodContext";

export const Search = () => {
  const foodContext = useContext(FoodContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    foodContext.searchRecipes(text);
    setText("");
  };

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
    </div>
  );
};
