"use client";
import React, { Fragment } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
   SvgPChatMessageIcon,
   SvgProductFavoriteBtnIcon,
   SvgRedFavorieBtnIcon,
} from "@/components/SvgIcons";
import { RPArrowLeft, RPArrowRight } from "@/components/Icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
import { removeLeadingSlash } from "@/components/react/tools";
import { SwiperSlide } from "swiper/react";
import { truncateDangerousHTMLText } from "@/components/react/truncate-text";
import {
   removeProductInWishList,
   storeProductInWishList,
} from "@/userend/without_transparent_navbar/products-search/features/SearchProductAction";
import NavLink from "@/components/NavLink";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const RatingStar = dynamic(() => import("@/components/RatingStar"));

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
   ssr: false,
});

type RelatedProduct = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   sub_category: string;
   stock: string;
   image: string;
   seller: string;
   status: string;
   video: string;
   desc: any;
   seller_id: number;
   is_wish_active: boolean;
};

type Props = {
   auth: boolean;
   search: any;
   category: any;
   price: any;
   city: any;
};

export default function SearchRelatedProduct({
   auth,
   search,
   category,
   price,
   city,
}: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const { related_products } = useSelector(
      (state: RootState) => state.userend.productSearch
   );
   const RelatedProducts: RelatedProduct[] = related_products;
   const onHandleAddToWishlist = (productId: number) => {
      const payload = {
         product_id: productId,
      };
      dispatch(
         storeProductInWishList({ payload, search, category, price, city })
      );
   };
   const onRemoveProductWithWishList = (productId: number) => {
      dispatch(
         removeProductInWishList({ productId, search, category, price, city })
      );
   };
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
               320: { slidesPerView: 1, spaceBetween: 10 },
               525: { slidesPerView: 2, spaceBetween: 10 },
               768: { slidesPerView: 3, spaceBetween: 10 },
               1125: { slidesPerView: 4, spaceBetween: 10 },
            }}
         >
            {RelatedProducts &&
               RelatedProducts.length > 0 &&
               RelatedProducts.map((product: RelatedProduct, index) => {
                  let imageUrl = "";
                  if (product?.image) {
                     imageUrl = localUrl.concat(product?.image);
                  }
                  let desc = "";
                  if (product?.desc) {
                     desc = truncateDangerousHTMLText(product?.desc, 75);
                  }
                  console.log(product);
                  return (
                     <SwiperSlide key={index} className="p-2">
                        <div
                           className="bg-[#ffffff] rounded-[14px] w-full p-4"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           <div className="relative">
                              {product?.image ? (
                                 <Img
                                    src={imageUrl}
                                    alt={product?.name}
                                    width={300}
                                    height={300}
                                    className="rounded-[10px] w-full 1xl:h-[230px] xl:h-52 3lg:h-44 lg:h-56 5md:h-48 3md:h-44 md:h-40 4sm:h-60 2sm:h-52 sm:h-48 6xs:h-40 4xs:h-36 3xs:h-60 xs:h-48 h-auto object-cover"
                                 />
                              ) : (
                                 <Img
                                    src="/assets/images/demo.png"
                                    alt={product?.name}
                                    width={300}
                                    height={300}
                                    className="rounded-[10px] w-full xl:h-[230px] 2lg:h-64 lg:h-60 4md:h-56 3md:h-48 4sm:h-64 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
                                 />
                              )}
                              {product?.is_wish_active === false ? (
                                 <Button
                                    type="button"
                                    className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                                    onClick={() => {
                                       if (auth === true) {
                                          onHandleAddToWishlist(
                                             Number(product?.id)
                                          );
                                       }
                                    }}
                                 >
                                    <SvgProductFavoriteBtnIcon
                                       width={24}
                                       height={24}
                                       color="black"
                                    />
                                 </Button>
                              ) : (
                                 <Button
                                    type="button"
                                    className="bg-[rgba(255,255,255,0.60)] backdrop-blur-[4px] rounded-xl w-9 h-9 absolute top-2 right-2 flex justify-center items-center"
                                    onClick={() => {
                                       if (auth === true) {
                                          onRemoveProductWithWishList(
                                             Number(product?.id)
                                          );
                                       }
                                    }}
                                 >
                                    <div className="w-6 h-6 text-[#F44336]">
                                       <SvgRedFavorieBtnIcon />
                                    </div>
                                 </Button>
                              )}
                           </div>
                           <div className="p-1">
                              <span
                                 className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pt-2"
                                 style={{
                                    background:
                                       "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                 }}
                              >
                                 <NavLink
                                    href={`/product-sale/${product?.slug}`}
                                 >
                                    {product.name}
                                 </NavLink>
                              </span>
                              <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                                 {desc}
                              </div>
                              <div className="grid grid-cols-1 gap-3 pt-3">
                                 <div className="proudct-rating-container flex items-center">
                                    <RatingStar rating={3} />
                                 </div>
                                 <NavLink
                                    href={`/buyer/messages/${product?.seller_id}`}
                                    className="capitalize bg-[#4285f4] text-white rounded-md w-full py-2 font-['Raleway-Bold',_sans-serif] text-sm font-bold flex justify-center items-center"
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
