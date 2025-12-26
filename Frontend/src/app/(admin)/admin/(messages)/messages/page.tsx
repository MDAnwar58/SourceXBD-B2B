"use client";
import React, { Fragment, useEffect, useState } from "react";
import Grid from "@admin/components/grid";
import AdminCard from "@admin/components/card";
import MessageSidebarSearch from "./Components/MessageSidebarSearch";
import MessageSidebarTabPills from "./Components/MessageSidebarTabPills";
import MessagesSidebarPinnedUserMessages from "./Components/MessagesSidebarPinnedUserMessages";
import SidebarUserMessages from "./Components/SidebarUserMessages";
import ChatHeader from "./Components/ChatHeader";
import ChatFooter from "./Components/ChatFooter";
import ChatBody from "./Components/ChatBody";
import { useRouter } from "next/navigation";

export default function Messages() {
   const [tabPill, setTabPill] = useState("All");
   const router = useRouter();

   useEffect(() => {
      router.back();
   }, [router]);

   return (
      <Fragment>
         <Grid cols={12} gap={7}>
            <div className="2xl:col-span-4 5lg:col-span-5 col-span-12">
               <AdminCard className=" !px-3">
                  <MessageSidebarSearch />
                  <MessageSidebarTabPills
                     tabPill={tabPill}
                     setTabPill={setTabPill}
                  />
                  <MessagesSidebarPinnedUserMessages />
                  <SidebarUserMessages />
               </AdminCard>
            </div>
            <div className="2xl:col-span-8 5lg:col-span-7 col-span-12">
               <AdminCard>
                  <AdminCard className="!bg-white !py-3 !px-3">
                     <ChatHeader />
                  </AdminCard>
                  <ChatBody />
                  <ChatFooter />
               </AdminCard>
            </div>
         </Grid>
      </Fragment>
   );
}
