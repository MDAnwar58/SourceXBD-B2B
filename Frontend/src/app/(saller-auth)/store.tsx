import { configureStore } from "@reduxjs/toolkit";
import sallerAuthReducers from "./sallerAuthReducers";

const store = configureStore({
   reducer: {
      saller_auth: sallerAuthReducers,
   },
   // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export type SallerAuthState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
