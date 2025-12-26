"use client";
import React, { useEffect, useRef } from "react";
import { EyeSvgIcon } from "@admin/components/SvgIcons";
import ProductContext from "../../featrues/ProductContext";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
import TextEditor from "@admin/components/TextEditor";
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const SelectArea = dynamic(() => import("@admin/components/select"), {
   ssr: false,
});
const MediaField = dynamic(() => import("./MediaField"), { ssr: false });
const TagsInputWrapper = dynamic(() => import("@admin/components/TagsInput"), {
   ssr: false,
});

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

interface ProductFormError {
   name: string;
   desc: any;
   spacification: any;
   min_order: number;
   discount_price: number;
   contact: number;
   title: any;
   price: any;
   files: any;
   status: any;
   type: any;
   vendor: any;
   category_id: any;
   sub_category_id: any;
   section: any;
   publish: any;
   user_id: any;
   tags: any;
   stock: any;
   rating_point: any;
}

export default function ProductCreateForm() {
   const {
      getCategories,
      getCubCategories,
      getSellers,
      name,
      desc,
      spacification,
      discount_price,
      min_order,
      contact,
      title,
      price,
      images,
      type,
      vendor,
      tags,
      setTags,
      stock,
      rating_point,
      setUserId,
      setCategoryId,
      setSubCategoryId,
      setStatus,
      setSection,
      setPublishing,
      publishing,
      createProduct,
   } = ProductContext();
   const market = useRef<any>(null);
   const saleChannel = useRef<any>(null);

   useEffect(() => {
      getCategories();
      getCubCategories();
      getSellers();
   }, []);

   const { categories, sub_categories, sellers, loading, error } = useSelector(
      (state: AdminState) => state.admin.product
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

   let sellersOptions: any = [];
   sellers?.length > 0 &&
      sellers?.map((item: any) => {
         sellersOptions.push({
            name: item.name,
            value: item.id,
         });
      });

   const Error = error as ProductFormError | null;

   const onHandlePublishingChange = (
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { value, checked } = e.target;
      if (checked) {
         setPublishing((prevPublishing): { name: string }[] => [
            ...prevPublishing,
            { name: value },
         ]);
      } else {
         setPublishing((prevPublishing): { name: string }[] =>
            prevPublishing.filter((item) => item.name !== value)
         );
      }
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

   return (
      <div className="xs:grid grid-cols-12 gap-7">
         <div className="2xl:col-span-9 3lg:col-span-8 col-span-12">
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
                     placeholder="Discount pirce"
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
                  />

                  {Error?.stock && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.stock}
                     </small>
                  )}
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Min Order
                  </div>
                  <Input
                     type="text"
                     inputRef={min_order}
                     className="bg-[rgba(152,176,238,0.05)]  shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="min. order"
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
                  <TextEditor ref={desc} placeholder="" />

                  {Error?.desc && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.desc}
                     </small>
                  )}
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-[.20rem]">
                     Specification
                  </div>
                  <TextEditor ref={spacification} placeholder="" />

                  {Error?.spacification && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.spacification}
                     </small>
                  )}
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>

               <MediaField images={images} Error={Error} />
            </div>
         </div>
         <div className="2xl:col-span-3 3lg:col-span-4 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <SelectArea
                  label="Status"
                  selectedOption={1}
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
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] px-3 shadow-admin-card flex items-center gap-x-2  cursor-pointer"
                     onClick={() => onHandleSalesChannelChange()}
                  >
                     <CheckBox
                        checkRef={saleChannel}
                        onChange={onHandleSalesChannelChange}
                        className="bg-[#4285f4] text-[#4285f4] focus:bg-[#4285f4] focus:text-[#4285f4] focus:ring-[#4285f4] border-none w-4 h-4"
                        defaultValue="Online store"
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
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] px-3 shadow-admin-card flex items-center gap-x-2 cursor-pointer"
                  >
                     <CheckBox
                        checkRef={market}
                        onChange={onHandleMarketChange}
                        className="bg-[#4285f4] text-[#4285f4] focus:bg-[#4285f4] focus:text-[#4285f4] focus:ring-[#4285f4] border-none w-4 h-4"
                        defaultValue={"Bangladesh"}
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
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5 text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
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
               {/* <div className="mb-3">
                  <SelectArea
                     label="Remark"
                     options={productRemarkOptions}
                     onHandleSelectValue={(value: string) => {
                        if (Number(value) === 1) {
                           setSection("tranding");
                        } else {
                           setSection("most popular");
                        }
                     }}
                  />
                  {Error?.section && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.section}
                     </small>
                  )}
               </div>*/}
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Rating Point
                  </div>
                  <Input
                     type="text"
                     inputRef={rating_point}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5 text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  />
                  {Error?.rating_point && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.rating_point}
                     </small>
                  )}
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Contact
                  </div>
                  <Input
                     type="text"
                     inputRef={contact}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5 text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  />
                  {Error?.contact && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.contact}
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
               <SelectArea
                  label="Sellar"
                  options={sellersOptions}
                  onHandleSelectValue={(value: string) => setUserId(value)} // You should pass a function
               />
               {Error?.user_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.user_id}
                  </small>
               )}
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
                  } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
                  onClick={() => createProduct()}
               >
                  Save & Changes
               </Button>
            </div>
         </div>
      </div>
   );
}
