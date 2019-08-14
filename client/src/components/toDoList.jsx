import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx'
import TodoServices from '../services/toDoServices.js';

class ToDoList extends Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      display: '1'
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
  showAll() {
    console.log('show all');
    this.setState({
      display: '1'
    })
  }
  
  showCompleted() {
    console.log('show completed');
    this.setState({
      display: '2'
    })
  }

  showIncomplete() {
    console.log('show incomplete');
    this.setState({
      display: '3'
    })
  }

  render() {
    if(this.state.display === '1') {
      return (
        <div className="divToDoList">
          <table className="todoList">
            <tbody className='listTbody'>
              <tr>
                <td className='listTitle' colSpan={4}>Things to chip away at...</td>
              </tr>
              {this.state.list.map((todo, index) => (
                <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} />
              ))}
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
    } else if (this.state.display === '2') {
      return (
        <div className="divToDoList">
          <table className="todoList">
            <tbody className='listTbody'>
              <tr>
                <td className='listTitle' colSpan={4}>Things to chip away at...</td>
              </tr>
              {this.state.list.map((todo, index) => (
                todo.completed === "true" ? <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} />: null
              ))}
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
      );
    } else {
      return (
        <div className="divToDoList">
          <table className="todoList">
            <tbody className='listTbody'>
              <tr>
                <td className='listTitle' colSpan={4}>Things to chip away at...</td>
              </tr>
              {this.state.list.map((todo, index) => (
                todo.completed === 'false' ? <ToDoItem todo={todo} key={index} delete={this.deleteOne.bind(this)} /> : null
              ))}
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
      )};
    }
}

export default ToDoList;