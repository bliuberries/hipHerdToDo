import React from 'react';
import edith from '../images/hedit.png';
import editimg from '../images/edit.png';
import del from '../images/delete.png';
import delh from '../images/hdelete.png';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  clicked () {
    console.log('clicked!');
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <tr onClick={this.clicked.bind(this)} style={{ textDecoration: this.state.clicked ? 'line-through' : 'none' }}>
        <td>{this.props.item.todo}</td><img onClick={edit} onHover={edith} src={editimg}/><img onClick={this.props.delete} onHover={delh} src={del}/>
      </tr>
    )
  }
}

export default ToDoItem;