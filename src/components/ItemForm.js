import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ props }) {
  const [newGrocery, setNewGrocery] = useState("");
  const [groceryCategory, setGroceryCategory] = useState("Produce");
  
  function handleSelectChange(event){
    setGroceryCategory(event.target.value)
  }
  function handleInputChange(event){
    console.log(event.target.value)
    setNewGrocery(event.target.value)
  }
  function handleSubmitChange(event){
    event.preventDefault();
    console.log("Hello World!")
    const newItem = {
      id: uuid(),
      name: newGrocery,
      category: groceryCategory,
    };
    
    
  }
  return (
    <form className="NewItem" onSumbit={handleSubmitChange}>
      <label>
        Name:
        <input type="text" name="name" value={newGrocery} onChange={handleInputChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={groceryCategory} onChange={handleSelectChange}>
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
