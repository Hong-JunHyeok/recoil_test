import React from 'react';
import { filteredTodos, todoSelectState } from 'recoils/jsonPlaceholder';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function JsonPlaceholder() {
  const doneStyle = {
    textDecoration: 'line-through',
  };
  const todoData = useRecoilValue(filteredTodos);
  const setTodoSelect = useSetRecoilState(todoSelectState);
  const mapTodoData = todoData.map((todo) => (
    <li key={todo.id} style={todo.completed ? doneStyle : null}>
      {todo.title}
    </li>
  ));

  const handleChangeSelect = (e) => {
    const { value } = e.target;
    setTodoSelect(value);
  };

  return (
    <>
      <select onChange={handleChangeSelect}>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Not done">Not done</option>
      </select>
      <ul>{mapTodoData}</ul>
    </>
  );
}
