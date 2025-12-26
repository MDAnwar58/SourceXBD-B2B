"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import TextEditor, { TextEditorHandle } from "@/buyer/components/TextEditor";
import { AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import {
   addProductRequest,
   getCategories,
} from "@/buyer/product-requests/features/ProductRequestAction";
import { BuyerState } from "@/app/buyer/store";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const SelectArea = dynamic(() => import("@/buyer/components/select"));
const AdminCard = dynamic(() => import("@/buyer/components/buyer-card"));

type Category = {
   name: string;
   id: string;
};

type CategoryError = {
   category_id: string;
   desc: string;
};

type Payload = {
   user_id: string;
   category_id: string;
   desc: any;
};

export default function ProductRequestForm() {
   const [categoryId, setCategoryId] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   const { productRequest, common } = useSelector(
      (state: BuyerState) => state.buyer
   );
   const { categoires, error, loading } = productRequest;
   const { user } = common;

   const categories = categoires;
   let categoriesOptions: any = [];
   categories?.length > 0 &&
      categories?.map((item: Category) => {
         categoriesOptions.push({
            name: item.name,
            value: item.id,
         });
      });

   const Error = error as CategoryError | null;

   const submitForm = () => {
      const UserId = user?.id ? user?.id : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const payload: Payload = {
         user_id: UserId,
         category_id: categoryId,
         desc: Desc,
      };
      dispatch(addProductRequest({ payload, router }));
   };

   return (
      <Fragment>
         <AdminCard className="!bg-[#ffffff] !rounded-[20px] mb-7">
            <div className="mb-3">
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
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Description
               </div>
               <TextEditor ref={desc} placeholder="Description write ..." />

               {Error?.desc && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.desc}
                  </small>
               )}
            </div>
         </AdminCard>

         <div className=" flex justify-end items-center">
            <Button
               type="button"
               className={` ${
                  loading === true ? "text-[#919191]/50" : " text-[#515151]"
               } bg-[#f0f0f0] capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={submitForm}
            >
               Save
            </Button>
         </div>
      </Fragment>
   );
}
