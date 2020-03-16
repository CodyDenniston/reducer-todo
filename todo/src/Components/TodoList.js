import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList({state, toggleCompleted}){
    
    return(
        <div>
            {state.map(item => {
                return <TodoItem item={item} key={item.id} toggleCompleted={toggleCompleted}/>
            })}
        </div>
    );
}

export default TodoList;