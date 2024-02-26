// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: [],
    filter: "all",
};

// Function to save todos to local storage
const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Function to load todos from local storage
const loadTodosFromLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
};

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        ...initialState,
        todos: loadTodosFromLocalStorage(), // Load todos from local storage when initializing
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ ...action.payload, id: nanoid(), isActive: false });
            saveTodosToLocalStorage(state.todos); // Save todos to local storage after addition
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveTodosToLocalStorage(state.todos); // Save todos to local storage after deletion
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isActive = !todo.isActive;
                saveTodosToLocalStorage(state.todos); // Save todos to local storage after toggling
            }
        },
        editTodo: (state, action) => {
            const { id, newValue } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.inputValue = newValue;
                saveTodosToLocalStorage(state.todos); // Save todos to local storage after editing
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.isActive);
            saveTodosToLocalStorage(state.todos); // Save todos to local storage after clearing completed
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
