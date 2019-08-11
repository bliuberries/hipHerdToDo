import React from 'react';
import ToDoItem from './toDoItem.jsx'

const toDoList = (props) => (
  <div className="todolist">
    <div>The Daily Grind</div>
    {props.tasklist.map((item, index) => (
      <ToDoItem item={item} key={index} />
    ))}
  </div>
)

export default toDoList;