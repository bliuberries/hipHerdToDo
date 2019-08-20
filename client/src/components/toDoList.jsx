import React from 'react';
import ToDoItem from './toDoItem.jsx'
import TodoServices from '../services/toDoServices.js';
import ConfirmModal from './modals/confirmModal.jsx';

class ToDoList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      displayCompleted: 'showAll',
      modalShow: false,
    }

    this.setModalShow = this.setModalShow.bind(this);
    this.showToDos = this.showToDos.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
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

    document.addEventListener("editTodo", (e) => {
      const newState = this.state.list
      newState[e.detail.index].todo = e.detail.edited
      this.setState(
        this.state.list = newState
      )
    });
    TodoServices.getAllTodos().then(data => {
      this.setState({
        list: data
      }, () => {
        console.log(this.state.list);
      });
    });
  }

  setModalShow(bool) {
    this.setState({
      modalShow: bool
    })
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
      this.state.displayCompleted === 'showAll' ?
        <ToDoItem todo={todo} key={index} index={index} delete={this.deleteOne} />
        : this.state.displayCompleted === todo.completed ?
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
        })
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
            {this.renderList()}
            <tr className="blank_row">
              <td colSpan="4"></td>
            </tr>
            <tr className='bottomButtons'>
              <td>
                <button
                  className='deleteButton'
                  onClick={() => this.setModalShow(true)}
                >
                  Delete All
                </button>
              </td>
              <td >
                <button
                  className='showComplete'
                  onClick={() => this.showToDos('true')}
                >
                  Complete
                </button>
              </td>
              <td >
                <button
                  className='showIncomplete'
                  onClick={() => this.showToDos('false')}>
                  Incomplete
                  </button>
              </td>
              <td >
                <button
                  className='showAll'
                  onClick={() => this.showToDos('showAll')}
                >
                  Show All
                </button>
              </td>
              {
                this.state.modalShow === true ?
                  <ConfirmModal
                    show={this.state.modalShow}
                    onHide={(yn) => {
                      if(yn) {
                        this.deleteTodos()
                      }
                      this.setModalShow(false)
                    }}
                  />
                  : null
              }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ToDoList;