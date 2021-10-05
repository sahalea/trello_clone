import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import todoReducer from './../features/todoSlice';
  
  // This is where we add reducers.
  export const store = configureStore({
    reducer: {
      todo: todoReducer,
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