import { counterSlice } from '@/store/counter/counter.slice.ts';
import { configureStore } from '@reduxjs/toolkit';


export default configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
    },
});