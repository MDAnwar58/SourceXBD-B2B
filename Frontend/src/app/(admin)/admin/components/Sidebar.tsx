"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Dashboarditem = dynamic(() => import("./SidebarItem/Dashboarditem"), {
   ssr: false,
});
const UsersItem = dynamic(() => import("./SidebarItem/UsersItem"), {
   ssr: false,
});
const CompaniesItem = dynamic(() => import("./SidebarItem/CompaniesItem"), {
   ssr: false,
});
const ProductsItem = dynamic(() => import("./SidebarItem/ProductsItem"), {
   ssr: false,
});
const CategoryMainItem = dynamic(
   () => import("./SidebarItem/CategoryMainItem"),
   {
      ssr: false,
   }
);
const OrdersItem = dynamic(() => import("./SidebarItem/OrdersItem"), {
   ssr: false,
});
const MessagesItem = dynamic(() => import("./SidebarItem/MessagesItem"), {
   ssr: false,
});
const CityItem = dynamic(() => import("./SidebarItem/CityItem"), {
   ssr: false,
});
const ReviewsItem = dynamic(() => import("./SidebarItem/ReviewsItem"), {
   ssr: false,
});
const BuyerComplainsItem = dynamic(
   () => import("./SidebarItem/BuyerComplainsItem"),
   {
      ssr: false,
   }
);
const BlogsItem = dynamic(() => import("./SidebarItem/BlogsItem"), {
   ssr: false,
});
const SubscriptionsItem = dynamic(
   () => import("./SidebarItem/SubscriptionsItem"),
   {
      ssr: false,
   }
);
const SettingsItem = dynamic(() => import("./SidebarItem/SettingsItem"), {
   ssr: false,
});
const SupportItem = dynamic(() => import("./SidebarItem/SupportItem"), {
   ssr: false,
});

type Props = {
   sidebar?: boolean | undefined;
};

export default function Sidebar({ sidebar }: Props) {
   const [active, setActive] = useState<string>("");
   const [activeSubItem, setActiveSubItem] = useState<string>("");
   const pathname = usePathname();
   const param = pathname.substring(pathname.lastIndexOf("/") + 1);

   useEffect(() => {
      if (pathname.includes("/admin/users")) {
         setActive("Users");
      } else if (
         pathname.includes("/admin/dashboard") ||
         pathname.includes(
            "/admin/dashboard/quick-action/approve-new-companies"
         ) ||
         pathname.includes(
            "/admin/dashboard/quick-action/view-pending-product-approvals"
         ) ||
         pathname.includes(
            "/admin/dashboard/quick-action/review-new-messages"
         ) ||
         pathname.includes(
            "/admin/dashboard/quick-action/view-platform-analytics"
         )
      ) {
         setActive("Dashboard");
         if (
            !pathname.includes(
               "/admin/dashboard/quick-action/approve-new-companies"
            ) &&
            !pathname.includes(
               "/admin/dashboard/quick-action/view-pending-product-approvals"
            ) &&
            !pathname.includes(
               "/admin/dashboard/quick-action/review-new-messages"
            ) &&
            !pathname.includes(
               "/admin/dashboard/quick-action/view-platform-analytics"
            )
         ) {
            setActiveSubItem("");
         }
         if (
            pathname.includes(
               "/admin/dashboard/quick-action/approve-new-companies"
            ) ||
            pathname.includes(
               "/admin/dashboard/quick-action/view-pending-product-approvals"
            ) ||
            pathname.includes(
               "/admin/dashboard/quick-action/review-new-messages"
            ) ||
            pathname.includes(
               "/admin/dashboard/quick-action/view-platform-analytics"
            )
         ) {
            setActiveSubItem("Quick Action");
         }
      } else if (
         pathname.includes("/admin/category-types") ||
         pathname.includes("/admin/category-type-create") ||
         pathname.includes(`/admin/category-type/${param}`) ||
         pathname.includes("/admin/categories") ||
         pathname.includes("/admin/category-create") ||
         pathname.includes(`/admin/category/${param}`) ||
         pathname.includes("/admin/sub_categories") ||
         pathname.includes("/admin/sub_category-create") ||
         pathname.includes(`/admin/sub_category/${param}`)
      ) {
         setActive("Categories");
      } else if (
         pathname.includes("/admin/subscriptions") ||
         pathname.includes("/subscription-plans") ||
         pathname.includes("/subscription-history") ||
         pathname.includes("/billing-and-payments")
      ) {
         setActive("Subscriptions");
      } else if (
         pathname.includes("/admin/settings") ||
         pathname.includes("/admin/admin-settings") ||
         pathname.includes("/admin/security-settings/two-factor") ||
         pathname.includes("admin/security-settings/access-control")
      ) {
         if (
            !pathname.includes("/admin/security-settings/two-factor") ||
            !pathname.includes("/admin/security-settings/access-control")
         ) {
            setActiveSubItem("");
         }
         setActive("Settings");
         if (pathname.includes("/admin/security-settings/two-factor")) {
            setActiveSubItem("Security Settings");
         } else if (
            pathname.includes("admin/security-settings/access-control")
         ) {
            setActiveSubItem("Security Settings");
         }
      } else if (
         pathname.includes("/admin/supports") ||
         pathname.includes(`/admin/support/${param}`) ||
         pathname.includes("/admin/faqs")
      ) {
         setActive("Support");
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
         className={`fixed top-0 left-0 z-40 w-[22.5rem] pt-[7.5rem] h-screen overflow-x-hidden overflow-y-auto transition-transform -translate-x-full bg-[#ffffff] border-r border-b border-solid border-[#dbdbdb] rounded-br-[20px] ${sidebar === false ? "md:translate-x-0" : "translate-x-0"} dark:bg-gray-800 dark:border-gray-700`}
         style={{
            boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.1)",
            scrollbarWidth: "none",
         }}
      >
         <div className=" px-3 pb-24 flex justify-end">
            <ul className="space-y-4 font-medium">
               <Dashboarditem
                  pathname={pathname}
                  active={active}
                  activeSubItem={activeSubItem}
                  setActiveSubItem={setActiveSubItem}
                  sidebarItemsHandle={sidebarItemsHandle}
               />

               <UsersItem pathname={pathname} param={param} />

               <CompaniesItem pathname={pathname} param={param} />

               <ProductsItem pathname={pathname} param={param} />

               <CategoryMainItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               />

               {/* <CategoryTypesItem pathname={pathname} param={param} />

               <CategoriesItem pathname={pathname} param={param} />

               <SubCategoriesItem pathname={pathname} param={param} /> */}

               <OrdersItem pathname={pathname} param={param} />

               {/* <MessagesItem pathname={pathname} /> */}

               <CityItem pathname={pathname} param={param} />

               <ReviewsItem pathname={pathname} param={param} />

               <BuyerComplainsItem pathname={pathname} param={param} />

               <BlogsItem pathname={pathname} param={param} />

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
                  activeSubItem={activeSubItem}
                  setActiveSubItem={setActiveSubItem}
               />

               <SupportItem
                  active={active}
                  pathname={pathname}
                  sidebarItemsHandle={sidebarItemsHandle}
                  param={param}
               />
            </ul>
         </div>
      </aside>
   );
}
