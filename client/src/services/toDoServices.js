// File for all api calls dealing with todos

const deleteToDo = (todo) => {
  return fetch(`http://localhost:3000/todo/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
    .catch((err) => console.log(err))
};

const editTodo = (todo, edited) => {
  return fetch(`http://localhost:3000/todo/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo, edited })
  })
    .then()
    .catch((err) => console.log(err))
};

const markComplete = (todo, bool) => {
  return fetch(`http://localhost:3000/markcomplete`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo, bool })
    })
}

const addToList = (todo) => {
  return fetch(`http://localhost:3000/addtodo/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo }),
    })
    .catch((err) => console.log(err))
};

const deleteAll = () => {
  return fetch(`http://localhost:3000/todo-da/`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .catch((err) => console.log(err))
};

const getAllTodos = () => {
  return fetch(`http://localhost:3000/todo/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
};

export default {
  deleteToDo,
  editTodo,
  markComplete,
  addToList,
  deleteAll,
  getAllTodos
};
