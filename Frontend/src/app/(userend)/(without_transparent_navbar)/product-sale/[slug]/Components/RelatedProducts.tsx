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
import { RPArrowLeft, RPArrowRight } from "@/components/Icons";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const ProductRating = dynamic(() => import("@/components/ProductRating"));
const RatingStar = dynamic(() => import("@/components/RatingStar"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Company = {
   name: string;
   address: string;
   country: string;
   user: { id: number };
};

type Vendor = {
   id: string;
   name: string;
   email: string;
   phone: string;
   company: Company;
   role: string;
   status: string;
   created_at: string;
};

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   price: string;
   image: string;
   contact: string;
   is_wish_active: boolean;
   time_ago: string;
};

type Props = {
   products: Product[];
   vendor: Vendor;
};

export default function RelatedProducts({ products, vendor }: Props) {
   const localUrl = LocalUrl();
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
            {products &&
               products.length > 0 &&
               products.map((product: Product, index: number) => {
                  const imagePath = localUrl + product?.image;
                  return (
                     <SwiperSlide key={index} className="p-2">
                        <div
                           className="bg-[#ffffff] rounded-[30px] w-full p-4"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           <div className="relative">
                              <Img
                                 src={imagePath.toString()}
                                 alt="trandy product image"
                                 width={300}
                                 height={300}
                                 className="rounded-[20px] w-full xl:h-[211px] 3lg:h-44 lg:h-52 4md:h-44 3md:h-40 md:h-36 3sm:h-52 2sm:h-48 6xs:h-44 4xs:h-40 xs:h-60  xs3:h-52 xs4:h-48 xs6:h-44 h-40 object-cover"
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
                                 className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold 4xs:w-[152px] pt-2"
                                 style={{
                                    background:
                                       "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                 }}
                              >
                                 <NavLink
                                    href={`/product-sale/${product.slug}`}
                                 >
                                    {product?.name}
                                 </NavLink>
                              </div>
                              <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                                 Lorem ipsum dolor sit amet consectetur. Eu enim
                                 natoque tempor est in consectetur
                              </div>

                              <div className="">
                                 <div className="proudct-rating-container pt-2 pb-3">
                                    <RatingStar rating={4} />
                                 </div>
                                 <NavLink
                                    href={`buyer/messages?receiverId=${vendor?.id}`}
                                    className=" capitalize bg-[#4285f4] text-white rounded-2xl w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
                                 >
                                    <span className="pe-1">
                                       <SvgPChatMessageIcon
                                          width={16}
                                          height={16}
                                          color="white"
                                       />
                                    </span>
                                    Chat Now
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
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
