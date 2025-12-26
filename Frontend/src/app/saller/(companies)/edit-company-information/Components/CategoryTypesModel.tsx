"use client";
import { CrosSvgIcon } from "@/app/saller/components/SvgIcons";
import { SallerState } from "@/app/saller/store";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
   selectedCategoryTypeIds: any[];
   onHandleCategoryTypeSelect: (CategoryType: any) => void;
   isOpenModal: boolean;
   setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
   category_types: any[];
};

export default function CategoryTypesModel({
   selectedCategoryTypeIds,
   onHandleCategoryTypeSelect,
   isOpenModal,
   setIsOpenModal,
   category_types,
}: Props) {
   const [categoryTypes, setCategoryTypes] = useState<any[]>([]);

   useEffect(() => {
      if (category_types?.length > 0) {
         const categoryTypesOptions = category_types?.map((item: any) => ({
            id: item.id,
            name: item.name,
         }));
         setCategoryTypes(categoryTypesOptions);
      }
   }, [category_types]);

   return (
      <>
         <div
            className={`${isOpenModal === true ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
         >
            <div className="relative p-4 w-full max-w-sm max-h-full">
               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Select Category Types
                     </h3>
                     <Button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsOpenModal(false)}
                     >
                        <div className="w-5 h-5">
                           <CrosSvgIcon />
                        </div>
                        <span className="sr-only">Close modal</span>
                     </Button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 md:p-5 space-y-4">
                     <div className="h-60 overflow-y-auto text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <div className="flex flex-wrap gap-2 pt-3">
                           {categoryTypes?.length > 0 ? (
                              categoryTypes.map((categoryType, i) => (
                                 <div
                                    key={i + 1}
                                    onClick={() =>
                                       onHandleCategoryTypeSelect(
                                          categoryType?.id
                                       )
                                    }
                                 >
                                    <div
                                       className={` ${
                                          selectedCategoryTypeIds.includes(
                                             categoryType?.id
                                          )
                                             ? "bg-blue-400 text-white"
                                             : "bg-[#eeeeee] text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-150 ease-linear"
                                       } cursor-pointer text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold rounded-lg w-auto py-[0.35rem] px-5 flex justify-center items-center`}
                                    >
                                       {categoryType?.name}
                                    </div>
                                 </div>
                              ))
                           ) : (
                              <div className="  text-gray-600 text-center font-['Raleway-Bold',_sans-serif] text-xl font-bold rounded-lg w-full py-3">
                                 Categories not found
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex items-center justify-end gap-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                     <Button
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsOpenModal(false)}
                     >
                        Close
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         {isOpenModal === true ? (
            <div className="bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-lg fixed inset-0 z-[55] transition-all duration-300 ease-linear" />
         ) : null}
      </>
   );
}
