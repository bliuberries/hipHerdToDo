import React from 'react';
import edith from '../images/hedit.png';
import editimg from '../images/edit.png';
import del from '../images/delete.png';
import delh from '../images/hdelete.png';
import TodoServices from '../services/toDoServices.js';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: this.props.todo.completed,
      editHover: false,
      deleteHover: false,
    }
  }

  completed () {
    this.setState({
      completed: this.state.completed === "true" ? "false" : "true"
    })
    TodoServices.markComplete(this.props.todo.todo, this.state.completed === "true" ? "false" : "true");
  }

  mouseEnter(state) {
    if(state === 'd') {
      this.setState({
        deleteHover: true
      })
    } else if(state === 'e') {
      this.setState({
        editHover: true
      })
    }
  }

  mouseLeave(state) {
    if(state === 'd') {
      this.setState({
        deleteHover: false
      })
    } else if(state === 'e') {
      this.setState({
        editHover: false
      })
    }
  }

  render() {
    return (
      <tr className='todoItemRow' style={{ textDecoration: this.state.completed === "true" ? 'line-through' : 'none' }}>
        <td onClick={this.completed.bind(this)}>{this.props.todo.todo}</td>
        <td>
          <img
            className='editIcon' 
            onClick={() => TodoServices.editTodo()} 
            onMouseEnter={() => this.mouseEnter('e')} 
            onMouseLeave={() => this.mouseLeave('e')} 
            src={this.state.editHover ? edith : editimg}
          />
        </td>
        <td>
          <img 
            className='deleteIcon'
            onClick={() => this.props.delete(this.props.todo.todo)} 
            onMouseEnter={() => this.mouseEnter('d')} 
            onMouseLeave={() =>  this.mouseLeave('d')} 
            src={this.state.deleteHover ? delh : del}
          />
        </td>
      </tr>
    )
  }
}

export default ToDoItem;