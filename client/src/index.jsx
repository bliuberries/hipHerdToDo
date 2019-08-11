import React from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addToDo.jsx';
import ToDoList from './components/toDoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }


  addToList(toDo) {
    console.log(toDo, 'init console');
    fetch(`http://localhost:3000/addtodo/`, 
    {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({toDo}),
    })
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err))
        // success: () => {
        //   this.componentDidMount();
        //   console.log('when is Success being ran');
        // },
  }


  componentDidMount() {
    fetch(`http://localhost:3000/getTodos/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>My ToDos</h1>
        <AddToDo addToList={this.addToList.bind(this)} />
        <ToDoList tasklist={this.state.list} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));