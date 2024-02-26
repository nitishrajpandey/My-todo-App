import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
const myStore = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default myStore