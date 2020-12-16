import React, { useState} from 'react';

export default function TodoList (){
    const [ todo, setTodo] = useState('')

    const handleClick = e => {
        e.preventDefault()
    }

    return(
        <div className='add-todo'>
        <input
        name="todo"
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)} 
        placeholder="What will you do?"
        className='inp-a'/>

        <input 
        type='submit'
        value='Add Todo'
        onClick={e => handleClick(e)}
        className='inp-b'/>
        </div>
    )

}
//export default TodoList;