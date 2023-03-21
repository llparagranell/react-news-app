import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./SliceNews";

export const store = configureStore({
    reducer:{
        news:newsReducer,
    }
})