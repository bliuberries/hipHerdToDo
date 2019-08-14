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

    this.showToDos = this.showToDos.bind(this)
    this.deleteOne = this.deleteOne.bind(this)
    this.deleteTodos = this.deleteTodos.bind(this)
  }

  componentDidMount() {
    document.addEventListener("addToList", (e) => {
      this.setState({
        list: this.state.list.concat([{ todo: e.detail.text, completed: 'false' }])
      })
    });

    document.addEventListener("markComplete", (e) => {
      const newState = this.state.list
      newState[e.detail.index].completed = e.detail.completed
      this.setState(
        this.state.list = newState
      )
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


  renderList() {
    return this.state.list.map((todo, index) => (
      this.state.displayCompleted ===  'showAll' ? 
      <ToDoItem todo={todo} key={index} index={index} delete={this.deleteOne} /> 
      : this.state.displayCompleted ===  todo.completed ? 
      <ToDoItem todo={todo} key={index} index={index} delete={this.deleteOne} /> 
      : null
    ))
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

  showToDos(display) {
    this.setState({
      displayCompleted: display
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
                  onClick={() => this.deleteTodos()}>
                  Delete All
                  </button>
              </td>
              <td >
                <button className='showComplete'
                  onClick={() => this.showToDos('true')}>
                  Complete
                  </button>
              </td>
              <td >
                <button className='showIncomplete'
                  onClick={() => this.showToDos('false')}>
                  Incomplete
                  </button>
              </td>
              <td >
                <button className='showAll'
                  onClick={() => this.showToDos('showAll')}>
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