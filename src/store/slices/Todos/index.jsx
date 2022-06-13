import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState:{
        list:[]
    },
    reducers:{
        createTodo: (state, action)=>{
            state.list = action.payload
        }
    }
});

export const { createTodo } = todosSlice.actions

export default todosSlice.reducer