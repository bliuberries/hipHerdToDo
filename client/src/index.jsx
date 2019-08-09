import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  addToList(toDo) {
    var item = {
      description: toDo,
      quantity: Number(itemQuantity),
    };
    let identical = false;
    for(let i = 0; i < this.state.list.length; i++) {
      if(item.description === this.state.list[i].description) {
        item.quantity += this.state.list[i].quantity;
        this.state.list.splice(i, 1);
        this.setState({
          list: [...this.state.list, item]
        })
        identical = true;
        break;
      }

    }
    if (!identical) {
      this.setState({
        list: [...this.state.list, item]
      })
    }
  }

  render () {
    return (
      <div>
        <h1>What's on your schedule?</h1>
        <AddGrocery addToList={this.addToList.bind(this)}/>
        <GroceryList groceries={this.state.list} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));