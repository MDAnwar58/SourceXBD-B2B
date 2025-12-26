import React, { Fragment } from "react";
import SidebarUserMessage from "./SidebarUserMessage";

export default function SidebarUserMessages() {
   return (
      <Fragment>
         <div className=" pb-2 mt-3">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
               Messages
            </div>
         </div>
         <div
            className="h-screen overflow-y-auto  scroll-smooth p-1"
            style={{
               scrollbarWidth: "none",
            }}
         >
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
            <SidebarUserMessage />
         </div>
      </Fragment>
   );
}
