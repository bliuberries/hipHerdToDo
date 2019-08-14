import React from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addToDo.jsx';
import ToDoList from './components/toDoList.jsx';


class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1 className='title '>Project Tracker</h1>
        <AddToDo />
        <ToDoList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));