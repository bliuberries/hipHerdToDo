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
      editHover: false,
      deleteHover: false,
    }
  }

  clicked () {
    this.setState({
      clicked: !this.state.clicked
    })
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
      <tr onClick={this.clicked.bind(this)} style={{ textDecoration: this.state.clicked ? 'line-through' : 'none' }}>
        <td><input type="checkbox"/></td><td>{this.props.item.todo}</td><td className='editIcon'><img onClick={() => this.props.edit()} onMouseEnter={() => this.mouseEnter('e')} onMouseLeave={() => this.mouseLeave('e')} src={this.state.editHover ? edith : editimg}/></td><td className='deleteIcon'><img onClick={() => this.props.delete(this.props.item.todo)} onMouseEnter={() => this.mouseEnter('d')} onMouseLeave={() =>  this.mouseLeave('d')} src={this.state.deleteHover ? delh : del}/></td>
      </tr>
    )
  }
}

export default ToDoItem;