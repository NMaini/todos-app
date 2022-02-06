import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Todo {
  index: number;
  name: string;
  state: TodoState;
}

export enum TodoState {
  Completed,
  Active,
  PassedDue,
}

const initialState: Todo[] = [
  { index: 0, name: "Diksha's Suit", state: TodoState.Active },
  { index: 1, name: "Diksha's Party", state: TodoState.Completed },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      console.log(action.payload.name);
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {},
    toggleTodo: (state, action: PayloadAction<number>) => {
      let todo = state[action.payload];
      if (todo) {
        todo.state =
          todo.state === TodoState.Active
            ? TodoState.Completed
            : TodoState.Active;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export const todos = (state: RootState) => state.todos;
