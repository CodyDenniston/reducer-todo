import React from 'react';

function TodoItem({item, toggleCompleted}){
    
    return(
        <div className='todo-item' key={item.id}>
            <div className='item-container'>
                <input
                    type='checkbox'
                    id={item.id}
                    onClick={toggleCompleted}
                />
                <p>{item.item}</p>
            </div>
        </div>
    );
}

export default TodoItem;