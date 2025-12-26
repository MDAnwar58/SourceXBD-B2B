import { configureStore } from "@reduxjs/toolkit";
import sallerReducers from "./sallerReducers";

const store = configureStore({
   reducer: {
      saller: sallerReducers,
   },
   // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export type SallerState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
