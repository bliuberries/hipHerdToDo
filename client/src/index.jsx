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

  deleteToDo (todo) {
    fetch(`http://localhost:3000/deletetodo/`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo})
    })
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err)) 
  }

  editTodo (todo) {
    fetch(`http://localhost:3000/edittodo/`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo})
    })
    .then((res) => res.json())
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err))
  }

  markComplete() {
    fetch(`http://localhost:3000/markcomplete`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo})
    })
  }

  addToList(todo) {
    fetch(`http://localhost:3000/addtodo/`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo}),
    })
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err))
  }

  deleteAll() {
    fetch(`http://localhost:3000/deleteall/`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then((res) => this.componentDidMount())
    .catch((err) => console.log(err)) 
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
        <ToDoList tasklist={this.state.list} edit={this.editTodo.bind(this)} delete={this.deleteToDo.bind(this)}/>
        {/* <ToDoList allprops={{list:this.state.list, edit:this.editTodo.bind(this), delete:this.deleteToDo.bind(this)  }}/> */}
        <button onClick={this.deleteAll.bind(this)}>Delete All</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));