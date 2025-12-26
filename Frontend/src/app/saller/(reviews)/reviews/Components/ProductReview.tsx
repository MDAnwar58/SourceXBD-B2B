"use client";
import React, { useEffect, useState } from "react";
import { LineSvgIcon } from "@admin/components/SvgIcons";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import { useDateformat } from "@/components/react/date";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
const NavLink = dynamic(() => import("@/components/NavLink"));
const RatingStar = dynamic(() => import("@admin/components/RatingStar"));
const Img = dynamic(() => import("@/components/Image"));
const Grid = dynamic(() => import("@admin/components/grid"));
const MoreBtn = dynamic(() => import("./MoreBtn"));
const Button = dynamic(() => import("@/components/Button"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type User = { image: string | null; name: string };

type Product = {
   images: any[];
   category_id: number;
   category: any;
   contact: string | number | null;
   deleted_at: null;
   desc: string;
   discount_price: any | null;
   id: number;
   is_show: number;
   min_order: number | string | null;
   name: string;
   price: number;
   publish: string;
   rating_point: number;
   s_desc: any | null;
   section: string;
   slug: string;
   spacification: any | null;
   status: string;
   stock: number;
   sub_category_id: number;
   tags: any;
   title: string;
   type: string;
   user_id: number;
   vendor: string;
};

type Review = {
   desc: string;
   id: number;
   product: Product;
   product_id: number;
   rattings: number;
   status: string;
   title: string;
   user: User;
   user_id: number;
   created_at: string;
};

type Props = {
   review: Review;
   page: number;
   perPage: number;
   search: string;
   deleteReview: (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => void;
   onAcceptReview: (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => void;
};

export default function ProductReview({
   review,
   page,
   perPage,
   search,
   deleteReview,
   onAcceptReview,
}: Props) {
   const { xlScreen, xsScreen } = useScreenMediaQuery();
   const [wordLimit, setWordLimit] = useState(9);
   const localUrl = LocalUrl();
   useEffect(() => {
      if (xlScreen) {
         setWordLimit(25);
      }
   }, []);
   const reviewMessage = useTruncateText({
      text: String(review?.desc),
      wordLimit: wordLimit,
   });

   const date = useDateformat(review?.created_at);
   const buttonClassName =
      "px-5  text-center py-[.3rem] w-full text-center cursor-pointer";
   const buttons = [
      {
         id: 1,
         name: (
            <NavLink href={`/saller/review/${review?.id}`}>
               <div className={buttonClassName}>View</div>
            </NavLink>
         ),
      },
      {
         id: 2,
         name:
            review?.status === "inactive" ? (
               <Button
                  type="button"
                  className={buttonClassName}
                  onClick={() => {
                     onAcceptReview(Number(review?.id), page, perPage, search);
                  }}
               >
                  Accept
               </Button>
            ) : (
               <Button
                  type="button"
                  className={buttonClassName}
                  onClick={() => {
                     onAcceptReview(Number(review?.id), page, perPage, search);
                  }}
               >
                  Inactive
               </Button>
            ),
      },
      {
         id: 3,
         name: (
            <Button
               type="button"
               className={buttonClassName}
               onClick={() =>
                  deleteReview(Number(review?.id), page, perPage, search)
               }
            >
               Delete
            </Button>
         ),
      },
   ];
   const imagePath =
      localUrl + review?.product?.images[0]?.file_path.toString();

   return (
      <div className="group drop-shadow-sm bg-[rgba(152,176,238,0.05)] hover:text-white hover:bg-blue-gradient hover:shadow-admin-card rounded-[20px]  transition-colors duration-100 ease-linear p-5 !pt-2">
         <div className="pb-2 font-['Arial-Regular',_sans-serif]">
            <span className="text-black group-hover:text-white   text-base font-medium">
               Ask Reviewer :{" "}
            </span>
            <span className="text-black group-hover:text-white  text-xs font-medium">
               {review?.user?.name}
            </span>
         </div>
         <Grid cols={12} gap={5} className="!grid 3lg:!gap-5 !gap-0">
            <div className="9xl:col-span-3 2xl:col-span-4 xl:col-span-5 3lg:col-span-6 col-span-12 xs:flex items-center gap-x-2 relative">
               <Img
                  src={imagePath.toString() || ""}
                  alt="review image"
                  width={400}
                  height={250}
                  className="rounded-[10px] xs:w-[150px] w-full h-auto"
               />
               <div>
                  <div className="text-black group-hover:text-white text-left xs:block hidden font-['-',_sans-serif] text-sm font-normal pt-[.15rem]">
                     Date : {date}
                  </div>
                  <div className="xs:block flex gap-x-2 xs:mt-0 mt-2">
                     <div className="text-black group-hover:text-white  text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pb-[.15rem]">
                        {review?.product?.name}
                     </div>
                     <div className="text-black group-hover:text-white  text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium  pb-2">
                        ({review?.product?.category?.name})
                     </div>
                  </div>
                  <div className=" ">
                     <RatingStar rating={review?.rattings} size={90} />
                  </div>
               </div>
               <div className="text-gray-600 group-hover:text-white w-1 h-[95px] absolute right-0 top-0 3lg:block hidden">
                  <LineSvgIcon />
               </div>
            </div>
            <div className="9xl:col-span-8 2xl:col-span-7 xl:col-span-6 3lg:col-span-5 col-span-11 relative">
               <div className="pe-5 xs:pt-2 pt-">
                  <div className="text-black group-hover:text-white text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-1">
                     Comment
                  </div>

                  <div className="xl:block hidden text-[#4d4d4d] group-hover:text-white text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     {reviewMessage}
                  </div>
                  <div className="xl:hidden block text-[#4d4d4d] group-hover:text-white text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     {reviewMessage}
                  </div>
               </div>

               <div className="text-gray-600 group-hover:text-white w-1 h-12 absolute right-0 top-[50%] transform-translate-y-middle  3lg:block hidden">
                  <LineSvgIcon />
               </div>

               <div className="xs:hidden block text-black group-hover:text-white text-left font-['-',_sans-serif] text-sm font-normal pt-[.15rem]">
                  Date : 25 - 07 - 2024
               </div>
            </div>
            <div className="col-span-1">
               <div className="flex items-center justify-center h-full ">
                  <MoreBtn buttons={buttons} />
               </div>
            </div>
         </Grid>
      </div>
   );
}
