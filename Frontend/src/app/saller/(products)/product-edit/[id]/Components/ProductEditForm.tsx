"use client";
import React, { useEffect, useRef } from "react";
import { EyeSvgIcon } from "@/saller/components/SvgIcons";
import ProductContext from "@/saller/products/featrues/ProductContext";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import { getCookie } from "@/components/react/cookie";
import { useAuth } from "@/components/react/auth";
import TextEditor from "@/saller/components/TextEditor";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));
const SelectArea = dynamic(() => import("@/saller/components/select"));
const MediaField = dynamic(() => import("./MediaField"));
const TagsInputWrapper = dynamic(() => import("@/saller/components/TagsInput"));

const options = [
   {
      name: "Active",
      bgColor: "bg-[#90ff38]",
      value: 1,
   },
   {
      name: "Inactive",
      bgColor: "bg-red-300",
      value: 2,
   },
   {
      name: "Upcomming",
      bgColor: "bg-yellow-500",
      value: 3,
   },
];

const productRemarkOptions = [
   {
      name: "Tranding",
      value: 1,
   },
   {
      name: "Most Popular",
      value: 2,
   },
];
const ProductOrganisation = [
   {
      name: "Default Product",
      value: 1,
   },
   {
      name: "Product 1",
      value: 2,
   },
   {
      name: "Product 2",
      value: 3,
   },
   {
      name: "Product 3",
      value: 4,
   },
];

interface Product {
   id: number;
   name: string;
   desc: any;
   specification: any;
   s_desc: any;
   title: any;
   price: any;
   files: any;
   status: any;
   type: any;
   vendor: any;
   category_id: any;
   sub_category_id: any;
   publish: any;
   user_id: any;
   tags: any;
   stock: any;
   rating_point: any;
   discount_price: number;
   min_order: number;
   contact: any;
}

type Props = {
   params: {
      id: string;
   };
};

