import React from 'react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  clicked () {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <ul onClick={this.clicked.bind(this)} style={{ textDecoration: this.state.clicked ? 'line-through' : 'none' }}>
        <li>{this.props.item.todo}</li>
      </ul>
    )
  }
}

export default ToDoItem;