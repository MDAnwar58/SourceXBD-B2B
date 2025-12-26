import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminReducers";

const store = configureStore({
   reducer: {
      admin: adminReducer,
   },
   // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export type AdminState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
