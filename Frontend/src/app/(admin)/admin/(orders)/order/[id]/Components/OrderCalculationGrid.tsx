import {
   PenddingOrderIcon,
   TotalOrderIcon,
   TotalProductsIcon,
   UpArrowNotBorderSvgIcon,
} from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import React from "react";
const Grid = dynamic(() => import("@admin/components/grid"));
const Img = dynamic(() => import("@/components/Image"));
const AdminCard = dynamic(() => import("@admin/components/card"));

export default function OrderCalculationGrid() {
   return (
      <Grid cols={12} gap={9}>
         <AdminCard className="22xl:col-span-3 13xl:col-span-4 1xl2:col-span-6 3lg:col-span-4 3md:col-span-6 col-span-12 3xs:mb-0 mb-7 flex items-center">
            <div className="pe-5">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="..."
                  width={200}
                  height={200}
                  className="w-10 h-10 "
               />
            </div>
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Running Order
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-1">
                  254
               </div>

               <div className="text-left font-['-',_sans-serif] text-[10px] font-normal flex items-end gap-x-[.15rem]">
                  <div className="w-3 h-3.5 text-[#90FF38]">
                     <UpArrowNotBorderSvgIcon />
                  </div>
                  <span className="text-[#90FF38] text-[10px] font-bold font-['Arial']">
                     10%
                  </span>
                  <span className="text-[#505050] text-[10px] font-normal font-['Arial']">
                     more then ovg
                  </span>
               </div>
            </div>
         </AdminCard>
         <AdminCard className="22xl:col-span-3 13xl:col-span-4 1xl2:col-span-6 3lg:col-span-4 3md:col-span-6 col-span-12 3xs:mb-0 mb-7 flex items-center">
            <div className="me-5 relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="..."
                  width={200}
                  height={200}
                  className="w-10 h-10 "
               />
               <div className=" absolute top-[50%] left-[50%] transform-translate-middle w-full h-full flex justify-center items-center">
                  <div className="w-6 h-6 text-white">
                     <TotalOrderIcon />
                  </div>
               </div>
            </div>
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Total Order
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-1">
                  254
               </div>

               <div className="text-left font-['-',_sans-serif] text-[10px] font-normal flex items-end gap-x-[.15rem]">
                  <div className="w-3 h-3.5 text-[#90FF38]">
                     <UpArrowNotBorderSvgIcon />
                  </div>
                  <span className="text-[#90FF38] text-[10px] font-bold font-['Arial']">
                     10%
                  </span>
                  <span className="text-[#505050] text-[10px] font-normal font-['Arial']">
                     more then ovg
                  </span>
               </div>
            </div>
         </AdminCard>
         <AdminCard className="22xl:col-span-3 13xl:col-span-4 1xl2:col-span-6 3lg:col-span-4 3md:col-span-6 col-span-12 3xs:mb-0 mb-7 flex items-center">
            <div className="me-5 relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="..."
                  width={200}
                  height={200}
                  className="w-10 h-10 "
               />
               <div className=" absolute top-[50%] left-[50%] transform-translate-middle w-full h-full flex justify-center items-center">
                  <div className="w-6 h-6 text-white">
                     <PenddingOrderIcon />
                  </div>
               </div>
            </div>
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Pendding Order
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-1">
                  254
               </div>

               <div className="text-left font-['-',_sans-serif] text-[10px] font-normal flex items-end gap-x-[.15rem]">
                  <div className="w-3 h-3.5 text-[#90FF38]">
                     <UpArrowNotBorderSvgIcon />
                  </div>
                  <span className="text-[#90FF38] text-[10px] font-bold font-['Arial']">
                     10%
                  </span>
                  <span className="text-[#505050] text-[10px] font-normal font-['Arial']">
                     more then ovg
                  </span>
               </div>
            </div>
         </AdminCard>
         <AdminCard className="22xl:col-span-3 13xl:col-span-4 1xl2:col-span-6 3lg:col-span-4 3md:col-span-6 col-span-12 3xs:mb-0 mb-7 flex items-center">
            <div className="me-5 relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="..."
                  width={200}
                  height={200}
                  className="w-10 h-10 "
               />
               <div className=" absolute top-[50%] left-[50%] transform-translate-middle w-full h-full flex justify-center items-center">
                  <div className="w-6 h-6 text-white">
                     <TotalProductsIcon />
                  </div>
               </div>
            </div>
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Total Products
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-1">
                  254
               </div>

               <div className="text-left font-['-',_sans-serif] text-[10px] font-normal flex items-end gap-x-[.15rem]">
                  <div className="w-3 h-3.5 text-[#90FF38]">
                     <UpArrowNotBorderSvgIcon />
                  </div>
                  <span className="text-[#90FF38] text-[10px] font-bold font-['Arial']">
                     10%
                  </span>
                  <span className="text-[#505050] text-[10px] font-normal font-['Arial']">
                     more then ovg
                  </span>
               </div>
            </div>
         </AdminCard>

         <AdminCard className="col-span-12">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-4">
               Production Summary
            </div>
            <Grid cols={3} gapX={20}>
               <div>
                  <div className="bg-[#4285f4] rounded-sm w-full h-1" />
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium pt-1">
                     Production Summary
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-1">
                     78
                  </div>
               </div>
               <div>
                  <div className="bg-[#98b0ee] rounded-sm w-full h-1" />
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium pt-1">
                     Production Summary
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-1">
                     50
                  </div>
               </div>
               <div>
                  <div className="bg-[#90ff38] rounded-sm w-full h-1" />
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium pt-1">
                     Production Summary
                  </div>
                  <div className="flex items-center">
                     <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-1">
                        87
                     </div>
                     <div className="flex items-center gap-x-[.10rem] ps-3">
                        <div className="bg-[#90ff38] rounded-[50%] w-1 h-1" />
                        <div className="text-[#90ff38] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                           1 Update
                        </div>
                     </div>
                  </div>
               </div>
            </Grid>
         </AdminCard>
      </Grid>
   );
}
