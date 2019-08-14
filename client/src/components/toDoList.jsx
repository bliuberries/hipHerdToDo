import React from 'react';
import ToDoItem from './toDoItem.jsx'

const toDoList = (props) => (
  <div className="todoList">
    <table >
      <tbody>
        <tr>
          <td>The Daily Grind</td>
        </tr>
        {props.tasklist.map((item, index) => (
          <ToDoItem item={item} key={index} edit={props.edit} delete={props.delete} mark={props.mark}/>
        ))}
      </tbody>

    </table>
  </div>
)

export default toDoList;