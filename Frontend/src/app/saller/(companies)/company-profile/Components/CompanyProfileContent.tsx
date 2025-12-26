"use client";
import React, { useEffect } from "react";
import { AppDispatch, SallerState } from "@/saller/store";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyProfile } from "@/saller/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const CompanyInfo = dynamic(() => import("./CompanyInfo"), {
   ssr: false,
});
const CompanyContactDetails = dynamic(() => import("./CompanyContactDetails"), {
   ssr: false,
});
const Categories = dynamic(() => import("./Categories"), {
   ssr: false,
});
const TrustPoints = dynamic(() => import("./TrustPoints"), {
   ssr: false,
});
const TopSalingProductsTable = dynamic(
   () => import("./TopSalingProductsTable"),
   {
      ssr: false,
   }
);
const AllProductsCard = dynamic(() => import("./AllProductsCard"), {
   ssr: false,
});
const TotalSaleCard = dynamic(() => import("./TotalSaleCard"), {
   ssr: false,
});
const CompanyDensity = dynamic(() => import("./CompanyDensity"), {
   ssr: false,
});
const Geolocation = dynamic(() => import("./Geolocation"), {
   ssr: false,
});

type Documents = {
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: string;
   user_id: number;
};

type City = {
   country_id: number;
   desc: string;
   id: number;
   map: string;
   name: string;
   slug: string;
   status: string;
};

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

type Company = {
   address: string;
   city_id: number;
   contact: string;
   country: Country;
   desc: any;
   documents: any;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: CategoryType;
   user_id: string;
   city: City;
};

type User = {
   company: Company;
   email: string;
   id: number;
   name: string;
   phone: string;
   profile: string;
   role: string;
   status: string;
};

export default function CompanyProfileContent() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getCompanyProfile());
   }, [dispatch]);

   const { user = {} } = useSelector(
      (state: SallerState) => state.saller.company
   );
   const User = user as User;
   const Company = User?.company as Company;

   const CompanyInformation = {
      name: Company?.name,
      image:
         Company?.logo !== undefined && Company?.logo !== null
            ? Company?.logo
            : "",
      review: Company?.review,
      points: Company?.points,
      description: Company?.desc,
   };
   const ContactDetails: any = {
      email: User?.email,
      phone: Company?.contact,
      industry: Company?.industry,
      city: Company?.city,
      country: Company?.country !== undefined ? Company?.country : null,
   };
   const CompanyTrust = {
      points: Company?.trust_point,
   };

   const CompanyType = Company?.type as CategoryType;

   return (
      <div className=" 3xs:grid grid-cols-12 gap-x-9">
         <div className="6lg:col-span-4 lg:col-span-5 col-span-12 lg:mb-0 mb-7">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
               <CompanyInfo CompanyInformation={CompanyInformation} />
               <CompanyContactDetails ContactDetails={ContactDetails} />
               <Categories CompanyType={CompanyType} />
               <TrustPoints CompanyTrust={CompanyTrust} />
            </div>
         </div>
         <div className="6lg:col-span-8 lg:col-span-7 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
               {/* <TopSalingProductsTable /> */}
               <div className="  6lg:grid grid-cols-12 gap-9">
                  <AllProductsCard />
                  <TotalSaleCard />
                  <CompanyDensity />
                  <Geolocation />
               </div>
            </div>
         </div>
      </div>
   );
}
