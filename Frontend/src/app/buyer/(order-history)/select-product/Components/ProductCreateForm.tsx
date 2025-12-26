"use client";
import React, { useState } from "react";
import ProductCreateTable from "./ProductCreateTable";
import SearchEngineListing from "./SearchEngineListing";
import CheckBox from "@/components/Checkbox";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { EyeSvgIcon } from "@admin/components/SvgIcons";
import SelectArea from "@admin/components/select";
import MediaField from "./MediaField";
import TagsInputWrapper from "@admin/components/TagsInput";
import OrderHistoryContext from "../features/OrderHistoryContext";
import TextEditor from "@/app/buyer/components/TextEditor";
import { BuyerState } from "@/app/buyer/store";
import { useSelector } from "react-redux";

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
const Categories = [
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

interface Tag {
   id: string;
   text: string;
}

type FormError = {
   name?: string;
   desc: any;
   image: any;
   status: string;
   type: string;
   vendor: string;
   categoryId: string;
   tags: any;
};

export default function ProductCreateForm() {
   const {
      name,
      desc,
      image,
      showImage,
      setShowImage,
      status,
      setStatus,
      type,
      vendor,
      categoryId,
      setCategoryId,
      tags,
      setTags,
      addProductSelection,
   } = OrderHistoryContext();
   const { loading } = useSelector(
      (state: BuyerState) => state.buyer.orderHistoryProductSelection
   );
   // const Error = FormError
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
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Name"
                     inputRef={name}
                  />
                  {/* {Error?.name && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.name}
                     </small>
                  )} */}
               </div>

               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-[.20rem]">
                     Description
                  </div>
                  <TextEditor ref={desc} />
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>

               <MediaField
                  Error={Error}
                  image={image}
                  showImage={showImage}
                  setShowImage={setShowImage}
               />
            </div>

            <div>
               <ProductCreateTable />
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
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     inputRef={type}
                  />
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Vendor
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     inputRef={vendor}
                  />
               </div>
               <div className="mb-3">
                  <SelectArea
                     label="Category"
                     options={Categories}
                     onHandleSelectValue={(value: string) =>
                        setCategoryId(Number(value))
                     }
                  />
               </div>
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Tags
                  </div>
                  <TagsInputWrapper tags={tags} setTags={setTags} />
               </div>
            </div>

            <div className="flex flex-row justify-end">
               <Button
                  type="button"
                  className={` ${
                     loading === true
                        ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                        : "bg-[#f0f0f0] text-[#515151]"
                  } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
                  onClick={addProductSelection}
               >
                  Save & Changes
               </Button>
            </div>
         </div>
      </div>
   );
}
