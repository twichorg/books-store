import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';



const initialState = [
  { id: 1, title: 'Lord Of The Rings Fellowship',content: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien'},
  { id: 2, title: 'Philosophers Stone', content: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling'},
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: { 
    postAdded: {
     reducer:(state, action) => {
     state.push(action.payload); // push() is a function that adds an element to the end of an array
    },
    prepare: (title, content, userId) => {
      return {
        payload: {
          title,
          content,
          id: nanoid(),
          userId,
        }
      }
    }
  }
  }
});  // createSlice() returns an object with three properties:  

export const selectALLPosts = state => state.posts; // selectALLPosts is a function that takes state as an argument and returns the state.posts array

export const { postAdded} = postSlice.actions; // postAdded is a function that returns an action object with a type property and a payload property

export default postSlice.reducer; // reducer is a function that takes state and action as arguments and returns a new state