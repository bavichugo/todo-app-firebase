import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = { todoList: []};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const newTodoObj = {
        ...action.payload,
        id: Date.now()
      }
      state.todoList.push(newTodoObj);
    },
    completeTodo(state, action) {
      return {
        ...action,
        todoList: [...state.todoList].filter(todo => todo.id !== action.payload)
      }
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
