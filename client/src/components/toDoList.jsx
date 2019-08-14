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
      <div className="divToDoList">
        <table className="todoList">
          <tbody className='listTbody'>
            <tr>
              <td className='listTitle' colSpan={3}>Things to chip away at...</td>
            </tr>
            {this.state.list.map((todo, index) => (
              <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} />
            ))}
            <tr><td colSpan={3}>
              <button className='deleteButton' 
                onClick={this.deleteTodos.bind(this)}>
                Delete All
              </button>
            </td></tr>
          </tbody>

        </table>

      </div>
    )
  };
}

export default ToDoList;