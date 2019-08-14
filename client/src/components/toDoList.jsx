import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx'
import TodoServices from '../services/toDoServices.js';

class ToDoList extends Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      displayCompleted: 'showAll'
    }
  }

  componentDidMount() {
    document.addEventListener("addToList", (e) => {
      this.setState({
        list: this.state.list.concat([{ todo: e.detail.text, completed: 'false' }])
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

  renderList() {
    return this.state.list.map((todo, index) => (
      this.state.displayCompleted ===  'showAll' ? 
      <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} /> 
      : this.state.displayCompleted ===  todo.completed ? 
      <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} /> 
      : null
    ))

  }
  showAll() {
    this.setState({
      displayCompleted: 'showAll'
    })
  }

  showCompleted() {
    this.setState({
      displayCompleted: 'true'
    })
  }

  showIncomplete() {
    this.setState({
      displayCompleted: 'false'
    })
  }

  render() {
    return (
      <div className="divToDoList">
        <table className="todoList">
          <tbody className='listTbody'>
            <tr>
              <td className='listTitle' colSpan={4}>Things to chip away at...</td>
            </tr>
            {this.renderList()}
            <tr className='bottomButtons'>
              <td>
                <button className='deleteButton'
                  onClick={this.deleteTodos.bind(this)}>
                  Delete All
                  </button>
              </td>
              <td >
                <button className='showComplete'
                  onClick={this.showCompleted.bind(this)}>
                  Complete
                  </button>
              </td>
              <td >
                <button className='showIncomplete'
                  onClick={this.showIncomplete.bind(this)}>
                  Incomplete
                  </button>
              </td>
              <td >
                <button className='showAll'
                  onClick={this.showAll.bind(this)}>
                  Show All
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ToDoList;