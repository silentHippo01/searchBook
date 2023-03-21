import { bookDataSchema } from './../types/bookDataSchema';
import { createSlice } from '@reduxjs/toolkit';

const initialState:bookDataSchema = {
    items: [],
    totalItems: 0,
    isLoading: false,
}

export const bookDataSlice = createSlice({
    name: 'bookData',
    initialState,
    reducers: {
       addItems: (state, action) => {
        state.items = action.payload;
       },
       addTotalItems: (state, action) => {
        state.totalItems = action.payload;
       },
       setIsLoading: (state, action) => {
        state.isLoading = action.payload;
       }
    },
});

export const { actions: bookDataActions } = bookDataSlice;
export const { reducer: bookDataReducer } = bookDataSlice;
