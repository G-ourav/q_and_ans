import { configureStore } from "@reduxjs/toolkit";
import Q_and_ansReducer from "./Q_and_ansReducer";
const store = configureStore({
  reducer: {
    Q_and_ans: Q_and_ansReducer,
  },
});

export default store;
