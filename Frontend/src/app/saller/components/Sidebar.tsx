"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Dashboarditem = dynamic(() => import("./SidebarItem/Dashboarditem"));
const CompaniesItem = dynamic(() => import("./SidebarItem/CompaniesItem"));
const MessagesItem = dynamic(() => import("./SidebarItem/MessagesItem"));
const OrdersItem = dynamic(() => import("./SidebarItem/OrdersItem"));
const ProductsItem = dynamic(() => import("./SidebarItem/ProductsItem"));
const ReviewsItem = dynamic(() => import("./SidebarItem/ReviewsItem"));
const SubscriptionsItem = dynamic(
   () => import("./SidebarItem/SubscriptionsItem")
);
const SupportItem = dynamic(() => import("./SidebarItem/SupportItem"));
const SettingsItem = dynamic(() => import("./SidebarItem/SettingsItem"));
const InventoryItem = dynamic(() => import("./SidebarItem/InventoryItem"));

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
         pathname.includes("/saller/orders") ||
         pathname.includes("/saller/order-create") ||
         pathname.includes(`/saller/order-edit/${param}`) ||
         pathname.includes("/saller/order-items") ||
         pathname.includes("/saller/order-status-update")
      ) {
         setActive("Orders");
      } else if (
         pathname.includes("/saller/subscription-plans") ||
         pathname.includes(`/saller/subscription-history/${param}`)
         // pathname.includes("/saller/support")
      ) {
         setActive("Subscriptions");
      } else if (
         pathname.includes("/saller/profile-settings") ||
         // pathname.includes("/saller/store-settings") ||
         pathname.includes("/saller/notification-settings")
      ) {
         setActive("Settings");
      } else if (
         pathname.includes("/saller/company-profile") ||
         pathname.includes("/saller/edit-company-information") ||
         pathname.includes("/saller/manage-company-logo") ||
         pathname.includes("/saller/update-contact-details") ||
         pathname.includes("/saller/submit-verification-documents") ||
         pathname.includes("/saller/verification-status-and-updates")
      ) {
         setActive("Companies");
         if (
            pathname.includes("/saller/edit-company-information") ||
            pathname.includes("/saller/update-contact-details") ||
            pathname.includes("/saller/manage-company-logo")
         ) {
            setActiveSubItem("Settings");
         }
         if (
            pathname.includes("/saller/submit-verification-documents") ||
            pathname.includes("/saller/verification-status-and-updates")
         ) {
            setActiveSubItem("Verification");
         }
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
         className={`fixed top-0 left-0 z-40 xs3:w-[22.5rem] w-full pt-[7.5rem] h-screen overflow-x-hidden overflow-y-auto transition-transform -translate-x-full bg-[#ffffff] border-r border-b border-solid border-[#dbdbdb] rounded-br-[20px] ${sidebar === false ? "md:translate-x-0" : "translate-x-0"} dark:bg-gray-800 dark:border-gray-700`}
         style={{
            boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.1)",
            scrollbarWidth: "none",
         }}
      >
         <div className=" px-3 pb-24 flex xs3:justify-end w-full">
            <ul className="space-y-4 font-medium">
               <Dashboarditem
                  pathname={pathname}
                  active={active}
                  activeSubItem={activeSubItem}
                  setActiveSubItem={setActiveSubItem}
                  sidebarItemsHandle={sidebarItemsHandle}
               />

               {/* <UsersItem pathname={pathname} param={param} /> */}

               <ProductsItem pathname={pathname} param={param} />

               <OrdersItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               />

               {/* <InventoryItem pathname={pathname} param={param} /> */}

               <MessagesItem pathname={pathname} param={param} />

               <ReviewsItem pathname={pathname} param={param} />

               <SubscriptionsItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               />

               <SettingsItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               />

               <CompaniesItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  activeSubItem={activeSubItem}
                  setActiveSubItem={setActiveSubItem}
               />

               <SupportItem pathname={pathname} param={param} />
            </ul>
         </div>
      </aside>
   );
}
