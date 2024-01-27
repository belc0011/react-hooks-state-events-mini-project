import React, { useState } from "react";
import Task from "./Task"

function TaskList({ tasks, filteredCategory, newTaskState }) {
  const tasksArray = Object.values(tasks)
  console.log(newTaskState)
  if (typeof newTaskState !== 'undefined' && newTaskState.length > 0) {
    console.log("inside if");
    console.log(newTaskState.text)
    newTaskState.forEach((element) => {
      tasksArray.push(element);
    });
  }
  console.log(tasksArray)
  const filteredTasks = tasksArray.filter((task) => {
    return task.category === filteredCategory
  })
  console.log(filteredTasks)
  if (filteredCategory && filteredCategory !== "All") {
    //console.log(filteredCategory)
    return (
      <div className="tasks">
        <ul>
          {filteredTasks.map((task) => {
            return <Task
            key={task.text} 
            text={task.text} 
            category={task.category} />
          })}
        </ul>
      </div>
    )
  }
  else return (
    <div className="tasks">
      {console.log("else")}
        <ul>
          {tasksArray.map((task) => {
            return <Task
            key={task.text} 
            text={task.text} 
            category={task.category} />
          })}
        </ul>
      </div>
  )
}

export default TaskList;
