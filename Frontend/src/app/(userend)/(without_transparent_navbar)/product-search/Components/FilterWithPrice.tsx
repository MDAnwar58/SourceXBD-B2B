"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

type Props = {
   onHandlePrice: (min: string, max: string) => void;
   price?: any;
   onFilterPrice: () => void;
   priceError: string;
};

export default function FilterWithPrice({
   onHandlePrice,
   price,
   onFilterPrice,
   priceError,
}: Props) {
   const maxPrice = price?.max;
   const minPrice = price?.min;
   return (
      <div>
         <div
            className="bg-[rgba(255,255,255,0.50)] rounded-[14px] w-full p-4 mt-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            {/* <div className="flex flex-row justify-between items-center">
               <div className="text-[#90ff38] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
                  With Price
               </div>
               <div className=" text-[10px] ">2</div>
            </div> */}
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pt-1 pb-2">
               With Price
            </div>
            <div className="flex 6xs:flex-row 3xs:flex-col flex-row justify-between items-center 6xs:gap-0 gap-2">
               <div className="flex flex-row gap-x-1">
                  <Input
                     type="text"
                     className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium rounded-[10px] border-solid border-[#4285f4] border-[0.5px] w-[65px] h-[26px]"
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onHandlePrice(e.target.value, maxPrice)
                     }
                     placeholder="Min"
                  />
                  <div>--</div>
                  <Input
                     type="text"
                     className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium rounded-[10px] border-solid border-[#4285f4] border-[0.5px] w-[65px] h-[26px]"
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onHandlePrice(minPrice, e.target.value)
                     }
                     placeholder="Max"
                  />
               </div>

               <Button
                  type="button"
                  className="bg-[#4285f4] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] w-[54px] h-[26px] flex justify-center items-center"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={onFilterPrice}
               >
                  ok
               </Button>
            </div>
            {priceError !== "" && (
               <small className="text-red-500 text-[10px] font-semibold">
                  {priceError}
               </small>
            )}
         </div>
      </div>
   );
}
