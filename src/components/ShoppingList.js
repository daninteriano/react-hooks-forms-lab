import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Produce");
  const [submittedData, setSubmittedData] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event){
    setSearch(event.target.value);
  }
  function handleSelectChange(event){
    setSelectValue(event.target.value)
  }
  function handleInputChange(event){
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  function handleSubmitChange(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: inputValue,
      category: selectValue,
    };
    const dataArray = [...items, newItem];
    setSubmittedData(dataArray);

  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;

  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        value={inputValue}
        onInputValue={handleInputChange}
        value={selectValue}
        onSelectChange={handleSelectChange}
        onItemFormSubmite={handleSubmitChange}

      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      value={search} 
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          //use search state to filter items list 
          //if (item.name === search)
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
