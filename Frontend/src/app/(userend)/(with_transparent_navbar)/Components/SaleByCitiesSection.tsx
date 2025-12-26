"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { getCities } from "@/userend/with_transparent_navbar/features/HomeAction";

const SaleByCitiesSlider = dynamic(() => import("./SaleByCitiesSlider"), {
   ssr: false,
});

export default function SaleByCitiesSection() {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCities());
   }, [dispatch]);

   return (
      <div className="sale-by-cities-section container">
         <div
            className="3xs:text-left text-center font-['Raleway-Bold',_sans-serif] text-3xl font-bold sm:mb-10 mb-5"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Sellers by Cities
         </div>

         <SaleByCitiesSlider />
      </div>
   );
}
