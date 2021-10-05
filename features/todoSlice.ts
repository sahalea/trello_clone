import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './../model/todo';
import type { RootState } from './../app/store';

// Inilize data while app loading
const initialState = [
  {
    id: 1,
    title: 'Setup project',
    description: 'setup project with nextjs typescript',
    type: 'To Do',
  },
  {
    id: 4,
    title: 'Setup project',
    description: 'setup project with nextjs typescript',
    type: 'To Do',
  },
  {
    id: 2,
    title: 'Install Redux toolkit',
    description: 'Setup application with redux toolkit',
    type: 'Doing',
  },
  {
    id: 3,
    title: 'Setup styled components',
    description: 'Setup and convert the styles in to styled components',
    type: 'Done',
  },
] as Todo[];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo(state: RootState, action: PayloadAction<number>) {
      const index = state.findIndex((todo: any) => todo.id === action.payload);
      state.splice(index, 1);
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

// Get all todo items
export const selectTodos = (state: RootState) => state.todo;

// Get todo item by id for the edit page
export const slectTodoById = (id: number) => (state: RootState) =>
  state.todo.filter((e: Todo) => e.id === id);

// Get last id for increment while adding
export const getLastTodo = (state: RootState) => state.todo.slice(-1).pop();

export default todoSlice.reducer;
