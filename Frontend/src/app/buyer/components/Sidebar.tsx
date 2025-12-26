"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Dashboarditem = dynamic(() => import("./SidebarItem/Dashboarditem"));
const MessagesItem = dynamic(() => import("./SidebarItem/MessagesItem"));
const ProfileItem = dynamic(() => import("./SidebarItem/ProfileItem"));
const ProductRequestItem = dynamic(
   () => import("./SidebarItem/ProductRequestItem")
);
const WishListItem = dynamic(() => import("./SidebarItem/WishListItem"));
const HelpAndSupportItem = dynamic(
   () => import("./SidebarItem/HelpAndSupportItem")
);
const OrderHistoryItem = dynamic(
   () => import("./SidebarItem/OrderHistoryItem")
);

type Props = {
   sidebar?: boolean | undefined;
};

export default function Sidebar({ sidebar }: Props) {
   const [active, setActive] = useState<string>("");
   const [activeSubItem, setActiveSubItem] = useState<string>("");
   const pathname = usePathname();
   const param = pathname.substring(pathname.lastIndexOf("/") + 1);

   useEffect(() => {
      if (
         pathname.includes("/buyer/select-product") ||
         pathname.includes("/buyer/terms-and-condition") ||
         pathname.includes("/buyer/verify-details") ||
         pathname.includes("/buyer/generate-pdf")
      ) {
         setActive("Subscriptions");
      }
   }, [pathname]);

   const sidebarItemsHandle = useCallback(
      (itemActive: any) => {
         if (active !== itemActive) {
            setActive(itemActive);
         }
      },
      [active]
   );

   return (
      <aside
         className={`fixed top-0 left-0 z-40 w-[22.5rem] pt-[7.5rem] h-[85vh] overflow-x-hidden overflow-y-auto transition-transform -translate-x-full bg-[#ffffff] border-r border-b border-solid border-[#dbdbdb] rounded-br-[20px] ${sidebar === false ? "md:translate-x-0" : "translate-x-0"} dark:bg-gray-800 dark:border-gray-700`}
         style={{
            boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.1)",
            scrollbarWidth: "none",
         }}
      >
         <div className=" px-3 pb-24 flex justify-end">
            <ul className="space-y-4 font-medium">
               <Dashboarditem pathname={pathname} />

               <ProfileItem pathname={pathname} param={param} />

               <MessagesItem pathname={pathname} param={param} />

               <ProductRequestItem pathname={pathname} param={param} />

               <WishListItem pathname={pathname} param={param} />

               {/* <OrderHistoryItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               /> */}

               <HelpAndSupportItem pathname={pathname} param={param} />
            </ul>
         </div>
      </aside>
   );
}
