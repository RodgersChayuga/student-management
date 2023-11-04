import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    filterReducer: filterReducer,
  },
});

export default store;
