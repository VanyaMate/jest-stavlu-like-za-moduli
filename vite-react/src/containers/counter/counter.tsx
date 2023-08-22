import {
    decrement,
    increment,
} from '@/store/counter/counter.slice.ts';
import { AnyAction, Dispatch, Draft } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Counter = () => {
    const dispatch: Dispatch<AnyAction>   = useDispatch();
    const value: Draft<{ value: number }> = useSelector((state: {
        counter: Draft<{ value: number }>
    }) => state.counter);

    const inc = useCallback(() => {
        dispatch(increment());
    }, [ dispatch ]);

    const dec = useCallback(() => {
        dispatch(decrement());
    }, [ dispatch ]);

    return (
        <div>
            <h1>counter is: { value.value }</h1>
            <button onClick={ inc }>inc</button>
            <button onClick={ dec }>dec</button>
        </div>
    );
};

export default Counter;