"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { io } from "socket.io-client";
import MobileAppFooter from "./MobileAppFooter";
import { env } from "process";

export default function UserTemplate({
   children,
}: {
   children: React.ReactNode;
}) {
   const [localhost, setLocalhost] = useState<string>(
      String(
         process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
            ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
            : ""
      )
   );
   const { user } = useSelector((state: RootState) => state.userend.common);
   useEffect(() => {
      const socket = io(localhost);

      if (user?.id !== undefined) {
         if (user?.role !== undefined) {
            if (user?.role === "buyer") {
               socket.emit("buyerStatusToSourceBDXServer", user?.id);
            } else if (user?.role) {
               socket.emit("sellerStatusToSourceBDXServer", user?.id);
            }
         }
      }
   }, [user?.id, user?.role]);
   return (
      <Fragment>
         {children}
         <MobileAppFooter />
      </Fragment>
   );
}
