"use client";
import React from "react";
import Axios from "@/app/utils/axios-client-without-token";
import { setLocalStorage } from "@/components/react/storage";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const CategoryImageSlider = dynamic(() => import("./CategoryImageSlider"), {
   ssr: false,
});

export default function CategorySection() {
   const router = useRouter();
   async function onChangeCategory(categorySlug: string) {
      const response = await Axios.get(
         `/search-products?search=${""}&slug=${categorySlug}`
      );
      if (response.status === 200) {
         setLocalStorage("category-slug-key", categorySlug);
         router.push("/product-search");
      }
   }

   return (
      <div
         className="container category-section  relative"
         // 10xl:px-60 4xl:px-32 1xl2:px-16 md:px-10 3xs:px-5 px-0
      >
         <Img
            src="/assets/images/category-section-background-image.png"
            alt="category background image"
            width={1350}
            height={100}
            className="w-[97%] h-auto absolute left-0 -top-[47.5rem] -z-[5] lg:block hidden"
         />

         <div className=" pt-44">
            <h2
               className="3xs:text-left text-center font-['Raleway-Bold',_sans-serif] xs:text-4xl xs6:text-3xl text-2xl font-bold z-10"
               style={{
                  background:
                     "linear-gradient(270deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               <span className=" 3xs:px-0 px-5"> Top Categories</span>
            </h2>
            <div className="image-slider lg:px-20 px-0 3xs:w-full xs:w-[75%]  xs3:w-[85%] w-[95%] 3xs:mx-0 mx-auto sm:pt-12 pt-7 pb-[6.5rem]">
               <CategoryImageSlider onChangeCategory={onChangeCategory} />
            </div>
         </div>
      </div>
   );
}
