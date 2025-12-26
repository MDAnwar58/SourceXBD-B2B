"use client";
import { SallerState } from "@/app/saller/store";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const CategoryTypesModel = dynamic(() => import("./CategoryTypesModel"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type CategoryType = {
   id: number;
   name: string;
};

type Props = {
   selectedCategoryTypeIds: any[];
   onHandleCategoryTypeSelect: (id: number) => void;
};

export default function CategoryTypesSelection({
   selectedCategoryTypeIds,
   onHandleCategoryTypeSelect,
}: Props) {
   const [categoryTypes, setCategoryTypes] = useState<any[]>([]);
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

   const { category_types = [] } = useSelector(
      (state: SallerState) => state.saller.company
   );
   const CategoryTypes: CategoryType[] | any[] = category_types;

   return (
      <>
         <div className="mb-3 pt-3">
            <Button
               type="button"
               className="py-2 px-7 rounded-2xl border border-blue-500 text-blue-500 hover:bg-blue-gradient hover:text-white transition-all duration-150 ease-linear"
               onClick={() => setIsOpenModal(true)}
            >
               Select Category Types
            </Button>

            <div
               className={`flex flex-wrap gap-2 ${
                  selectedCategoryTypeIds?.length > 0 ? "pt-3" : ""
               }`}
            >
               {CategoryTypes?.length > 0
                  ? CategoryTypes?.map((categoryType, i) => {
                       if (
                          selectedCategoryTypeIds?.includes(categoryType?.id)
                       ) {
                          return (
                             <div key={i}>
                                <div className="bg-[#eeeeee] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-auto py-[0.35rem] px-5 flex justify-center items-center">
                                   {categoryType?.name}
                                </div>
                             </div>
                          );
                       }
                    })
                  : null}
            </div>
         </div>
         <CategoryTypesModel
            selectedCategoryTypeIds={selectedCategoryTypeIds}
            onHandleCategoryTypeSelect={onHandleCategoryTypeSelect}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            category_types={CategoryTypes}
         />
      </>
   );
}
