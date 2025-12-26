"use client";
import React, { useCallback } from "react";
import { FavoriteSvgIcon } from "@/buyer/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { LocalUrl } from "@/components/react/localhost";
import { removeProductInWishList } from "@/buyer/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
const Card = dynamic(() => import("@/buyer/components/buyer-card"), {
   ssr: false,
});
const Grid = dynamic(() => import("@/buyer/components/buyer-grid"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});
const ViewNumberBtn = dynamic(() => import("@/components/ViewNumberBtn"), {
   ssr: false,
});

type WishProduct = {
   id: number;
   name: string;
   price: number;
   discount_price: number | null;
   min_order: number | null;
   s_desc: string;
   image: string;
   category: string;
   company: string;
   contact: string | null;
   is_wish_active: boolean;
   slug: string;
   spacification: any | null;
   time_ago: string;
};

export default function RecentWishlist() {
   const dispatch = useDispatch<AppDispatch>();
   const localUrl = LocalUrl();
   const { wish_products = [] } = useSelector(
      (state: BuyerState) => state.buyer.dashboard
   );
   const products = wish_products as WishProduct[];

   const onRemoveProductWithWishList = useCallback(
      (productId: number) => {
         dispatch(
            removeProductInWishList({
               productId,
            })
         );
      },
      [dispatch]
   );

   return (
      <Card className="mt-7">
         <div className="flex flex-row justify-between items-center-">
            <div
               className="text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Recent Wishlist
            </div>

            <NavLink href="/buyer/wish-list">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-[13px] font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-5 h-5">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>

         <Grid
            gridOne={true}
            className="12xl:grid-cols-5 3xl:grid-cols-4 5lg:grid-cols-3 3md:grid-cols-2 md:grid-cols-1 3xs:grid-cols-2 grid-cols-1 5xl:gap-9 4md:gap-5 mt-3"
            gap={7}
         >
            {products && products.length > 0 ? (
               products.map((product, index: number) => {
                  let imageUrl = "";
                  if (product?.image) {
                     const imagePath = localUrl.concat(product?.image);
                     imageUrl = imagePath;
                  }

                  return (
                     <div key={index}>
                        <div
                           className="bg-[rgba(152,176,238,0.05)] rounded-[14px] w-full p-4"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(94, 94, 94, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                        >
                           <div className="relative">
                              {product?.image ? (
                                 <Img
                                    src={imageUrl}
                                    alt="trandy product image"
                                    width={300}
                                    height={300}
                                    className="rounded-[10px] w-full 15xl:h-[251px] 13xl:h-[230px] xl:h-[201px] 5lg:h-44 lg:h-60 6md:h-52 3md:h-44 4sm:h-72 2sm:h-60 sm:h-56 6xs:h-52 3xs:h-40 xs3:h-64 xs5:h-56 h-44 object-cover"
                                 />
                              ) : (
                                 <Img
                                    src="/assets/images/demo.png"
                                    alt="trandy product image"
                                    width={300}
                                    height={300}
                                    className="rounded-[10px] w-full 15xl:h-[251px] 13xl:h-[230px] xl:h-[201px] 5lg:h-44 lg:h-60 6md:h-52 3md:h-44 4sm:h-72 2sm:h-60 sm:h-56 6xs:h-52 3xs:h-40 xs3:h-64 xs5:h-56 h-44 object-cover"
                                 />
                              )}

                              <Button
                                 type="button"
                                 className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                                 onClick={() => {
                                    onRemoveProductWithWishList(product?.id);
                                 }}
                              >
                                 <div className="w-6 h-6 text-[#F44336]">
                                    <FavoriteSvgIcon />
                                 </div>
                              </Button>
                           </div>
                           <div className="pt-2">
                              <NavLink href={`/product-sale/${product?.slug}`}>
                                 <span
                                    className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
                                    style={{
                                       background:
                                          "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                                       backgroundClip: "text",
                                       WebkitBackgroundClip: "text",
                                       WebkitTextFillColor: "transparent",
                                    }}
                                 >
                                    {product?.name}
                                 </span>
                              </NavLink>
                              <div className="flex 3lg:flex-row flex-col justify-between pt-[0.35rem]">
                                 <div>
                                    <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                       {product?.category}
                                    </div>
                                    {product?.discount_price ? (
                                       <div className="flex items-center pt-2">
                                          <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                                             BDT{" "}
                                             {product?.price -
                                                product?.discount_price}
                                          </div>
                                          <div className="text-[#3d3d3d] line-through ps-3 font-['Inter-Regular',_sans-serif] text-xs font-normal">
                                             {product?.price}
                                          </div>
                                       </div>
                                    ) : (
                                       <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal  pt-2">
                                          BDT {product?.price}
                                       </div>
                                    )}
                                 </div>
                                 {product?.min_order && (
                                    <div className="text-[#92aae9] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                                       {product?.min_order} setMin. order
                                    </div>
                                 )}
                              </div>

                              <div className="grid xl:grid-cols-2 lg:grid-cols-1 4md:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 3xs:grid-cols-1 xs6:grid-cols-2 grid-cols-1 gap-2 pt-3">
                                 <ViewNumberBtn
                                    contactNumber={product?.contact}
                                 />
                                 <Button
                                    type="button"
                                    className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
                                    style={{
                                       background:
                                          "linear-gradient(166.01deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                                    }}
                                 >
                                    Get Best Price
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })
            ) : (
               <div className="12xl:col-span-5 3xl:col-span-4 5lg:col-span-3 3md:col-span-2 md:col-span-1 3xs:col-span-2 col-span-1 text-gray-600 text-3xl font-semibold text-center pt-3 pb-5">
                  Products not found
               </div>
            )}
         </Grid>
      </Card>
   );
}
