"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/assets/css/category-slider.css";
import {
   SvgCategorySliderNextIcon,
   SvgCategorySliderPrevIcon,
} from "@/components/SvgIcons";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { LocalUrl } from "@/components/react/localhost";
import { truncateDangerousHTMLText } from "@/components/react/truncate-text";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

type Category = {
   id: string;
   name: string;
   slug: string;
   images: string[];
   desc: any;
};

type Props = {
   onChangeCategory: (categorySlug: string) => void;
};

export default function CategoryImageSlider({ onChangeCategory }: Props) {
   const url = LocalUrl();
   const { categories } = useSelector((state: RootState) => state.userend.home);

   const Categories: Category[] = categories;

   return (
      <Fragment>
         <Swiper
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={5}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
               475: {
                  slidesPerView: 2, // 2 slides per view for medium screens
                  spaceBetween: 0,
               },
               675: {
                  slidesPerView: 2, // 2 slides per view for medium screens
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3, // 2 slides per view for medium screens
                  spaceBetween: 5,
               },
               // When the window width is >= 1024px
               1024: {
                  slidesPerView: 3, // 4 slides per view for large screens
                  spaceBetween: 10,
               },
               // When the window width is >= 1024px
               1220: {
                  slidesPerView: 4, // 4 slides per view for large screens
                  spaceBetween: 10,
               },
            }}
         >
            {Categories.map((category: Category, index: number) => {
               let imageUrl = "";
               let desc = "";
               if (category?.images.length > 0) {
                  const image = category?.images.toString();
                  const forwardSlash = "/";
                  const storeImageUrl = forwardSlash.concat(image);
                  imageUrl = url.concat(storeImageUrl);
               }

               if (category?.desc) {
                  desc = truncateDangerousHTMLText(category?.desc, 31);
               }
               return (
                  <SwiperSlide key={index + 1} className="p-3">
                     <div
                        className="bg-[#f0f2ff] cursor-pointer rounded-[30px] pt-16 pb-5 px-5"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(142, 142, 142, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                        onClick={() => onChangeCategory(category?.slug)}
                     >
                        <div className="w-full h-[148px] flex items-center justify-center">
                           {category?.images.length > 0 ? (
                              <Img
                                 src={imageUrl}
                                 alt="..."
                                 width={182}
                                 height={148}
                              />
                           ) : (
                              <Img
                                 src="/assets/images/demo.png"
                                 alt="..."
                                 width={182}
                                 height={148}
                              />
                           )}
                        </div>
                        <div className="pt-3">
                           <div className="text-[#616161] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                              {category?.name}
                           </div>
                           <div className="text-[#616161] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-[157px]">
                              {desc}
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <div className="button-atrrangment">
            <div className="button-swiper">
               <div className="swiper-button-prev">
                  <span>
                     <SvgCategorySliderPrevIcon
                        width={24}
                        height={24}
                        color="white"
                     />
                  </span>
               </div>
               <div className="swiper-button-next">
                  <span>
                     <SvgCategorySliderNextIcon
                        width={24}
                        height={24}
                        color="white"
                     />
                  </span>
               </div>
            </div>
         </div>
      </Fragment>
   );
}
