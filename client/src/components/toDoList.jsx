import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx'
import TodoServices from '../services/toDoServices.js';

class ToDoList extends Component {
  constructor(props) {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    document.addEventListener("addToList", (e) => {
      this.setState({
        list: this.state.list.concat([{todo:e.detail.text, completed:'false'}])
      })
    });
    
    TodoServices.getAllTodos().then(data => {
      this.setState({
        list: data
      });
    });
  }

  deleteOne(data) {
    TodoServices
      .deleteToDo(data)
      .then(() => {
        this.setState({
          list: this.state.list.filter(item => item.todo !== data)
        })
      })
  }

  deleteTodos() {
    TodoServices
      .deleteAll()
      .then(() => {
        this.setState({
          list: []
        });
      })
  }

  render() {
    return (
      <div className="todoList">
        <table >
          <tbody>
            <tr>
              <td>Things to chip away at...</td>
            </tr>
            {this.state.list.map((todo, index) => (
              <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} />
            ))}
            <tr><td><button onClick={this.deleteTodos.bind(this)}>Delete All</button></td></tr>
          </tbody>

        </table>

      </div>
    )
  };
}

export default ToDoList;