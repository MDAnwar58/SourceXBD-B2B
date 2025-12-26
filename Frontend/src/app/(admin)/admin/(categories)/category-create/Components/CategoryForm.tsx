"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import TextEditor, { TextEditorHandle } from "@admin/components/TextEditor";
import { createCategory } from "@admin/categories/featrues/CategoryAcion";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const SelectArea = dynamic(() => import("@admin/components/select"), {
   ssr: false,
});
const ImageInput = dynamic(() => import("@admin/components/ImageInput"), {
   ssr: false,
});

interface CategoryError {
   name?: string;
   category_type_id: string;
   images: any;
   desc?: any;
   status?: any;
}

export default function CategoryForm() {
   const name = useRef<HTMLInputElement>(null);
   const [categoryTypeId, setCategoryTypeId] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const [status, setStatus] = useState<string>("active");
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string>("");
   const imageRef = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const onHandleCreateCategory = () => {
      const formData = new FormData();
      formData.append("name", name.current?.value!);
      formData.append("category_type_id", categoryTypeId);
      formData.append("images", image);
      formData.append("desc", desc.current?.getEditorValue()!);
      formData.append("status", status);

      dispatch(createCategory({ formData, router }));
   };
   const {
      category_types,
      loading: storeLoading,
      error,
   } = useSelector((state: AdminState) => state.admin.category);

   let options: any = [];
   category_types?.length > 0 &&
      category_types?.map((item: any) => {
         options.push({
            name: item.name,
            value: item.id,
         });
      });

   useEffect(() => {
      setLoading(storeLoading);
   }, [storeLoading]);
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
               />
               {(error as CategoryError)?.name && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryError).name}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <SelectArea
                  label="Category Type"
                  options={options}
                  onHandleSelectValue={(value) => setCategoryTypeId(value)} // You should pass a function
               />
               {(error as CategoryError)?.category_type_id && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryError).category_type_id}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <ImageInput
                  image={image}
                  setImage={setImage}
                  imageRef={imageRef}
               />
               {(error as CategoryError)?.images && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryError).images}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Description
               </div>
               <TextEditor ref={desc} placeholder="Description write ..." />
               {(error as CategoryError)?.desc && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryError).desc}
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
               {(error as CategoryError)?.status && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryError).status}
                  </small>
               )}
            </div>
            {/* <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  URL
               </div>

               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                  placeholder="Category Name"
                  defaultValue="https://www.loremipsum.com"
               />
            </div> */}
         </AdminCard>

         {/* <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[14px] w-[181px] h-[42px] flex justify-center items-center gap-x-2">
               <div className="w-6 h-6 text-white">
                  <DashboardEditSvgIcon />
               </div>
               <div>Edit Page</div>
            </div> */}

         {/* <div className=" capitalize bg-[#f0f0f0] hover:bg-blue-gradient text-[#515151] hover:text-white text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear">
                  Delete
               </div> */}
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
               Save
            </Button>
         </div>
      </Fragment>
   );
}
