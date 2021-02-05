import React, { useState } from 'react'
import { todoListState } from 'recoils/todo'
import { useRecoilState } from 'recoil'

export default function Todo () {
    const [todos , setTodos] = useRecoilState(todoListState);
    const [input, setInput] = useState('');
    const mapTodos = todos.map((item , index) => <li key={index}>{item.todoText}</li>)
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos , {
            todoText : input
        }
    ])
    setInput('');
    }
    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    return <>
        <ul className='todoList'>{mapTodos}</ul>

        <form onSubmit={handleSubmit}>
            <input type="text" className='todoInput' value={input} onChange={handleInputChange} />
        </form>
    </>;
}