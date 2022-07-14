import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: "J. K. Rowling"},
    {id: 1, name: "George R. R. Martin"},
    {id: 2, name: "J. R. R. Tolkien"},
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = state => state.users;

export default userSlice.reducer;
