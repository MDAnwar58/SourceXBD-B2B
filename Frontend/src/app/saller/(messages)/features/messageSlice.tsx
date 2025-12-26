import { createSlice } from "@reduxjs/toolkit";
import {
   getReceiverWithMessage,
   getRecentMessageUserList,
   pinnedUserInUserList,
   removeUserInPinnedUserList,
   getProducts,
} from "./MessageAction";

type Message = {
   id: number;
   to_id: number;
   from_id: number;
   is_read: number;
   massage: string;
   reply_id: number | null;
   formatted_date: string;
   created_at: string;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type Receiver = {
   id: number;
   name: string;
   email: string;
   image: Array<Image[]>;
   phone: string;
   role: string;
   status: string;
};

type UserImage = {
   id: number;
   image: string;
   imageable_id: number;
   imageable_type: string;
};

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   image: Array<UserImage[]>;
   role: string;
   status: string;
};
type RecentMessage = {
   last_message: string;
   last_message_time: string;
   user: User;
   is_me: number | null;
   is_pin: boolean;
   is_read: number;
};

type MessageState = {
   messages: Message[];
   messageLength: number;
   receiver: Receiver | {};
   recent_user_list: Array<RecentMessage[]>;
   products: Array<any[]>;
   totalProductsLength: number;
   error: any;
   loading: boolean;
   message: string;
};

const initialState: MessageState = {
   messages: [],
   messageLength: 0,
   receiver: {},
   recent_user_list: [],
   products: [],
   totalProductsLength: 0,
   error: {},
   loading: false,
   message: "",
};

export const sallerMessageSlice = createSlice({
   name: "sallerMessage",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get receiver with message
         .addCase(getReceiverWithMessage.pending, (state, action) => {
            state.loading = true;
            // state.messages = [] as Message[];
            // state.messageLength = 0 as number;
            // state.receiver = {} as Receiver | {};
         })
         .addCase(getReceiverWithMessage.fulfilled, (state, action) => {
            state.messages = action.payload.messages as Message[];
            state.messageLength = action.payload.messages_count as number;
            state.receiver = action.payload.reciver as Receiver;
            state.loading = false;
         })
         .addCase(getReceiverWithMessage.rejected, (state, action) => {
            state.error = action.payload as any;
            state.messages = [] as Message[];
            state.messageLength = 0 as number;
            state.receiver = {} as Receiver | {};
            state.loading = false;
         })
         // get recent messages
         .addCase(getRecentMessageUserList.pending, (state, action) => {
            state.recent_user_list = [] as Array<RecentMessage[]>;
            state.loading = true;
         })
         .addCase(getRecentMessageUserList.fulfilled, (state, action) => {
            state.recent_user_list = action.payload as Array<RecentMessage[]>;
            state.loading = false;
         })
         .addCase(getRecentMessageUserList.rejected, (state, action) => {
            state.error = action.payload as any;
            state.recent_user_list = [] as Array<RecentMessage[]>;
            state.loading = false;
         })
         // pinned user in sidebar user list
         .addCase(pinnedUserInUserList.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(pinnedUserInUserList.fulfilled, (state, action) => {
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(pinnedUserInUserList.rejected, (state, action) => {
            state.error = action.payload as any;
            state.message = "" as string;
            state.loading = false;
         })
         // remove user in pinned user list
         .addCase(removeUserInPinnedUserList.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(removeUserInPinnedUserList.fulfilled, (state, action) => {
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(removeUserInPinnedUserList.rejected, (state, action) => {
            state.error = action.payload as any;
            state.message = "" as string;
            state.loading = false;
         }) // get products
         .addCase(getProducts.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.error = {};
            state.products = action.payload.data as Array<any[]>;
            state.totalProductsLength = action.payload
               .totalProductsLength as number;
            state.loading = false;
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         });
   },
});

// export const { addMessage, clearMessage } = messageSlice.actions;

export default sallerMessageSlice.reducer;
