"use client";
import React from "react";
import AdminCard from "./card";
import Button from "@/components/Button";

interface Link {
   url?: string | null;
   label?: string | null;
   active?: string | null;
}

type Props = {
   links?: Link[] | object | undefined;
   onHandlePagination?: (page: number) => void | undefined;
   lastPage?: number;
};

export default function AdminPagination({
   links = [],
   onHandlePagination,
   lastPage,
}: Props) {
   const Links = links as Link[] | undefined;
   return (
      <AdminCard className="!rounded-[14px] !py-4">
         <nav className="flex justify-end">
            <ul className="flex md:flex-row flex-wrap items-center gap-x-[0.35rem] md:gap-y-0 gap-y-2">
               {Links?.map((link, i) =>
                  link?.label !== "..." ? (
                     link?.label !== "&laquo; Previous" &&
                     link?.label !== "Next &raquo;" && (
                        <li key={i + 1}>
                           <Button
                              type="button"
                              onClick={
                                 () =>
                                    onHandlePagination &&
                                    onHandlePagination(Number(link?.label)) // Call the function only if it exists
                              }
                           >
                              <div
                                 className={`${
                                    link?.active
                                       ? "bg-blue-gradient text-white w-[38px] h-[38px]"
                                       : Number(link.label) === lastPage
                                         ? "bg-[#98b0ee] hover:bg-blue-gradient text-[#515151] hover:text-white  w-[47px] h-[38px]"
                                         : "bg-[#eaeaea] hover:bg-blue-gradient text-[#515151] hover:text-white w-8 h-8"
                                 } text-left font-['Arial-Regular',_sans-serif] text-base leading-5 font-normal rounded flex justify-center items-center transition-all duration-150 ease-in-out`}
                                 style={{ letterSpacing: "0.1em" }}
                              >
                                 {link.label}
                              </div>
                           </Button>
                        </li>
                     )
                  ) : (
                     <li key={i + 1}>
                        <div className=" text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal rounded w-auto h-8 flex justify-center items-center">
                           ...
                        </div>
                     </li>
                  )
               )}
               {/* <li>
                  <a href="">
                     <div
                        className="bg-[#98b0ee] hover:bg-blue-gradient text-[#515151] hover:text-white  w-[47px] h-[38px] text-left font-['Arial-Regular',_sans-serif] text-base leading-5 font-normal rounded flex justify-center items-center transition-all duration-150 ease-in-out"
                        style={{ letterSpacing: "0.1em" }}
                     >
                        15
                     </div>
                  </a>
               </li> */}
            </ul>
         </nav>
      </AdminCard>
   );
}
