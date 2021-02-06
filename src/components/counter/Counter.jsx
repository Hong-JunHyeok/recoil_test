import React from 'react';
import { counterState } from 'recoils/counter';
import { useRecoilState } from 'recoil';

export default function Counter(){
    const [counter, setCounter] = useRecoilState(counterState);
    
    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
    </>;
}