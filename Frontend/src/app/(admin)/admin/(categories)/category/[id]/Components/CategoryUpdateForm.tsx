"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import TextEditor, { TextEditorHandle } from "@admin/components/TextEditor";
import {
   getCategory,
   getCategoryTypes,
   updateCategory,
} from "@admin/categories/featrues/CategoryAcion";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const ImageInput = dynamic(() => import("@admin/components/ImageInput"), {
   ssr: false,
});
const SelectArea = dynamic(() => import("@admin/components/select"), {
   ssr: false,
});

interface CategoryError {
   name?: string;
   desc?: any;
   status?: any;
}

interface Category {
   name?: string;
   category_type_id?: string;
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
   const [categoryTypeId, setCategoryTypeId] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const [status, setStatus] = useState<string>("active");
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string>("");
   const imageRef = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getCategoryTypes());
      dispatch(getCategory({ id, setCategoryTypeId, setImage, setStatus }));
   }, [dispatch]);
   const onHandleUpdateCategory = () => {
      const formData = new FormData();
      formData.append("name", name.current?.value!);
      formData.append("category_type_id", categoryTypeId);
      formData.append("image", image);
      formData.append("desc", desc.current?.getEditorValue()!);
      formData.append("status", status);
      dispatch(updateCategory({ id, formData, router }));
   };
   const {
      category_types,
      category,
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

   const Category = category as Category | undefined;

   // console.log(image);
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
                  defaultValue={Category?.name}
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
                  selectedOption={Number(Category?.category_type_id)}
                  options={options}
                  onHandleSelectValue={(value) => setCategoryTypeId(value)} // You should pass a function
               />
            </div>

            <div className="mb-3">
               <ImageInput
                  image={image}
                  setImage={setImage}
                  imageRef={imageRef}
               />
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Description
               </div>
               <TextEditor
                  ref={desc}
                  initialValue={Category?.desc}
                  placeholder="Description write ..."
               />
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
         </AdminCard>

         <div className=" flex justify-end items-center">
            <Button
               type="button"
               className={` ${
                  loading === true
                     ? "bg-[#ffeded] hover:bg-blue-400 text-[#919191] hover:text-[#e9e9e9]"
                     : "bg-[#f0f0f0] hover:bg-blue-gradient text-[#515151] hover:text-white"
               } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => onHandleUpdateCategory()}
            >
               Update
            </Button>
         </div>
      </Fragment>
   );
}
