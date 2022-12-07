import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-list-slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
