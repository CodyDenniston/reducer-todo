import React, { useState } from 'react';
import '../App.css';

function TodoForm({dispatch}){
    const [ value, setValue ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: value});
        e.target.reset();
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleClear = () => {
        dispatch({type: 'CLEAR_COMPLETED'});
    }

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>New Todo Item:</label>
                <input onChange={handleChange} placeholder='task'></input>
                <button type='submit'>Add Item</button>
            </form>
            <button onClick={handleClear}>Clear Completed</button>
        </div>
        
    );
}

export default TodoForm;