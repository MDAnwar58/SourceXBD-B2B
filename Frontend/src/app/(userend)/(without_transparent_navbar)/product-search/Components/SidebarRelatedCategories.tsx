import React, { useEffect } from "react";

type Category = {
   id: string;
   name: string;
   slug: string;
};

type Props = {
   categories: Category[];
   categorySlug?: string;
   getProductsWithCategory: (categorySlug: string) => void;
};

export default function SidebarRelatedCategories({
   categories,
   categorySlug,
   getProductsWithCategory,
}: Props) {
   return (
      <div
         className="bg-[rgba(255,255,255,0.50)] rounded-[14px] w-full p-4"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium mb-2">
            Related Categories
         </div>
         <div className="lg:block grid 3md:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 3xs:grid-cols-3 xs4:grid-cols-2 grid-cols-1 lg:space-y-3 lg:gap-0 gap-3">
            {categories.length > 0 ? (
               categories.map((category: Category, index: number) => (
                  <div
                     key={index}
                     className={` cursor-pointer bg-[rgba(152,176,238,0.05)] ${
                        category?.slug === categorySlug
                           ? "text-[#98b0ee]"
                           : "text-[#515151] hover:text-[#98b0ee]"
                     } text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] w-full h-[35px] flex items-center px-3 transition-all duration-100 ease-linear`}
                     style={{
                        boxShadow:
                           "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                     }}
                     onClick={() => getProductsWithCategory(category?.slug)}
                  >
                     {category?.name}
                  </div>
               ))
            ) : (
               <div
                  // 515151
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] w-full h-[35px] flex items-center px-3"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               >
                  Data not found
               </div>
            )}
         </div>
      </div>
   );
}
