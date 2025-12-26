"use client";
import { SvgArrowIcon, SvgSearchIcon } from "@/components/SvgIcons";
import React, {
   ChangeEvent,
   Fragment,
   useEffect,
   useRef,
   useState,
} from "react";
import CommonContext from "../../features/CommonContext";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import dynamic from "next/dynamic";
import { useScreenMediaQuery } from "@/components/react/media-query";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const FilterCategoryBtn = dynamic(() => import("./FilterCategoryBtn"), {
   ssr: false,
});

type Category = {
   id: string;
   name: string;
   slug: string;
};

export default function HeroInputSearch() {
   const { xsScreen } = useScreenMediaQuery();
   const { selectedCategory, setSelectedCategory, setSearch, onHandleSearch } =
      CommonContext();
   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const [width, setWidth] = useState(0);
   const elementRef = useRef<HTMLButtonElement | null>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setIsDropdownOpen(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   useEffect(() => {
      const updateWidth = () => {
         if (elementRef.current) {
            setWidth(elementRef.current?.offsetWidth || 0); // No need for `Number` cast
         }
      };

      const resizeObserver = new ResizeObserver(() => {
         updateWidth();
      });

      if (elementRef.current) {
         resizeObserver.observe(elementRef.current);
         updateWidth(); // Initial width update
      }

      return () => {
         resizeObserver.disconnect();
      };
   }, [width]);

   const { categories = [] } = useSelector(
      (state: RootState) => state.userend.home
   );

   const Categories: Category[] = categories;

   return (
      <Fragment>
         <div className="grid grid-cols-12 z-10 pt-12 w-full">
            <div className="xl:hidden lg:block hidden col-span-1"></div>
            <div
               ref={dropdownRef}
               className="relative lg:col-span-10 col-span-12"
            >
               <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                  <Button
                     type="button"
                     buttonRef={elementRef}
                     className="rounded-[20px] xs:px-5 xs3:px-4 px-3 h-[43px] flex items-center justify-center"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 25%,rgba(85, 118, 179, 1) 92.5000011920929%)",
                     }}
                     onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                     }}
                  >
                     <div className="text-[#ffffff] capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                        {selectedCategory?.name}
                     </div>

                     <div className="w-3.5 h-3.5 text-[#ffffff] ps-1">
                        <SvgArrowIcon />
                     </div>
                  </Button>
               </div>
               {isDropdownOpen === true && (
                  <FilterCategoryBtn
                     categories={Categories}
                     selectedCategory={selectedCategory}
                     setSelectedCategory={setSelectedCategory}
                     setIsDropdownOpen={setIsDropdownOpen}
                  />
               )}
               <Input
                  type="search"
                  className={`w-full block h-[59px] py-4 text-sm text-gray-900 bg-[#ffffff] rounded-[30px] border-solid border-[#4285f4] border shadow-hero-search focus:ring-0 focus:border-[#4285f4]`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     setSearch(e.target.value)
                  }
                  onClick={() => setIsDropdownOpen(false)}
                  placeholder="What you need..."
                  style={{
                     padding: `0 ${xsScreen ? width + 32 : width + 20}px`,
                  }}
               />
               <Button
                  type="button"
                  className=" absolute inset-y-0 end-0 flex items-center pe-3"
                  onClick={onHandleSearch}
               >
                  <div className="">
                     <div
                        className="rounded-[20px] xs:w-[122px] xs3:w-[61px] w-[51px] h-[46px] py-3 flex items-center justify-center"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 25%,rgba(85, 118, 179, 1) 92.5000011920929%)",
                        }}
                     >
                        <div className=" h-5 w-5 text-white overflow-visible">
                           <SvgSearchIcon />
                        </div>
                        <div className="xs:block hidden ps-3 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                           Search
                        </div>
                     </div>
                  </div>
               </Button>
            </div>
            <div className="xl:hidden lg:block hidden col-span-1"></div>
         </div>
      </Fragment>
   );
}
