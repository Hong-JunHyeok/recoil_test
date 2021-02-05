import { atom } from 'recoil'

export const todoListState = atom({
    key : 'todoListState',
    default : [
        {
            
            todoText : '맥북 사기'
        },
        {
            
            todoText : '맥북 받기'
        }
    ]
})