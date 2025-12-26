"use client";
import React, { useEffect, useRef, useState } from "react";
import { CameraSvgIcon } from "@/saller/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import CompanyContext from "@/saller/companies/features/CompanyContext";
import { AppDispatch } from "@/saller/store";
import { getCompanyProfile } from "@/saller/companies/features/CompanyAction";
import TextEditor from "@/saller/components/TextEditor";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
import CategoryTypesSelection from "./CategoryTypesSelection";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const SelectArea = dynamic(() => import("@admin/components/select"), {
   ssr: false,
});
const MediaField = dynamic(() => import("./MediaField"), {
   ssr: false,
});
const SearchCountryAutoComplete = dynamic(
   () => import("./SearchCountryAutoComplete"),
   {
      ssr: false,
   }
);
const SearchCityAutoComplete = dynamic(
   () => import("./SearchCityAutoComplete"),
   {
      ssr: false,
   }
);

const options = [
   {
      name: "Active",
      bgColor: "bg-[#90ff38]",
      value: 1,
   },
   {
      name: "Inactive",
      bgColor: "bg-red-300",
      value: 2,
   },
   {
      name: "Upcomming",
      bgColor: "bg-yellow-500",
      value: 3,
   },
];

type Country = {
   id: number;
   iso: string;
   iso3: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type CompanyCity = {
   country_id: number;
   created_at: string;
   id: number;
   map: string;
   name: string;
   slug: string;
};

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

type Company = {
   address: string;
   city: CompanyCity;
   city_id: number;
   contact: string;
   country: Country;
   country_id: number;
   created_at: string;
   desc: string | null;
   documents: Array<any[]>;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: CategoryType;
   updated_at: string;
   user_id: number;
};

type User = {
   company: Company;
   created_at: string;
   email: string | any;
   email_verified_at: string | null;
   id: number;
   image: Array<any[]>;
   name: string;
   phone: string;
   profile: any;
   role: string;
   status: string;
   suer_social_links: any[];
   updated_at: string;
};

interface ProductFormError {
   user_id: number;
   name: string;
   c_name: string;
   category_type_id: number;
   city_id: string;
   logo: string;
   country: string;
   industry: string;
   address: string;
   contact: string;
   type: string;
   trust_point: number;
   review: number;
   desc: any;
   status: string;
   email: number;
   points: number;
}

type City = {
   id: number;
   name: string;
   slug: string;
   country_id: number;
};

export default function EditCompanyInformation() {
   const {
      getCategoryTypes,
      getCountries,
      getCities,
      industry,
      desc,
      logo,
      status,
      setStatus,
      name,
      c_name,
      type,
      email,
      contact,
      country,
      setCountry,
      city,
      setCity,
      address,
      categoryTypeId,
      setCategoryTypeId,
      formRef,
      selectedCategoryTypeIds,
      setSelectedCategoryTypeIds,
      onHandleCategoryTypeSelect,
      updateCompanyProfile,
   } = CompanyContext();
   const localUrl = LocalUrl();
   const [description, setDescription] = useState<any>("");
   const [productImages, setProductImages] = useState<object[]>([]);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getCompanyProfile());
      getCategoryTypes();
      getCountries();
      getCities();
   }, [dispatch]);

   const { category_types, countries, cities, loading, error, submit } =
      useSelector((state: SallerState) => state.saller.company);

   useEffect(() => {
      if (submit === true) {
         formRef.current?.reset();
         setStatus("active");
         setCategoryTypeId("");
         setProductImages([]);
         desc.current?.resetEditorValue();
      }
   }, [submit]);

   const Error = error as ProductFormError | null;

   const Country = country as any;
   const Cities = cities.filter((item: any) => item.country_id === Country?.id);

   const { user } = useSelector((state: SallerState) => state.saller.company);
   const User = user as User;

   useEffect(() => {
      if (User?.company?.desc !== undefined) {
         setDescription(User?.company?.desc);
      }
      if (User?.company?.logo) {
         const logoUrl: any = `${localUrl}${User.company.logo}`;
         setProductImages([logoUrl]);
      }
      if (User?.company?.type?.id !== undefined) {
         setCategoryTypeId(String(User?.company?.type?.id));
      }
      if (User?.company?.type !== undefined) {
         setCategoryTypeId(String(User?.company?.type?.id));
      }
      if (User?.company?.status !== undefined) {
         setStatus(User?.company?.status);
      }
      if (
         User?.company?.country !== undefined &&
         User?.company?.country !== null
      ) {
         const country: any = {
            id: User?.company?.country?.id,
            iso: User?.company?.country?.iso,
            name: User?.company?.country?.nicename,
            iso3: User?.company?.country?.iso3,
         };
         setCountry(country);
      }
      if (User?.company?.city !== undefined && User?.company?.city !== null) {
         const city: any = {
            id: User?.company?.city?.id,
            name: User?.company?.city?.name,
            slug: User?.company?.city?.slug,
            country_id: User?.company?.city?.country_id,
         };
         setCity(city);
      }
   }, [User, localUrl]);

   let categoryTypesOptions: any[] = [];
   category_types?.map((item: any) => {
      categoryTypesOptions.push({
         value: item.id,
         name: item.name,
      });
   });

   return (
      <form ref={formRef} className="xs:grid grid-cols-12 gap-7">
         <div className=" 3lg:col-span-8 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5 mb-7">
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-[.20rem]">
                     Indutry
                  </div>

                  <Input
                     type="text"
                     inputRef={industry}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="Indutry..."
                     defaultValue={User?.company?.industry}
                  />
                  {Error?.industry && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.industry}
                     </small>
                  )}
               </div>

               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-[.20rem]">
                     Description
                  </div>
                  <TextEditor
                     ref={desc}
                     initialValue={description}
                     placeholder=" "
                  />

                  {Error?.desc && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.desc}
                     </small>
                  )}
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
               </div>

               <MediaField
                  image={logo}
                  Error={Error}
                  label="LOGO"
                  icon={
                     <>
                        <div className="w-7 h-7 text-[#515151] mx-auto">
                           <CameraSvgIcon />
                        </div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pt-1">
                           Change LOGO
                        </div>
                     </>
                  }
                  productImages={productImages}
                  setProductImages={setProductImages}
               />

               {/* <CategoryTypesSelection
                  selectedCategoryTypeIds={selectedCategoryTypeIds}
                  onHandleCategoryTypeSelect={onHandleCategoryTypeSelect}
               /> */}

               <SelectArea
                  label="Category Type"
                  selectedOption={Number(categoryTypeId)}
                  options={categoryTypesOptions}
                  onHandleSelectValue={(value: string) =>
                     setCategoryTypeId(value)
                  }
               />
            </div>
         </div>
         <div className=" 3lg:col-span-4 col-span-12">
            {/* <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <SelectArea
                  label="Status"
                  selectedOption={
                     status === "active" ? 1 : status === "inactive" ? 2 : 3
                  }
                  options={options}
                  onHandleSelectValue={(value: string) => {
                     if (Number(value) === 1) {
                        setStatus("active");
                     } else if (Number(value) === 2) {
                        setStatus("inactive");
                     } else {
                        setStatus("upcomming");
                     }
                  }} // You should pass a function
               />

               {Error?.status && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.status}
                  </small>
               )}
            </div> */}

            <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5 mb-7">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-3">
                  Company Information
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Company Name
                  </div>
                  <Input
                     type="text"
                     inputRef={c_name}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={User?.company?.name}
                  />
                  {Error?.c_name && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.c_name}
                     </small>
                  )}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-3 mt-5">
                  Contact Information
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Email
                  </div>
                  <Input
                     type="email"
                     inputRef={email}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={User?.email}
                  />
                  {Error?.email && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.email}
                     </small>
                  )}
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Number
                  </div>
                  <Input
                     type="text"
                     inputRef={contact}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={User?.company?.contact}
                  />
                  {Error?.contact && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.contact}
                     </small>
                  )}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-3 mt-5">
                  Location
               </div>

               <div className="mb-3">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Country
                  </div>
                  <SearchCountryAutoComplete
                     items={countries}
                     country={country}
                     setCountry={setCountry}
                     placeholder="Select Country"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                  />
                  {Error?.country && (
                     <small className="text-red-500 text-xs font-medium">
                        {Error.country}
                     </small>
                  )}
               </div>
               <div className="mb-3">
                  <div className="flex flex-row gap-3">
                     <div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                           City
                        </div>
                        <SearchCityAutoComplete
                           items={Cities}
                           city={city}
                           setCity={setCity}
                           placeholder="Select City"
                           className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                        />
                        {Error?.city_id && (
                           <small className="text-red-500 text-xs font-medium">
                              {Error.city_id}
                           </small>
                        )}
                     </div>
                  </div>
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                     Address
                  </div>
                  <Input
                     type="text"
                     inputRef={address}
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[10px] w-full h-[30px] shadow-admin-card border-none ring-0 focus:ring-0 px-5"
                     defaultValue={User?.company?.address}
                  />
                  {Error?.address && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {Error.address}
                     </small>
                  )}
               </div>
            </div>
            <div className="flex flex-row justify-end pt-5">
               <Button
                  type="button"
                  className={` ${
                     loading === true
                        ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                        : "bg-[#f0f0f0] text-[#515151]"
                  } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
                  onClick={() => updateCompanyProfile()}
               >
                  Save & Changes
               </Button>
            </div>
         </div>
      </form>
   );
}
