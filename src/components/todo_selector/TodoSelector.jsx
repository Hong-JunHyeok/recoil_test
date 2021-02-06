import React, { useState } from 'react';
import {
  todoStateSelector,
  todoFilterState,
  todoState,
} from 'recoils/todo_selector';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function Todo_selector() {
  const todos = useRecoilValue(todoStateSelector);
  const setTodoState_ = useSetRecoilState(todoState);
  const setTodoState = useSetRecoilState(todoFilterState);
  const mapTodos = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
  const [input, setInput] = useState('');
  const handleChangeSelector = (e) => {
    const { value } = e.target;
    setTodoState(value);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const addTodo = (text) => {
    setTodoState_([
      ...todos,
      {
        text,
        isDone: false,
      },
    ]);
  };
  return (
    <>
      filter :
      <select onChange={handleChangeSelector}>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="not Done">not Done</option>
      </select>
      <ul>{mapTodos}</ul>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={() => addTodo(input)}>제출</button>
    </>
  );
}
