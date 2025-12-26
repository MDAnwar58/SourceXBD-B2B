"use client";
import React from "react";
import { SvgProductChatBtnIcon } from "@/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const ViewNumberBtn = dynamic(() => import("@/components/ViewNumberBtn"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   seller_id: number;
};

type Props = {
   product: Product;
};

export default function UpComingProduct({ product }: Props) {
   const localUrl = LocalUrl();
   // const imagePath = removeLeadingSlash(String(product?.image)) as string;
   let imageUrl = "";
   if (product?.image) {
      imageUrl = localUrl.concat(product?.image);
   }

   return (
      <div className="3md:col-span-1 3xs:col-span-6 col-span-12 xs6:mb-0 mb-7">
         <div
            className="bg-[#f0f2ff] rounded-[30px] w-full h-auto p-4"
            style={{
               boxShadow:
                  "-6px -6px 10px 0px rgba(94, 94, 94, 0.25),6px 6px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="relative">
               {product?.image ? (
                  <Img
                     src={imageUrl}
                     alt="trandy product image"
                     width={300}
                     height={300}
                     className="rounded-[20px] w-full xl:h-[230px] 2lg:h-64 lg:h-60 4md:h-56 3md:h-48 4sm:h-64 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
                  />
               ) : null}
            </div>
            <div className="pt-2">
               <NavLink
                  href={`/product-sale/${product?.slug}`}
                  className=" mb-[.4rem] text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-xl font-extrabold"
               >
                  {product?.name}
               </NavLink>
               <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  {product?.company || "N/A"}
               </div>
               <div className="grid 6xs:grid-cols-2 grid-cols-1 gap-2 mt-5">
                  <NavLink
                     href={`/buyer/messages/${product?.seller_id}`}
                     className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center gap-x-1 xs6:mb-0 mb-1"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     <span>
                        <SvgProductChatBtnIcon
                           width={16}
                           height={16}
                           color="white"
                        />
                     </span>
                     <span>chat now</span>
                  </NavLink>

                  <ViewNumberBtn contactNumber={product?.contact} />
               </div>
            </div>
         </div>
      </div>
   );
}
