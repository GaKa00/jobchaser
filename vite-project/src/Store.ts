import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlice"; // Adjusted import path

export const store = configureStore({
  reducer: {
    filter: filterReducer, // Corrected reference to filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
