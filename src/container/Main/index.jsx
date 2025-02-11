import React, { useState } from 'react';
import "./styles.css";

const MainForm = () => {
  const [IngredientList, setIngredientList] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;
    setIngredientList([...IngredientList, inputValue])
    setInputValue("");
  }

  return (
    <main>
      <form className="main-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          placeholder="i.g, Oregeon"
          value={inputValue}
          aria-label="Add Ingredient"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Add Ingredient</button>
      </form>
      <ul>
        {IngredientList.map((ingredient, index) => (<li key={index} className='listing-styles'>{ingredient}</li>))}
      </ul>
    </main>
  );
};

export default MainForm;
