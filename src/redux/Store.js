import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import homeReducer from "./homeSlice";

const store = configureStore({
    reducer:{
        home:homeReducer,
        user:userReducer,
    }
});

export default store;