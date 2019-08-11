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
          <ToDoItem item={item} key={index} edit={props.editTodo} delete={props.deleteTodo} />
        ))}
      </tbody>

    </table>
  </div>
)

export default toDoList;