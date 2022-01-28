import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onSelectChange, selectValue, inputValue, onInputValue }) {
  return (
    <form className="NewItem" onSumbit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" 
        value={inputValue} onChange={onInputValue}/>
      </label>

      <label>
        Category:
        <select name="category" value={selectValue} 
        onChange={onSelectChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">
        Add to List
        </button>
    </form>
  );
}

export default ItemForm;
