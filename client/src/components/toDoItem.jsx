import React from 'react';
import edith from '../images/hedit.png';
import editimg from '../images/edit.png';
import del from '../images/delete.png';
import delh from '../images/hdelete.png';
import TodoServices from '../services/toDoServices.js';
import EditModal from './modals/editModal.jsx'


class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: this.props.todo.completed,
      editHover: false,
      deleteHover: false,
      modalShow: false
    }
    this.setModalShow = this.setModalShow.bind(this)
    this.completed = this.completed.bind(this)
  }

  setModalShow(bool) {
    this.setState({
      modalShow: bool
    })
  }

  completed() {
    TodoServices
      .markComplete(this.props.todo.todo, this.state.completed === "true" ? "false" : "true")
      .then(() => {
        this.setState({
          completed: this.state.completed === "true" ? "false" : "true"
        })
      })
      .then(() => {
        document.dispatchEvent(new CustomEvent('markComplete',
          {
            bubbles: false,
            detail: {
              title: this.props.todo.todo,
              completed: this.state.completed,
              index: this.props.index
            }
          }))
      })
  }

  mouseEnter(state) {
    if (state === 'd') {
      this.setState({
        deleteHover: true
      })
    } else if (state === 'e') {
      this.setState({
        editHover: true
      })
    }
  }

  mouseLeave(state) {
    if (state === 'd') {
      this.setState({
        deleteHover: false
      })
    } else if (state === 'e') {
      this.setState({
        editHover: false
      })
    }
  }

  render() {
    return (
      <tr
        className='todoItemRow'
        style={
          {
            textDecoration: this.state.completed === "true" ? 'line-through' : 'none', 
          }}>
        <td onClick={() => this.completed()}>
          <input type="checkbox" className='checkBox' checked={
            this.state.completed === "true" ? true : false
          }/>
        </td>
        <td
          // onClick={() => this.completed()}
          colSpan={3}>{this.props.todo.todo}
        </td>
        <td>
          <img
            className='editIcon'
            onClick={() => this.setModalShow(true)}
            onMouseEnter={() => this.mouseEnter('e')}
            onMouseLeave={() => this.mouseLeave('e')}
            src={this.state.editHover ? edith : editimg}
          />
          <img
            className='deleteIcon'
            onClick={() => this.props.delete(this.props.todo.todo)}
            onMouseEnter={() => this.mouseEnter('d')}
            onMouseLeave={() => this.mouseLeave('d')}
            src={this.state.deleteHover ? delh : del}
          />
        </td>
        {/* <div className='modalContainer'> */}
        {this.state.modalShow === true ? <EditModal
          show={this.state.modalShow}
          onHide={() => {
            this.setModalShow(false)
          }}
          edit={this.props.todo.todo}
          index={this.props.index}
        /> : null}
        {/* </div> */}
      </tr>
    )
  }
}

export default ToDoItem;