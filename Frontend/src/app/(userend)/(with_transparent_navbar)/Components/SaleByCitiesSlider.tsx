"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
   SvgCategorySliderNextIcon,
   SvgCategorySliderPrevIcon,
} from "@/components/SvgIcons";
import "swiper/css";
import "swiper/css/navigation";
import "@/assets/css/sale-by-cities-slider.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { LocalUrl } from "@/components/react/localhost";
import { truncateDangerousHTMLText } from "@/components/react/truncate-text";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

type Image = {
   image: string;
};

type City = {
   id: string;
   name: string;
   slug: string;
   country_id: string;
   desc: any;
   images: Image[];
   map: any;
   status: string;
};

export default function SaleByCitiesSlider() {
   const localUrl = LocalUrl();
   const { cities } = useSelector((state: RootState) => state.userend.home);
   const Cities: City[] = cities;

   return (
      <div className="sale-by-cities-slider pb-16 lg:ps-5 lg:pe-20 3xs:w-full xs:w-[75%]  xs3:w-[85%] w-[95%] 3xs:mx-0 mx-auto">
         <Swiper
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={3}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
               475: {
                  slidesPerView: 2, // 2 slides per view for medium screens
                  spaceBetween: 5,
               },
               675: {
                  slidesPerView: 2, // 2 slides per view for medium screens
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3, // 2 slides per view for medium screens
                  spaceBetween: 5,
               },
               // When the window width is >= 850px
               975: {
                  slidesPerView: 4, // 4 slides per view for large screens
                  spaceBetween: 3,
               },
               // When the window width is >= 1024px
               1024: {
                  slidesPerView: 4, // 4 slides per view for large screens
                  spaceBetween: 10,
               },
               // When the window width is >= 1625px
               1280: {
                  slidesPerView: 5, // 4 slides per view for large screens
                  spaceBetween: 10,
               },
            }}
         >
            {Cities.length > 0 &&
               Cities.map((city: City, index: number) => {
                  let imageUrl = "";
                  if (city?.images.length > 0) {
                     const storePath = city?.images.map((image: Image) => {
                        return image?.image;
                     });
                     const storeImagePath = storePath.join(", ");
                     const forwardSlash = "/";
                     const storeImageUrl = forwardSlash.concat(storeImagePath);
                     imageUrl = localUrl.concat(storeImageUrl);
                  }
                  let desc = "";
                  if (city?.desc) {
                     desc = truncateDangerousHTMLText(city?.desc, 25);
                  }
                  return (
                     <SwiperSlide key={index + 1} className="p-3">
                        <div
                           className=" rounded-b-[20px] rounded-t-[25px] relative"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(142, 142, 142, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           {city?.images.length > 0 ? (
                              <Img
                                 src={imageUrl}
                                 alt="..."
                                 width={300}
                                 height={300}
                                 className="rounded-[20px] w-full 3lg:h-[158px] md:h-[158px] h-[199px]"
                              />
                           ) : (
                              <Img
                                 src="/assets/images/demo.png"
                                 alt="..."
                                 width={300}
                                 height={300}
                                 className="rounded-[20px] w-full 3lg:h-[158px] md:h-[158px] h-[199px]"
                              />
                           )}
                           <div className="bg-[#f0f2ff] rounded-br-[20px] rounded-bl-[20px] w-full absolute bottom-0 left-0 pb-3 pt-1 px-5">
                              <div className="text-[#000000] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold">
                                 {city?.name}
                              </div>

                              <div className="text-[#808080] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
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
                        color="#fff"
                     />
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
