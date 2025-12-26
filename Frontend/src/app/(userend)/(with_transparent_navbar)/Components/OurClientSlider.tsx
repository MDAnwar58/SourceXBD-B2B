"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../main.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "@/assets/css/our-client-slider.css";
import { SvgLeftArrowIcon, SvgRightArrowIcon } from "@/components/SvgIcons";

type Props = {
   slides?: any[];
};

export default function OurClientSlider({ slides }: Props) {
   return (
      <>
         <Swiper
            effect={"coverflow"}
            slidesPerView={"auto"}
            centeredSlides={false}
            pagination={{
               el: ".our-client-swiper-pagination",
               clickable: true,
            }}
            // autoplay={{
            //    delay: 4000,
            //    disableOnInteraction: false,
            // }}
            navigation={{
               nextEl: ".our-client-slider-button-next",
               prevEl: ".our-client-slider-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="out-client-slider-container"
         >
            {slides?.map((slider, index) => (
               <SwiperSlide key={index}>{slider.item}</SwiperSlide>
            ))}
         </Swiper>
         <div className="slider-controler">
            <div className="slider-navigation">
               <div className="our-client-slider-button-prev bg-[#ffffff] text-[#4285F4] rounded-[20px] w-[85px] h-[41px] flex justify-center items-center">
                  <div className="w-7 h-7">
                     <SvgLeftArrowIcon />
                  </div>
               </div>
               <div
                  className="our-client-slider-button-next rounded-[20px] text-white w-[78px] h-[41px] flex justify-center items-center"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(84, 118, 180, 1) 100%)",
                  }}
               >
                  <div className="w-7 h-7">
                     <SvgRightArrowIcon />
                  </div>
               </div>
            </div>
            <div className="our-client-swiper-pagination"></div>
         </div>
      </>
   );
}
