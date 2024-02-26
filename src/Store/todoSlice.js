// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: [],
    filter: "all",
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ ...action.payload, id: nanoid(), isActive: false });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isActive = !todo.isActive;
            }
        },
        editTodo: (state, action) => {
            const { id, newValue } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.inputValue = newValue;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.isActive);
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
