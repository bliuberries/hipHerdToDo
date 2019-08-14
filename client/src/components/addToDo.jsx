import React from 'react';
import TodoServices from '../services/toDoServices.js';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addToList(e) {
    e.preventDefault();
    TodoServices
      .addToList(this.state.todo)
      .then(() => {
        document.dispatchEvent(new CustomEvent('addToList', {bubbles: false, detail: { text:this.state.todo }}))
      })
      .then(() => {
        this.setState({
          todo: ''
        })  
      })

  }

  render() {
    return (
      <form className='addToDo' onSubmit={this.addToList.bind(this)}>
        <label>
          Todo:
        <input type="text" value={this.state.todo} name='todo' onChange={this.onChange.bind(this)}/>
        </label>
        <input type="submit" />
      </form>
    )
  }
}

export default AddToDo;

