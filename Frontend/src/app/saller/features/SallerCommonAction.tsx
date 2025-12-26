import { removeCookie } from "@/components/react/cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutSaller = createAsyncThunk<
   any,
   {
      router: any;
   }
>("saller/common/logout-user", async ({ router }, { rejectWithValue }) => {
   try {
      removeCookie("auth");
      router.push("/sign-in");
      return "user logged out";
   } catch (error: any) {
      return rejectWithValue(error);
   }
});
