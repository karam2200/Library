import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: '1', title: '1984', author: 'George Orwell', description: 'Dystopian novel.', rating: 4.9, category: 'Fiction' },
  { id: '2', title: 'Sapiens', author: 'Yuval Noah Harari', description: 'Human history.', rating: 4.7, category: 'Non-Fiction' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;