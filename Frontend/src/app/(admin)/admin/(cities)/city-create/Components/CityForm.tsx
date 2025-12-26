"use client";
import React, { Fragment, useEffect, useRef } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { CitySvgIcon } from "@admin/components/SvgIcons";
import { getCountries } from "@/admin/cities/featrues/CityAcion";
import CityContext from "../../featrues/CityContext";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"));
const SearchAutoComplete = dynamic(
   () => import("@admin/components/SearchAutoComplete")
);
const Button = dynamic(() => import("@/components/Button"));
const TextEditor = dynamic(() => import("@admin/components/TextEditor"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const ImageInput = dynamic(() => import("../../../components/ImageInput"));

const icon = (
   <div className="w-6 h-6 text-[#2F2F2F]">
      <CitySvgIcon />
   </div>
);

type Country = {
   id: number;
   iso: string;
   nicename: string;
};

interface City {
   name: string;
   slug: string;
   map: string;
   country_id: number | string;
   images: any;
   desc: any;
   status: string;
}

export default function CityForm() {
   const {
      name,
      map,
      country,
      setCountry,
      image,
      setImage,
      desc,
      status,
      setStatus,
      createCity,
   } = CityContext();
   const imageRef = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCountries());
   }, [dispatch]);

   const { countries, loading, error } = useSelector(
      (state: AdminState) => state?.admin.city
   );
   const Countries = countries as Country[];

   const Error = error as City | null;

   return (
      <Fragment>
         <PageHeader icon={icon} title="City Create" searchBox={false} />

         <AdminCard className="!bg-[#ffffff] !rounded-[20px]">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold w-[63px] pb-1">
                  City Name
               </div>
               <Input
                  type="text"
                  inputRef={name}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="City name"
               />
               {Error?.name && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.name}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold w-[63px] pb-1">
                  Country
               </div>
               <SearchAutoComplete
                  items={Countries}
                  country={country}
                  setCountry={setCountry}
               />
               {Error?.country_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.country_id}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold w-[63px] pb-1">
                  Map
               </div>
               <Input
                  type="text"
                  inputRef={map}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Map"
               />
               {Error?.map && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.map}
                  </small>
               )}
            </div>
            <div className="mb-0">
               <ImageInput
                  label="Image"
                  imageRef={imageRef}
                  image={image}
                  setImage={setImage}
               />
               {Error?.images && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.images}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pt-3 pb-1 w-[93px]">
                  Description
               </div>

               <TextEditor ref={desc} />

               {Error?.desc && (
                  <small className="text-red-500 text-[10px] font-semibold">
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
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.status}
                  </small>
               )}
            </div>
         </AdminCard>

         <div className="flex flex-row justify-end pt-5">
            <Button
               type="button"
               className={` ${
                  loading === true
                     ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                     : "bg-[#f0f0f0] text-[#515151]"
               } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => createCity()}
            >
               Save & Changes
            </Button>
         </div>
      </Fragment>
   );
}
