import { selector, atom } from 'recoil';
import { JSON_PLACEHOLDER_TODOS } from 'config/config.json';
import axios from 'axios';

export const todos = selector({
  key: 'recoil/todos',
  get: async ({ get }) => {
    const response = await axios.get(JSON_PLACEHOLDER_TODOS);
    const data = response.data;
    return data;
  },
});

export const todoSelectState = atom({
  key: 'todoSelectState',
  default: 'All',
});

export const filteredTodos = selector({
  key: 'recoil/filteredTodos',
  get: ({ get }) => {
    const data = get(todos);
    const todoSelect = get(todoSelectState);

    switch (todoSelect) {
      case 'Not done':
        return data.filter((item) => !item.completed);
      case 'Done':
        return data.filter((item) => item.completed);
      default:
        return data;
    }
  },
});
