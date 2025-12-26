"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

type City = {
   id: string; // City ID
   name: string;
   slug: string;
};

type Props = {
   selectedCityId: string | null;
   setSelectedCityId: any;
   onHandleCheckboxChange: (cityId: string, cityName: string) => void;
};

export default function FilterSupplierCities({
   selectedCityId,
   setSelectedCityId,
   onHandleCheckboxChange,
}: Props) {
   const { cities } = useSelector(
      (state: RootState) => state.userend.productSearch
   );
   const Cities: City[] = cities;

   const [searchTerm, setSearchTerm] = useState<string>("");
   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

   const filteredCities = Cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setDropdownOpen(e.target.value.length > 0); // Show dropdown if there's input
   };

   return (
      <div>
         <div
            className="bg-[rgba(255,255,255,0.50)] rounded-[14px] w-full p-4 3xs:mt-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
               Supplier Cities
            </div>
            <Input
               type="text"
               className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[11px] font-medium rounded-[10px] border-solid border-[#4285f4] border-[0.5px] w-full h-[26px]"
               placeholder="Search"
               onChange={handleInputChange} // Update input change handling
            />
            {dropdownOpen && ( // Show dropdown if open
               <div className="pt-3 space-y-3">
                  {filteredCities.length > 0 ? (
                     filteredCities.map((city: City, index: number) => (
                        <div key={index} className="flex flex-row gap-2">
                           <Input
                              type="checkbox"
                              className="rounded border-solid border-[#4285f4] border-[0.5px] w-3.5 h-3.5"
                              checked={selectedCityId === city.id} // Check if this city ID is selected
                              onChange={() =>
                                 onHandleCheckboxChange(city?.id, city?.name)
                              } // Handle checkbox change
                           />
                           <div className="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal relative w-[33px] h-[13px]">
                              {city?.name}
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
                        No Supplier Cities
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}
