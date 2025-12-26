"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/assets/css/hero-card-slider.css";
import {
   SvgCategorySliderNextIcon,
   SvgCategorySliderPrevIcon,
} from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

export default function HeroCardSlider() {
   return (
      <div className="hero-card-slider">
         <Swiper
            navigation={{
               nextEl: ".hero-card-swiper-button-next",
               prevEl: ".hero-card-swiper-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={5}
            modules={[Navigation]}
            className="heromySwiper"
            breakpoints={{
               575: { slidesPerView: 2, spaceBetween: 5 },
               640: { slidesPerView: 2, spaceBetween: 10 },
               768: { slidesPerView: 2, spaceBetween: 20 },
               975: { slidesPerView: 3, spaceBetween: 10 },
               1280: { slidesPerView: 4, spaceBetween: 10 },
            }}
         >
            <SwiperSlide className="p-2">
               <div className="group shadow-hero-card bg-white hover:bg-[#d0d6ff] transition-all duration-200 ease-linear rounded-[30px] sm:p-10 p-5 w-full h-auto relative 3xs:mb-0 mb-5">
                  <div className="w-16 h-16 overflow-hidden mx-auto">
                     <Img
                        src="/assets/images/book-catalog.png"
                        alt="..."
                        width={200}
                        height={200}
                     />
                  </div>
                  <div className="text-[#4285f4] group-hover:text-white transition-all duration-150 ease-linear text-center font-['Raleway-ExtraBold',_sans-serif] text-2xl font-extrabold">
                     Catalog
                  </div>
                  <div className="text-[#878787] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Lorem ipsum dolor sit amet <br /> consectetur.
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div className="group shadow-hero-card bg-[#ffffff]  hover:bg-[#d0d6ff] transition-all duration-200 ease-linear rounded-[30px] sm:p-10 p-5 w-full h-auto relative 3xs:mb-0 mb-5">
                  <div className="w-16 h-16 overflow-hidden mx-auto">
                     <Img
                        src="/assets/images/buy-lead.png"
                        alt="..."
                        width={200}
                        height={200}
                     />
                  </div>
                  <div className="text-[#4285f4] group-hover:text-white transition-all duration-150 ease-linear text-center font-['Raleway-ExtraBold',_sans-serif] text-2xl font-extrabold">
                     Buy Leads
                  </div>
                  <div className="text-[#828282] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Lorem ipsum dolor sit amet <br /> consectetur.
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div className="group shadow-hero-card bg-[#ffffff]  hover:bg-[#d0d6ff] rounded-[30px] sm:p-10 p-5 w-full h-auto relative 3xs:mb-0 mb-5">
                  <div className=" relative">
                     <div className="w-16 h-16 mx-auto">
                        <Img
                           src="/assets/images/book-domains.png"
                           alt="..."
                           width={200}
                           height={200}
                        />
                     </div>
                  </div>
                  <div className="text-[#4285f4] group-hover:text-white transition-all duration-150 ease-linear text-center font-['Raleway-ExtraBold',_sans-serif] text-2xl font-extrabold">
                     Book Domain
                  </div>
                  <div className="text-[#828282] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Lorem ipsum dolor sit amet <br /> consectetur.
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div className="group shadow-hero-card bg-[#ffffff]  hover:bg-[#d0d6ff] rounded-[30px] sm:p-10 p-5 w-full h-auto relative 3xs:mb-0 mb-5">
                  <div className="w-16 h-16 overflow-hidden mx-auto">
                     <Img
                        src="/assets/images/for-business.png"
                        alt="..."
                        width={200}
                        height={200}
                     />
                  </div>
                  <div className="text-[#4285f4] group-hover:text-white transition-all duration-150 ease-linear text-center font-['Raleway-ExtraBold',_sans-serif] text-2xl font-extrabold">
                     For Business
                  </div>
                  <div className="text-[#828282] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Lorem ipsum dolor sit amet <br /> consectetur.
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
         <div className="button-atrrangment">
            <div className="button-swiper">
               <div className="hero-card-swiper-button-prev">
                  <span>
                     <SvgCategorySliderPrevIcon
                        width={24}
                        height={24}
                        color="white"
                     />
                  </span>
               </div>
               <div className="hero-card-swiper-button-next">
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
      </div>
   );
}
