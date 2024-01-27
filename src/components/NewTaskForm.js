import React, { useState } from "react";
import Task from "./Task.js"

function NewTaskForm({categories, newTaskState, onTaskFormSubmit}) {

  const [tempNewTaskState, setTempNewTaskState] = useState({});
  function handleNewTaskChange(event) { //receives name of to-do
    const newTask = event.target.value
    setTempNewTaskState({...tempNewTaskState, text: newTask}) //sets temp state variable with task name
  }
  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(tempNewTaskState) //THIS IS THE PROBLEM, IT'S OVERWRITING THE STATE OBJECT INSTEAD OF ADDING IT
    }
  function handleDropdown(event) { 
    const selection = event.target.value;
    console.log(selection)
    setTempNewTaskState({...tempNewTaskState, category: selection}) //sets temp state variable with task category
  }
  return (
    <div>
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleDropdown}>
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
          })
        }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
    </div>
  );
}

export default NewTaskForm;
