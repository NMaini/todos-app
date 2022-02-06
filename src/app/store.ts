import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { todosSlice } from '../features/todo/todo-slice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
