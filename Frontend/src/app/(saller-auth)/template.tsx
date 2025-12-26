"use client";
import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./main.css";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { getCookie } from "@/components/react/cookie";

type Props = {
   children: ReactNode;
};

export default function AdminTemplate({ children }: Props) {
   const [sidebar, setSidebar] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setSidebar(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [router]);

   return (
      <Fragment>
         <div ref={dropdownRef}>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
         </div>
         <div>
            <div className="mt-20">{children}</div>
         </div>
         <Toaster />
      </Fragment>
   );
}
