import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "../features/todolistSlice";

export const store =configureStore({
    reducer:{
        // todolist:todolistReducer
    }
})