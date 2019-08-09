import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick(e) {
    
  }

  addToList(e) {
    e.preventDefault();
    this.props.addToList(this.state.grocery, this.state.quantity)
  }

  render() {
    return (
      <form onSubmit={this.addToList.bind(this)}>
        <label>
          Item Description:
        <input type="text" value={this.state.grocery} name='grocery' onChange={this.onChange.bind(this)} />
        </label>
        <label>
          Quantity:
        <input type="number" value={this.state.quantity} name='quantity' onChange={this.onChange.bind(this)} />
        </label>
        <input type="submit" value='Add me to the cart!' />
      </form>
    )
  }
}

export default AddToDo;

