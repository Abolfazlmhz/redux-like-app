import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeSlice"

const store = configureStore({
    reducer: { like: likeReducer }
})

export default store;