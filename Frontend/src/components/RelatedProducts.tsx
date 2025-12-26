"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
   SvgPChatMessageIcon,
   SvgProductFavoriteBtnIcon,
} from "@/components/SvgIcons";
import { RPArrowLeft, RPArrowRight } from "./Icons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("./Button"));
const Img = dynamic(() => import("./Image"));
const ProductRating = dynamic(() => import("./ProductRating"));
const RatingStar = dynamic(() => import("./RatingStar"));

export default function RelatedProduct() {
   return (
      <Fragment>
         <Swiper
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               525: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
               },
               1125: {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
            }}
         >
            <SwiperSlide className="p-2">
               <div
                  className="bg-[#ffffff] rounded-[14px] w-full p-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="relative">
                     <Img
                        src="/assets/images/product1.png"
                        alt="trandy product image"
                        width={300}
                        height={300}
                        className="rounded-[10px] w-full h-auto object-cover"
                     />

                     <Button
                        type="button"
                        className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                     >
                        <SvgProductFavoriteBtnIcon
                           width={24}
                           height={24}
                           color="black"
                        />
                     </Button>
                  </div>
                  <div className="p-1">
                     <div
                        className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Lorem ipsum dolor
                     </div>
                     <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                        Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                        tempor est in consectetur
                     </div>

                     <div className="grid grid-cols-1 gap-3 pt-3">
                        <div className="proudct-rating-container flex items-center">
                           <RatingStar rating={4} />
                        </div>
                        <Button
                           type="button"
                           className=" capitalize bg-[#4285f4] text-white rounded-md w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
                        >
                           <span className="pe-1">
                              <SvgPChatMessageIcon
                                 width={16}
                                 height={16}
                                 color="white"
                              />
                           </span>
                           Chat Now
                        </Button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div
                  className="bg-[#ffffff] rounded-[14px] w-full p-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="relative">
                     <Img
                        src="/assets/images/product1.png"
                        alt="trandy product image"
                        width={300}
                        height={300}
                        className="rounded-[10px] w-full h-auto object-cover"
                     />

                     <Button
                        type="button"
                        className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                     >
                        <SvgProductFavoriteBtnIcon
                           width={24}
                           height={24}
                           color="black"
                        />
                     </Button>
                  </div>
                  <div className="p-1">
                     <div
                        className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Lorem ipsum dolor
                     </div>
                     <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                        Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                        tempor est in consectetur
                     </div>

                     <div className="grid grid-cols-1 gap-3 pt-3">
                        <div className="proudct-rating-container flex items-center">
                           <RatingStar rating={4} />
                        </div>
                        <Button
                           type="button"
                           className=" capitalize bg-[#4285f4] text-white rounded-md w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
                        >
                           <span className="pe-1">
                              <SvgPChatMessageIcon
                                 width={16}
                                 height={16}
                                 color="white"
                              />
                           </span>
                           Chat Now
                        </Button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div
                  className="bg-[#ffffff] rounded-[14px] w-full p-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="relative">
                     <Img
                        src="/assets/images/product1.png"
                        alt="trandy product image"
                        width={300}
                        height={300}
                        className="rounded-[10px] w-full h-auto object-cover"
                     />

                     <Button
                        type="button"
                        className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                     >
                        <SvgProductFavoriteBtnIcon
                           width={24}
                           height={24}
                           color="black"
                        />
                     </Button>
                  </div>
                  <div className="p-1">
                     <div
                        className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Lorem ipsum dolor
                     </div>
                     <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                        Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                        tempor est in consectetur
                     </div>

                     <div className="grid grid-cols-1 gap-3 pt-3">
                        <div className="proudct-rating-container flex items-center">
                           <RatingStar rating={4} />
                        </div>
                        <Button
                           type="button"
                           className=" capitalize bg-[#4285f4] text-white rounded-md w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
                        >
                           <span className="pe-1">
                              <SvgPChatMessageIcon
                                 width={16}
                                 height={16}
                                 color="white"
                              />
                           </span>
                           Chat Now
                        </Button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="p-2">
               <div
                  className="bg-[#ffffff] rounded-[14px] w-full p-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="relative">
                     <Img
                        src="/assets/images/product1.png"
                        alt="trandy product image"
                        width={300}
                        height={300}
                        className="rounded-[10px] w-full h-auto object-cover"
                     />

                     <Button
                        type="button"
                        className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                     >
                        <SvgProductFavoriteBtnIcon
                           width={24}
                           height={24}
                           color="black"
                        />
                     </Button>
                  </div>
                  <div className="p-1">
                     <div
                        className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Lorem ipsum dolor
                     </div>
                     <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                        Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                        tempor est in consectetur
                     </div>

                     <div className="grid grid-cols-1 gap-3 pt-3">
                        <div className="proudct-rating-container flex items-center">
                           <RatingStar rating={4} />
                        </div>
                        <Button
                           type="button"
                           className=" capitalize bg-[#4285f4] text-white rounded-md w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
                        >
                           <span className="pe-1">
                              <SvgPChatMessageIcon
                                 width={16}
                                 height={16}
                                 color="white"
                              />
                           </span>
                           Chat Now
                        </Button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
         <div className="button-atrrangment">
            <div className="button-swiper gap-10">
               <div className="swiper-button-prev">
                  <span>
                     <RPArrowLeft />
                  </span>
               </div>
               <div className="swiper-button-next">
                  <span>
                     <RPArrowRight />
                  </span>
               </div>
            </div>
         </div>
      </Fragment>
   );
}
