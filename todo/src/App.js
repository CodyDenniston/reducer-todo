import React, { useReducer } from 'react';
import { ToDoReducer, initialState } from './Reducers/ToDoReducer';

import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm'
import './App.css';

function App() {
  const [ state, dispatch ] = useReducer(ToDoReducer, initialState);

  // Used in TodoItem to toggle completed
  const toggleCompleted = e => {
    dispatch({type: 'TOGGLE_COMPLETED', id: e.target.id * 1});
  }

  console.log(state);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;