"use client";
import Input from "@/components/Input";
import React, { use, useState } from "react";
import SallerGrid from "@/saller/components/saller-grid";
import { useDispatch, useSelector } from "react-redux";
import { SallerAuthState } from "@/saller/auth/store";
import SearchAutoComplete from "@/saller/auth/components/SearchAutoComplete";
import SearchCityAutoComplete from "@/saller/auth/components/SearchCityAutoComplete";
import { AppDispatch } from "@/saller/auth/store";
import { registerBecomeASupplier } from "@/saller/auth/features/SallerAuthAction";
import { useRouter } from "next/navigation";

type City = {
   id: number;
   name: string;
   slug: string;
   country_id: number;
};

type Country = {
   id: number;
   name: string;
   iso: string;
   iso3: string;
};

type Form = {
   company_name: string;
   first_name: string;
   last_name: string;
   phone_number: string;
   email: string;
   password: string;
   password_confirmation: string;
   country: string;
   city_id: string;
};

export default function VerifyBecomeASallerRegisterForm() {
   const [companyName, setCompanyName] = useState<string>("");
   const [firstName, setFirstName] = useState<string>("");
   const [lastName, setLastName] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
   const [country, setCountry] = useState<null>(null);
   const [city, setCity] = useState<null>(null);
   const [term, setTerm] = useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const onHandleRegisterBecomeASupplier = () => {
      const Country = country as any;
      const City = city as any;
      const payload = {
         company_name: companyName || "",
         first_name: firstName || "",
         last_name: lastName || "",
         phone_number: phoneNumber || "",
         email: email || "",
         password: password || "",
         password_confirmation: passwordConfirmation || "",
         country: Country?.name !== undefined ? String(Country?.name) : null,
         city_id: City?.id !== undefined ? Number(City?.id) : null,
      };
      dispatch(registerBecomeASupplier({ payload, router }));
   };

   const { countries, cities, error } = useSelector(
      (state: SallerAuthState) => state.saller_auth.register_become_a_supplier
   );

   const Country = country as any;
   const Cities = cities.filter(
      (item: City) => item.country_id === Country?.id
   );
   const errors = error as Form;

   return (
      <div className="w-full">
         <div>
            <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-[32px] leading-[117.46%] font-bold pb-3">
               Start selling on Lorem.com
            </div>
            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-[115.05%] font-normal pb-7">
               Get custom pricing plan and personalized business solutions from
               logo.com
            </div>

            <div className="pb-4">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                  Company Name
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                  placeholder="Type here"
                  onChange={(e): void => setCompanyName(e.target.value)}
                  value={companyName}
               />
               {errors.company_name && (
                  <small className="text-red-500 text-xs font-medium">
                     {errors.company_name}
                  </small>
               )}
            </div>

            <SallerGrid gridOne={true} className="grid-cols-2 gap-4">
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     First Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void => setFirstName(e.target.value)}
                     value={firstName}
                  />
                  {errors.first_name && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.first_name}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Last Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void => setLastName(e.target.value)}
                     value={lastName}
                  />
                  {errors.last_name && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.last_name}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Phone Number
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void => setPhoneNumber(e.target.value)}
                     value={phoneNumber}
                  />
                  {errors.phone_number && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.phone_number}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Email
                  </div>
                  <Input
                     type="email"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void => setEmail(e.target.value)}
                     value={email}
                  />
                  {errors.email && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.email}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Country
                  </div>
                  <SearchAutoComplete
                     items={countries}
                     country={country}
                     setCountry={setCountry}
                     placeholder="Select Country"
                  />
                  {errors.country && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.country}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     City
                  </div>

                  <SearchCityAutoComplete
                     items={Cities}
                     city={city}
                     setCity={setCity}
                     placeholder="Select City"
                  />
                  {errors.city_id && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.city_id}
                     </small>
                  )}
               </div>

               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Password
                  </div>
                  <Input
                     type="password"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void => setPassword(e.target.value)}
                     value={password}
                  />
                  {errors.password && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.password}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Password Confirmation
                  </div>
                  <Input
                     type="password"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none focus:ring-0 px-5"
                     placeholder="Type here"
                     onChange={(e): void =>
                        setPasswordConfirmation(e.target.value)
                     }
                     value={passwordConfirmation}
                  />
                  {errors.password_confirmation && (
                     <small className="text-red-500 text-xs font-medium">
                        {errors.password_confirmation}
                     </small>
                  )}
               </div>
            </SallerGrid>

            <div className="flex flex-row gap-3 mt-5">
               <Input
                  type="checkbox"
                  className="bg-[#f5f5f5] rounded-sm border-solid border-[#4285f4] border w-[18px] h-[18px]"
                  checked={term}
                  onChange={() => setTerm(!term)}
               />

               <div
                  className="cursor-pointer text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-4 font-normal relative"
                  onClick={() => setTerm(!term)}
               >
                  The event organizer may use the above information to use to
                  send communications about lorem ipsum
               </div>
            </div>

            <div
               className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base leading-[117.46%] font-bold rounded-[10px] h-[47px] 3xs:w-[455px] w-full flex justify-center items-center mt-7"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
               }}
               onClick={() => onHandleRegisterBecomeASupplier()}
            >
               Register Now
            </div>
         </div>
      </div>
   );
}
