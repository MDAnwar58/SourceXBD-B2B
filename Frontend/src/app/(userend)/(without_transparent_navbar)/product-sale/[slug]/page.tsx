"use client";
import React, { Fragment, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import "@/assets/css/related-product-slider.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getProduct } from "./features/SaleProductAction";
import { removeLeadingSlash } from "@/components/react/tools";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const ProductSaleViewMobileNumber = dynamic(
   () => import("@/components/ProductSaleViewMobileNumber")
);
const AllTabs = dynamic(() => import("./Components/AllTabs"));
const Breadcramb = dynamic(() => import("./Components/Breadcramb"));
const Grid = dynamic(() => import("@/components/grid"));
const ProductImagesSlider = dynamic(
   () => import("./Components/ProductImagesSlider")
);
const ProductVendor = dynamic(() => import("./Components/ProductVendor"));
const ProductSpecification = dynamic(
   () => import("./Components/ProductSpecification")
);
const RelatedProducts = dynamic(() => import("./Components/RelatedProducts"));
const Img = dynamic(() => import("@/components/Image"));

const sliders = [
   { image_url: "/assets/images/background.png", alt: "slider" },
   { image_url: "/assets/images/slider1.png", alt: "slider 1" },
   { image_url: "/assets/images/slider2.png", alt: "slider 2" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
   { image_url: "/assets/images/slider4.png", alt: "slider 4" },
   { image_url: "/assets/images/slider5.png", alt: "slider 5" },
   { image_url: "/assets/images/slider4.png", alt: "slider 4" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
   { image_url: "/assets/images/slider3.png", alt: "slider 3" },
];

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
type Tag = { id: string; text: string };

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   stock: string;
   desc: any;
   images: any;
   is_wish_active: boolean;
   seller: string;
   status: string;
   sub_category: string;
   tags: Tag;
   vendor: Vendor;
   video: string;
   created_at: any;
   specification: string;
};

type RelatedProduct = {
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

type ProductData = {
   product: Product;
   related_products: RelatedProduct[];
};

const OPTIONS: EmblaOptionsType = {};

type Props = {
   params: {
      slug: string;
   };
};

export default function Sale({ params }: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      const { slug } = params;
      dispatch(getProduct({ slug: slug }));
   }, [dispatch, params.slug]);

   const { product_data } = useSelector(
      (state: RootState) => state.userend.productSale
   );

   const { product = {}, related_products } = product_data as ProductData;
   const Product = product as Product;
   const relatedProducts: RelatedProduct[] = related_products;
   // const vendor = Product?.vendor as Vendor;
   const { images = [], vendor } = Product;
   const Vendor = vendor as Vendor;

   const imageObjects = images.map((url: any, index: number) => ({
      image_url: localUrl + url,
      alt: `Image ${index + 1}`,
   }));
   const SLIDES = imageObjects;
   const specification = Product?.specification as string;
   return (
      <Fragment>
         <div className="container pt-7 pb-20">
            {/* <AllTabs /> */}

            <div className="border-solid border-[#515151] border-t border-r-[0] border-b-[0] border-l-[0] h-0 w-full"></div>

            <Breadcramb params={params} />

            <div className="main-body mb-11">
               <Grid cols={12} gap={7} className="mb-11">
                  <div className=" md:col-span-7 col-span-12">
                     <ProductImagesSlider slides={SLIDES} options={OPTIONS} />
                  </div>
                  <div className="md:col-span-5 col-span-12">
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-4xl font-normal mb-3">
                        TK {Product?.price}
                     </div>
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold mb-1">
                        {Product?.name}
                     </div>
                     <div
                        dangerouslySetInnerHTML={{ __html: Product?.desc }}
                        className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-base leading-6 font-normal mb-2"
                     />

                     <div className="flex flex-col gap-3">
                        <div
                           className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium rounded-[14px] h-[63px] relative overflow-hidden"
                           style={{
                              position: "relative",
                              zIndex: 1, // Ensures text stays above the pseudo-element
                              backgroundColor: "#fff", // Set your desired background color
                           }}
                        >
                           <span
                              style={{
                                 position: "absolute",
                                 top: 0,
                                 left: 0,
                                 right: 0,
                                 bottom: 0,
                                 zIndex: -1, // Behind the content
                                 borderRadius: "14px", // Ensures the rounded border
                                 border: "0px solid transparent", // Invisible border to support the gradient
                                 background:
                                    "linear-gradient(7.01deg, rgba(47, 47, 47, 1) 0%, rgba(217, 217, 217, 1) 100%)",
                                 WebkitMask:
                                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Ensures only the border shows the gradient
                                 WebkitMaskComposite: "xor", // Ensures masking is applied properly
                                 maskComposite: "exclude", // Ensures the content area stays intact
                                 padding: "2px", // Add padding to create the space for the border
                              }}
                           ></span>
                           <div className="flex items-center justify-center h-full">
                              Get Latest Price
                           </div>
                        </div>
                        {vendor?.phone ? <ProductSaleViewMobileNumber /> : null}
                     </div>

                     <div className="flex flex-col gap-3 pt-14">
                        <div className="bg-[#ededed] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium rounded-[14px] h-[55px] flex justify-between items-center px-5">
                           <div>We Accept</div>
                           <div className="flex flex-row gap-2">
                              <Img
                                 src="/assets/images/mastercard.png"
                                 alt="master card"
                                 width={50}
                                 height={50}
                                 className="w-6 h-6 rounded"
                              />
                              <Img
                                 src="/assets/images/paypal.png"
                                 alt="master card"
                                 width={50}
                                 height={50}
                                 className="w-9 h-[22px] rounded"
                              />
                              <Img
                                 src="/assets/images/visa.png"
                                 alt="master card"
                                 width={50}
                                 height={50}
                                 className="w-6 h-6 rounded"
                              />
                           </div>
                        </div>

                        <div className="bg-[#ededed] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium rounded-[14px] h-[55px] flex items-center justify-between px-5">
                           <div>No Returns</div>
                           <div className="flex items-center gap-2">
                              <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative">
                                 Lern more
                              </div>
                              <div className="w-4 h-4 text-[#515151]">
                                 <SvgViewMoreArrowIcon />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Grid>

               <Grid cols={12} gap={7} className="xs3:!grid">
                  <div className="xl:col-span-7 col-span-12 xs3:mb-0 mb-7">
                     {specification && (
                        <ProductSpecification specification={specification} />
                     )}
                  </div>
                  <ProductVendor vendor={vendor} />
               </Grid>
            </div>

            <div
               className="rounded-[20px] relative 4md:pb-10 pb-3 pt-7 4md:px-12 xs3:px-7 px-5"
               style={{
                  background:
                     "linear-gradient(93.31deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 58.49999785423279%,rgba(208, 214, 255, 0.5) 100%)",
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div
                  className="4xs:text-left text-center font-['Raleway-Bold',_sans-serif] xs3:text-[32px] text-[25px] font-bold 4xs:w-72"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Related products
               </div>
               <div className="relared-product-slider 4xs:pt-5 pt-14 pb-7">
                  <RelatedProducts products={relatedProducts} vendor={Vendor} />
               </div>
            </div>
         </div>
      </Fragment>
   );
}
