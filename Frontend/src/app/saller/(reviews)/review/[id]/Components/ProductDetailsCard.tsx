"use client";
import React from "react";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@/saller/components/card"));
const Img = dynamic(() => import("@/components/Image"));
const RatingSingleStar = dynamic(() => import("@/components/RatingSingleStar"));
const Grid = dynamic(() => import("@/app/saller/components/grid"));
const PrograssBar = dynamic(
   () => import("@/app/saller/components/PrograssBar")
);

type Star = {
   five: number;
   four: number;
   three: number;
   two: number;
   one: number;
};

type Product = {
   name: string;
   reviewCount: number;
   avgRating: string;
   star: Star;
   image: string;
};

type Props = {
   product: Product;
};

export default function ProductDetailsCard({ product }: Props) {
   let stars: any[] = [];

   if (product?.star !== null) {
      const STEPS = 5;

      // Get the maximum value in the star ratings
      const maxRating = Math.max(...Object.values(product?.star));

      // Calculate the step size based on the maximum rating
      const stepSize = Math.ceil(maxRating / STEPS);

      // Function to determine the step dynamically
      function getStep(value: any) {
         const stepNumber = Math.ceil(value / stepSize);
         const rangeStart = (stepNumber - 1) * stepSize;
         const rangeEnd = stepNumber * stepSize;

         if (value === 0) return stepSize; // Handle 0 case explicitly
         return rangeEnd;
      }

      // Function to determine the step type
      function getStepType(value: any, max: any) {
         const percentage = (value / max) * 100;

         if (percentage >= 81) return "highest";
         if (percentage >= 61) return "high";
         if (percentage >= 41) return "middle";
         if (percentage > 0) return "low";
         return "lowest";
      }

      // Categorize the ratings dynamically
      const categorizedRatings = Object.entries(product?.star).map(
         ([starKey, value]) => {
            const step = getStep(value);
            const step_type = getStepType(value, maxRating);
            return { star: starKey, value, step, step_type };
         }
      );

      stars = categorizedRatings;
   }

   return (
      <AdminCard>
         <div className="flex lg:flex-row flex-col justify-between lg:items-end">
            <div className="">
               {product?.image ? (
                  <Img
                     src={product?.image.toString()}
                     alt="review user avatar"
                     width={250}
                     height={250}
                     className="rounded-[14px] xl:w-[250px] xs3:w-[290px] w-full 13xl:h-[255px] h-auto"
                  />
               ) : null}

               <div className="w-full pt-1">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                     {product?.name}
                  </div>
                  <div className="flex items-center gap-x-[.15rem]">
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                        {Math.round(Number(product?.avgRating) * 10) / 10}
                     </div>
                     <div className="w-[18px] h-[18px]">
                        <RatingSingleStar />
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ms-1">
                        ( {product?.reviewCount} Reviews )
                     </div>
                  </div>
               </div>
            </div>
            <div className="xl:w-96 w-full xl:pe-0 3xs:pe-5 2xl:ms-0 xl:ms-12 3xs:ms-5 2xl:pt-0 pt-5">
               {/* <StartPrograssAndViews star={5} /> */}
               {stars.length > 0
                  ? stars.map((star, index: number) => (
                       <Grid
                          key={index}
                          cols={12}
                          className=" items-center mb-5"
                       >
                          <div className="col-span-1 text-[#2f2f2f] text-end font-['Arial-Regular',_sans-serif] text-[8px] font-normal flex">
                             {star?.star === "five"
                                ? 5
                                : star?.star === "four"
                                  ? 4
                                  : star?.star === "three"
                                    ? 3
                                    : star?.star === "two"
                                      ? 2
                                      : 1}{" "}
                             star
                          </div>
                          <div className="col-span-10">
                             <PrograssBar
                                prograss={star?.value}
                                stepType={star?.step_type}
                             />
                          </div>
                          <div className="col-span-1 text-[#2f2f2f] text-end font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                             {star?.value} Ratings
                          </div>
                       </Grid>
                    ))
                  : null}
            </div>
         </div>
      </AdminCard>
   );
}
