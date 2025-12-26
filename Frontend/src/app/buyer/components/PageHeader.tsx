"use client";
import React, {
   ChangeEvent,
   ChangeEventHandler,
   LegacyRef,
   ReactNode,
   useEffect,
   useRef,
   useState,
} from "react";
import { DashboardQucikActionSearchSvgIcon, FilterSvgIcon } from "./SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

type Props = {
   icon?: ReactNode;
   title?: string | undefined;
   titleClassName?: string | undefined;
   searchBox?: boolean; // type defined here
   onHandleSearch?: ChangeEventHandler<HTMLInputElement> | undefined;
   onHandleFilterbtn?: (searchValue: string) => void | undefined;
   searchRef?: LegacyRef<HTMLInputElement> | undefined;
};

export default function PageHeader({
   icon,
   title,
   titleClassName,
   searchBox = true,
   onHandleFilterbtn,
   searchRef,
}: Props) {
   const [searchAndFilter, setSearchAndFilter] = useState<boolean>(false);
   const [searchValue, setSearchValue] = useState<string>("");
   const dropdownRef = useRef<HTMLDivElement>(null);
   // Close dropdown when clicking outside
   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setSearchAndFilter(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [dropdownRef]);

   const searchAndFilterBtnHandle = () => {
      setSearchAndFilter((prev) => !prev);
   };

   const searchAndFilterBtnHideAndShow =
      searchAndFilter === false
         ? "lg:flex hidden"
         : "flex absolute top-14 end-0 bg-gray-50 p-2 drop-shadow-sm border border-gray-300 rounded-2xl";

   return (
      <div className="bg-[rgba(255,255,255,0.70)] rounded-[20px]  py-[1.45rem] xs3:px-6 px-4 flex items-center justify-between xs5:gap-x-6 gap-x-0 shadow-admin-card mb-7">
         <div className="flex items-center xs3:gap-x-6 xs5:gap-x-3 xs6:gap-x-2 gap-x-2">
            <div className="bg-blue-200/60 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-[100%] w-[46px] h-[46px] flex items-center justify-center">
               {icon}
            </div>
            <div
               className={`text-[#2f2f2f] text-left font-['Lato-Bold',_sans-serif] text-xl font-bold ${titleClassName}`}
            >
               {title}
            </div>
         </div>
         {searchBox === true ? (
            <div className="relative" ref={dropdownRef}>
               <Button
                  type="button"
                  className=" lg:hidden block bg-[#DBEBFE] text-gray-700 drop-shadow-sm p-2 rounded-lg"
                  onClick={searchAndFilterBtnHandle}
               >
                  <div className="w-6 h-6">
                     <DashboardQucikActionSearchSvgIcon />
                  </div>
               </Button>

               <div className={`${searchAndFilterBtnHideAndShow} gap-x-4`}>
                  <div className="relative">
                     <Input
                        type="search"
                        inputRef={searchRef}
                        className="bg-[#ffffff] text-[#2f2f2f] border-none font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-2xl w-[153px] h-10 ps-8"
                        placeholder="Search"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           setSearchValue(e.target.value);
                           // onHandleSearch;
                        }} // Ensure onHandleSearch is passed here
                        defaultValue={searchValue}
                     />

                     <div className="w-4 h-4 absolute top-[50%] left-2 transform-translate-y-middle">
                        <DashboardQucikActionSearchSvgIcon />
                     </div>
                  </div>
                  <Button
                     className="bg-[#98b0ee] rounded-2xl py-2 px-[0.73rem]"
                     style={{
                        boxShadow:
                           "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     }}
                     onClick={() => onHandleFilterbtn?.(searchValue)}
                  >
                     <div className="w-6 h-6">
                        <FilterSvgIcon />
                     </div>
                  </Button>
               </div>
            </div>
         ) : null}
      </div>
   );
}
