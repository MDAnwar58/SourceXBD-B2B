import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@auth/authReducer";
import userReducer from "@/userend/userReducers";
import printSlice from "@/app/invoice-print/features/printSlice";

const store = configureStore({
   reducer: {
      auth: authReducer,
      userend: userReducer,
      sallerPrint: printSlice,
   },
   // devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
