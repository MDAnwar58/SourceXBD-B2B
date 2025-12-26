import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";

const authReducer = combineReducers({
   user: authSlice,
});

export default authReducer;