export default function ProductEditForm({ params }: Props) {
   const {
      getCategories,
      getCubCategories,
      name,
      desc,
      spec,
      s_desc,
      price,
      discount_price,
      min_order,
      images,
      type,
      vendor,
      tags,
      setTags,
      stock,
      rating_point,
      categoryId,
      subCategoryId,
      status,
      setUserId,
      setCategoryId,
      setSubCategoryId,
      setStatus,
      setPublishing,
      publishing,
      contact,
      getProduct,
      productImages,
      setProductImages,
      updateProduct,
   } = ProductContext();
   const { id } = params;
   const market = useRef<any>(null);
   const saleChannel = useRef<any>(null);

   useEffect(() => {
      getCategories();
      getCubCategories();
      getProduct(String(id));
      const token = getCookie("auth");
      const user = useAuth(token);
      setUserId(String(user?.id));
   }, []);

   const { categories, sub_categories, product, loading, error } = useSelector(
      (state: SallerState) => state.saller.product
   );

   let categoriesOptions: any = [];
   categories?.length > 0 &&
      categories?.map((item: any) => {
         categoriesOptions.push({
            name: item.name,
            value: item.id,
         });
      });

   let subCategoriesOptions: any = [];
   sub_categories?.length > 0 &&
      sub_categories?.map((item: any) => {
         subCategoriesOptions.push({
            name: item.name,
            value: item.id,
         });
      });

   const Error = error as Product | null;

   const onHandlePublishingChange = (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { value, checked } = e.target;
      setPublishing((prevPublishing) => {
         const currentPublishing = prevPublishing || []; // Ensure it's never null

         if (checked) {
            return [...currentPublishing, { name: value }];
         } else {
            return currentPublishing.filter((item) => item.name !== value);
         }
      });
   };
   const onHandleSalesChannelChange = () => {
      saleChannel.current.checked = !saleChannel.current.checked;
      onHandlePublishingChange({
         target: saleChannel.current,
      } as React.ChangeEvent<HTMLInputElement>);
   };

   const onHandleMarketChange = () => {
      market.current.checked = !market.current.checked;
      onHandlePublishingChange({
         target: market.current,
      } as React.ChangeEvent<HTMLInputElement>);
   };

   const onlineStore =
      publishing?.length > 0 &&
      publishing?.find((publish: any) => publish.name === "Online store")?.name;
   const isOnlineStore: boolean = onlineStore === "Online store";

   const bangladesh =
      publishing?.length > 0 &&
      publishing?.find((publish: any) => publish.name === "Bangladesh")?.name;
   const isBangladesh: boolean = bangladesh === "Bangladesh";

   const Product = product as Product | null;

   return (
      <div className="xs:grid grid-cols-12 gap-7">
         <div className="2xl:col-span-8 3lg:col-span-8 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5 mb-7">
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Product Name
                  </div>

                  <Input
                     type="text"
                     inputRef={name}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Name"
                     defaultValue={Product?.name}
                  />
                  {Error?.name && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.name}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Price
                  </div>
                  <Input
                     type="text"
                     inputRef={price}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Price"
                     defaultValue={Product?.price}
                  />

                  {Error?.price && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.price}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Discount Price
                  </div>
                  <Input
                     type="text"
                     inputRef={discount_price}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Discount Price"
                     defaultValue={Product?.discount_price}
                  />

                  {Error?.discount_price && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.discount_price}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Stock
                  </div>
                  <Input
                     type="text"
                     inputRef={stock}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Stock"
                     defaultValue={Product?.stock}
                  />

                  {Error?.stock && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.stock}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Min. Order
                  </div>
                  <Input
                     type="text"
                     inputRef={min_order}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Min. order"
                     defaultValue={Product?.min_order}
                  />

                  {Error?.min_order && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.min_order}
                     </small>
                  )}
               </div>

               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-[.20rem]">
                     Description
                  </div>
                  <TextEditor
                     ref={desc}
                     initialValue={Product?.desc}
                     placeholder=""
                  />

                  {Error?.desc && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.desc}
                     </small>
                  )}
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>

               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-[.20rem]">
                     Specifications
                  </div>
                  <TextEditor ref={spec} placeholder="" />

                  {Error?.specification && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.specification}
                     </small>
                  )}
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>

               <MediaField
                  images={images}
                  Error={Error}
                  productImages={productImages}
                  setProductImages={setProductImages}
               />
            </div>
         </div>
         <div className="2xl:col-span-4 3lg:col-span-4 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7 xs:mt-0 mt-7">
               <SelectArea
                  label="Status"
                  selectedOption={
                     status === "active" ? 1 : status === "inactive" ? 2 : 3
                  }
                  options={options}
                  onHandleSelectValue={(value: string) => {
                     if (Number(value) === 1) {
                        setStatus("active");
                     } else if (Number(value) === 2) {
                        setStatus("inactive");
                     } else {
                        setStatus("upcomming");
                     }
                  }} // You should pass a function
               />

               {Error?.status && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.status}
                  </small>
               )}
            </div>

            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-3">
                  Publishing
               </div>
               <div className="mb-3">
                  <div className="text-[#b2b2b2] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-1">
                     Sales Channel
                  </div>
                  <div
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] px-3 shadow-admin-card flex items-center gap-x-2"
                     onClick={() => onHandleSalesChannelChange()}
                  >
                     <CheckBox
                        checkRef={saleChannel}
                        onChange={onHandleSalesChannelChange}
                        className="bg-[#4285f4] text-[#4285f4] focus:bg-[#4285f4] focus:text-[#4285f4] focus:ring-[#4285f4] border-none w-4 h-4"
                        defaultValue="Online store"
                        checked={isOnlineStore}
                     />
                     <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                        Online store
                     </div>
                  </div>
               </div>
               <div>
                  <div className="text-[#b2b2b2] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-1">
                     market
                  </div>
                  <div
                     onClick={() => onHandleMarketChange()}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] px-3 shadow-admin-card flex items-center gap-x-2"
                  >
                     <CheckBox
                        checkRef={market}
                        onChange={onHandleMarketChange}
                        className="bg-[#4285f4] text-[#4285f4] focus:bg-[#4285f4] focus:text-[#4285f4] focus:ring-[#4285f4] border-none w-4 h-4"
                        defaultValue={"Bangladesh"}
                        checked={isBangladesh}
                     />
                     <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                        Bangladesh
                     </div>
                  </div>
               </div>
               {Error?.publish && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.publish}
                  </small>
               )}
            </div>

            <div className="bg-[#ffffff] rounded-[20px] w-full h-auto shadow-admin-card p-5 mb-7 ">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-3">
                  Insights
               </div>
               <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-auto shadow-admin-card p-5">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal">
                     Lorem ipsum dolor sit amet consectetur. Elementum massa
                     accumsan nec at non ac. Tempor aliquet scelerisque diam
                     ultrices.
                  </div>
               </div>
            </div>

            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-3">
                  Product Organization
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Product type
                  </div>
                  <Input
                     type="text"
                     inputRef={type}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={Product?.type}
                  />
                  {Error?.type && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.type}
                     </small>
                  )}
               </div>
               {/* <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Vendor
                  </div>
                  <Input
                     type="text"
                     inputRef={vendor}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={Product?.vendor}
                  />
                  {Error?.vendor && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.vendor}
                     </small>
                  )}
               </div> */}
               <div className="mb-3">
                  <SelectArea
                     label="Category"
                     selectedOption={Number(categoryId)}
                     options={categoriesOptions}
                     onHandleSelectValue={(value: string) =>
                        setCategoryId(value)
                     }
                  />
                  {Error?.category_id && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.category_id}
                     </small>
                  )}
               </div>
               <div className="mb-3">
                  <SelectArea
                     label="Sub Category"
                     selectedOption={Number(subCategoryId)}
                     options={subCategoriesOptions}
                     onHandleSelectValue={(value: string) =>
                        setSubCategoryId(value)
                     }
                  />
                  {Error?.sub_category_id && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.sub_category_id}
                     </small>
                  )}
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Rating Point
                  </div>
                  <Input
                     type="text"
                     inputRef={rating_point}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={Product?.rating_point}
                  />
                  {Error?.rating_point && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.rating_point}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Tags
                  </div>
                  {/* <Input
                     type="text"
                     inputRef={tags}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                  /> */}
                  <TagsInputWrapper tags={tags} setTags={setTags} />
                  {Error?.tags && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.tags}
                     </small>
                  )}
               </div>
            </div>

            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Short Description
                  </div>
                  <textarea
                     ref={s_desc}
                     className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] rounded-[10px] w-full h-[155px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     placeholder="Write here..."
                     defaultValue={Product?.s_desc}
                  />
                  {Error?.s_desc && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.s_desc}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Contact
                  </div>

                  <Input
                     type="text"
                     inputRef={contact}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Phone No."
                     defaultValue={Product?.contact}
                  />
                  {Error?.contact && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.contact}
                     </small>
                  )}
               </div>
            </div>
            {/* TODO: working area start */}
            <div className="bg-[#ffffff] rounded-[20px] w-full h-auto shadow-admin-card p-5">
               <div className="flex justify-between items-center mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                     Theme tamplate
                  </div>
                  <Button type="button">
                     <div className="w-4 h-4">
                        <EyeSvgIcon />
                     </div>
                  </Button>
               </div>
               <SelectArea
                  selectedOption={1}
                  options={ProductOrganisation}
                  onHandleSelectValue={(value: string) => setStatus(value)} // You should pass a function
               />
            </div>
            {/* TODO: working area end */}
            <div className="flex flex-row justify-end pt-5">
               <Button
                  type="button"
                  className={` ${
                     loading === true
                        ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                        : "bg-[#f0f0f0] text-[#515151]"
                  } uppercase text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
                  onClick={() => updateProduct(String(id))}
               >
                  Update
               </Button>
            </div>
         </div>
      </div>
   );
}
