import React from 'react';
import ToDoItem from './toDoItem.jsx'

const toDoList = (props) => (
  <div className="todolist">
    <table>
      <tbody>
        <tr>
          <td>The Daily Grind</td>
        </tr>
        {props.tasklist.map((item, index) => (
          <ToDoItem item={item} key={index} edit={props.edit} delete={props.delete} />
        ))}
      </tbody>

    </table>
  </div>
)

export default toDoList;