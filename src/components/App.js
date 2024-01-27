import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredCategory, setFilteredCategory] = useState(null)
  const [newTaskState, setNewTaskState] = useState([])

  function onTaskFormSubmit(tempNewTaskState) {
    console.log(tempNewTaskState)
    setNewTaskState([...newTaskState, tempNewTaskState]);
    console.log(newTaskState)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filteredCategory={filteredCategory} setFilteredCategory={setFilteredCategory}/>
      <NewTaskForm categories={CATEGORIES} newTaskState={newTaskState} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={TASKS} filteredCategory={filteredCategory} newTaskState={newTaskState} />
    </div>
  );
}

export default App;
