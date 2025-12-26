"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
   getCategories,
   getSubCategory,
   updateSubCategory,
} from "@/admin/sub_categories/featrues/SubCategoryAcion";
import TextEditor, { TextEditorHandle } from "@admin/components/TextEditor";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"));
const Button = dynamic(() => import("@/components/Button"));
const SelectArea = dynamic(() => import("@admin/components/select"));

interface SubCategoryError {
   name?: string;
   desc?: any;
   status?: any;
}

interface SubCategory {
   name?: string;
   category_id?: string;
   desc?: any;
   status?: any;
}

type Props = {
   params: {
      id: string;
   };
};

export default function CategoryUpdateForm({ params }: Props) {
   const { id } = params;
   const name = useRef<HTMLInputElement>(null);
   const [categoryId, setCategoryId] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const [status, setStatus] = useState<string>("active");
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getCategories());
      dispatch(getSubCategory({ id, setCategoryId, setStatus }));
   }, [dispatch]);
   const onHandleCreateCategory = () => {
      const payload = {
         name: name.current?.value!,
         category_id: String(categoryId),
         desc: desc.current?.getEditorValue(),
         status: status,
      };
      dispatch(updateSubCategory({ payload: payload, id, router }));
   };
   const {
      categories,
      sub_category,
      loading: storeLoading,
      error,
   } = useSelector((state: AdminState) => state.admin.sub_category);

   let options: any = [];
   categories?.length > 0 &&
      categories?.map((item: any) => {
         options.push({
            name: item.name,
            value: item.id,
         });
      });

   useEffect(() => {
      setLoading(storeLoading);
   }, [storeLoading]);

   const subCategory = sub_category as SubCategory | undefined;
   const Error = error as SubCategoryError;
   return (
      <Fragment>
         <AdminCard className="!bg-[#ffffff] !rounded-[20px] mb-7">
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Name
               </div>
               <Input
                  type="text"
                  inputRef={name}
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                  placeholder="Category Name"
                  defaultValue={subCategory?.name}
               />
               {Error?.name && (
                  <small className="text-red-500 text-xs mt-1">
                     {Error.name}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <SelectArea
                  label="Category Type"
                  selectedOption={Number(subCategory?.category_id)}
                  options={options}
                  onHandleSelectValue={(value) => setCategoryId(value)} // You should pass a function
               />
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Description
               </div>
               <TextEditor
                  ref={desc}
                  initialValue={subCategory?.desc}
                  placeholder="Description write ..."
               />
               {Error?.desc && (
                  <small className="text-red-500 text-xs mt-1">
                     {Error.desc}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Status
               </div>
               <div className="">
                  <ToggleSwitch
                     checked={status === "active" ? true : false}
                     onChange={(value: any) =>
                        setStatus(value === true ? "active" : "inactive")
                     }
                  />
               </div>
               {Error?.status && (
                  <small className="text-red-500 text-xs mt-1">
                     {Error.status}
                  </small>
               )}
            </div>
         </AdminCard>

         <div className=" flex justify-end items-center">
            <Button
               type="button"
               className={` ${
                  loading === true
                     ? "bg-[#ffeded] hover:bg-blue-400 text-[#919191] hover:text-[#e9e9e9]"
                     : "bg-[#f0f0f0] hover:bg-blue-gradient text-[#515151] hover:text-white"
               } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => onHandleCreateCategory()}
            >
               Update
            </Button>
         </div>
      </Fragment>
   );
}
