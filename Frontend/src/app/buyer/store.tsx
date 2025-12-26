import { configureStore } from "@reduxjs/toolkit";
import buyerReducer from "./buyerReducers";

const store = configureStore({
   reducer: {
      buyer: buyerReducer,
   },
   // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export type BuyerState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
