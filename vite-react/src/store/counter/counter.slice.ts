import { createSlice, Draft } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name        : 'counter',
    initialState: {
        value: 0,
    },
    reducers    : {
        increment: (state: Draft<{ value: number }>) => {
            state.value += 1;
        },
        decrement: (state: Draft<{ value: number }>) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;