import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "../features/toDosSlice";

export const store = configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});

export default store;
