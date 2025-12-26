"use client";
import { LocalUrl } from "@/components/react/localhost";
import React from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   contact: string;
   price: string;
   image: any;
   time_ago: string;
};

type Props = {
   product: Product;
};

export default function UpComingProduct({ product }: Props) {
   const localUrl = LocalUrl();
   const imagePath = localUrl + product?.image;
   return (
      <div
         className="bg-[#ffffff] rounded-[30px] w-full p-5"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <Img
            src={imagePath.toString()}
            alt="trandy product image"
            width={300}
            height={300}
            className="rounded-[20px] w-full xl:h-[230px] 2lg:h-64 lg:h-60 4md:h-56 3md:h-48 4sm:h-64 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
         />
         <div className=" pt-2">
            <div
               className="text-left font-['Inter-Bold',_sans-serif] 6xs:text-xl 3xs:text-lg text-xl font-bold 4md:w-[188px] md:w-full 6xs:w-[188px] 3xs:w-full xs6:w-[188px]"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               {product?.name}
            </div>
            <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-2">
               {product?.category}
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 3xs:grid-cols-1 xs6:grid-cols-2 grid-cols-1 gap-2 pt-5">
               <Button
                  type="button"
                  className=" capitalize bg-[#4285f4] rounded-md w-full py-2 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
               >
                  Send Message
               </Button>

               <Button
                  type="button"
                  className=" capitalize border-solid border-[#34a853] border rounded-md w-full py-2 text-[#34a853] font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
               >
                  Send Message
               </Button>
            </div>
         </div>
      </div>
   );
}
