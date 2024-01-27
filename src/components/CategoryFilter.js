import React, { useState } from "react";

function CategoryFilter({categories, filteredCategory, setFilteredCategory}) {
 
  const categoryArray = Object.values(categories);
  const [classNameList, setClassNameList] = useState({})
  

  console.log(categoryArray);

  function handleClick(category) {
    setFilteredCategory(category)
    console.log(category)
    console.log(filteredCategory) // this holds the string for the category they clicked. I need to find a way to conditionally render the items in THIS component based on the category name.
    setClassNameList((prevClassNameList) => {
      if (prevClassNameList[category]) {
        return prevClassNameList[category] = !prevClassNameList[category]
      }
      else return {...prevClassNameList, [category]: true}
    })
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray.map((category) => {
        return <button key={category} className={classNameList[category] ? "selected" : null} onClick={() => handleClick(category)}>{category}</button>
      })}
    </div>
  )
    }

export default CategoryFilter;
