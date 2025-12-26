import { removeCookie } from "@/components/react/cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutSaller = createAsyncThunk<
   boolean,
   { router: any },
   { rejectValue: string }
>("admin/auth/logout", async ({ router }, { rejectWithValue }) => {
   try {
      removeCookie("auth");
      router.push("/sign-in");
      return true;
   } catch (error: any) {
      return rejectWithValue(error);
   }
});
