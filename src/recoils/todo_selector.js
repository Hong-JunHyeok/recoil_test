import { atom, selector } from 'recoil';

export const todoState = atom({
  key: 'todoState',
  default: [
    {
      text: '샤워하기',
      isDone: false,
    },
    {
      text: '설거지 하기',
      isDone: true,
    },
    {
      text: '아이폰 구매하기',
      isDone: false,
    },
    {
      text: '제주도 여행가기',
      isDone: false,
    },
  ],
});

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'All',
});

export const todoStateSelector = selector({
  key: 'todoStateSelector',
  get: ({ get }) => {
    const filterState = get(todoFilterState);
    const list = get(todoState);

    switch (filterState) {
      case 'Done':
        return list.filter((item) => item.isDone);
      case 'not Done':
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
});
