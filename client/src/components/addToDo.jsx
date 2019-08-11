import React from 'react';

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
    this.props.addToList(this.state.todo);
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.addToList.bind(this)}>
        <label>
          Todo:
        <input type="text" value={this.state.todo} name='todo' onChange={this.onChange.bind(this)}></input>
        </label>
        <input type="submit" />
      </form>
    )
  }
}

export default AddToDo;

