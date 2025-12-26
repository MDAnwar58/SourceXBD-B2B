import { combineReducers } from "@reduxjs/toolkit";
import sallerAuthSlice from "./features/sallerAuthSlice";

const sallerAuthReducers = combineReducers({
   register_become_a_supplier: sallerAuthSlice,
});
export default sallerAuthReducers;
