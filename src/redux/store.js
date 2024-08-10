import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    global: globalReducer,
    perquisites_annual_state: perquisites_annual_reducer,
  },
});

export default store;
