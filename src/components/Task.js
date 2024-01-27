import React, { useState } from "react";

function Task({text, category}) {
  const [isVisible, setIsVisible] = useState("true")
  function handleClick(event) {
    setIsVisible(!isVisible)
  }
    if (isVisible) {
      return (
      <div className="task" key={text}>
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleClick}>X</button>
      </div>
      )}
      else return null
}

export default Task;
