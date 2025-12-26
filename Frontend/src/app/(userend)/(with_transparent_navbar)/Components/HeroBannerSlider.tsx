"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "@/assets/css/hero-banner-slider.css";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

export default function HeroBannerSlider() {
   return (
      <>
         <Swiper
            effect={"coverflow"}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={10} // Adds space between slides
            centeredSlides={true} // Centers the active slide
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
               dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
               475: {
                  slidesPerView: "auto",
                  spaceBetween: 10,
                  centeredSlides: true,
               },
               725: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  centeredSlides: true,
               },
            }}
         >
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-image-slider-left.png"
                           alt="..."
                           width={130}
                           height={118}
                           className="mx-auto"
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-main-image-slider.png"
                           alt="..."
                           width={176}
                           height={160}
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-image-slider-left.png"
                           alt="..."
                           width={130}
                           height={118}
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-image-slider-left.png"
                           alt="..."
                           width={130}
                           height={118}
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-main-image-slider.png"
                           alt="..."
                           width={176}
                           height={160}
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                  <div>
                     <div>
                        <Img
                           src="/assets/images/hero-image-slider-left.png"
                           alt="..."
                           width={130}
                           height={118}
                        />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
