import React, { Fragment } from "react";
import { PinSvgIcon } from "@admin/components/SvgIcons";
import MessageSidebarPinnedUserMessage from "./MessageSidebarPinnedUserMessage";

export default function MessagesSidebarPinnedUserMessages() {
   return (
      <Fragment>
         <div className="flex justify-between items-center pb-2">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
               Pinned Message
            </div>
            <div className="w-4 h-4 text-[#2F2F2F]">
               <PinSvgIcon />
            </div>
         </div>

         <div
            className="h-[16vh] overflow-y-auto p-1 scroll-smooth"
            style={{
               scrollbarWidth: "none",
            }}
         >
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
            <MessageSidebarPinnedUserMessage />
         </div>
      </Fragment>
   );
}
