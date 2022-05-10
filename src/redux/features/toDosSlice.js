import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
    deleteToDo: (toDos, action) =>
      toDos.filter(({ id }) => id !== action.payload),
    createToDo: (toDos, action) => [...toDos, action.payload],
    toggleToDo: (toDos, action) =>
      toDos.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : { ...toDo }
      ),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  deleteToDo: deleteToDoActionCreator,
  createToDo: createToDoActionCreator,
  toggleToDo: toggleToDoActionCreator,
} = toDosSlice.actions;

export default toDosSlice.reducer;
