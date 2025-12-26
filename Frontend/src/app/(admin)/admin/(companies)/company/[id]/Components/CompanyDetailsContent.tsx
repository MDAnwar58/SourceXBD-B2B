"use client";
import React, { useEffect } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { getCompany } from "@/admin/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const CompanyInfo = dynamic(() => import("./CompanyInfo"), { ssr: false });
const CompanyContactDetails = dynamic(() => import("./CompanyContactDetails"), {
   ssr: false,
});
const Categories = dynamic(() => import("./Categories"), { ssr: false });
const TrustPoints = dynamic(() => import("./TrustPoints"), { ssr: false });
const AllProductsCard = dynamic(() => import("./AllProductsCard"), {
   ssr: false,
});
const TotalSaleCard = dynamic(() => import("./TotalSaleCard"), { ssr: false });
const CompanyDensity = dynamic(() => import("./CompanyDensity"), {
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

type User = {
   created_at: string;
   email: string;
   id: number;
   name: string;
   phone: string;
   role: string;
   status: string;
};

type CategoryType = {
   created_at: string;
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
   user: User;
};

type Props = {
   params: {
      id: number;
   };
};

export default function CompanyDetailsContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCompany({ id: params?.id }));
   }, [dispatch, params]);

   const { company = {} } = useSelector(
      (state: AdminState) => state.admin.company
   );
   const Company = company as Company;

   const CompanyInformation = {
      name: Company?.name ? Company?.name : "",
      image: Company?.logo !== undefined ? Company?.logo : "",
      review: Company?.review ? Company?.review : 0,
      points: Company?.points ? Company?.points : 0,
      description: Company?.desc ? Company?.desc : "",
   };

   const ContactDetails: any = {
      email: Company?.user?.email ? Company?.user?.email : "",
      phone: Company?.contact ? Company?.contact : "",
      industry: Company?.industry ? Company?.industry : "",
      city: Company?.city?.name ? Company?.city?.name : "",
      country: Company?.country?.nicename ? Company?.country?.nicename : "",
      iso: Company?.country?.iso ? Company?.country?.iso : "",
   };
   const CompanyTrust = {
      points: Company?.trust_point,
   };

   const category: any = {
      type: Company?.type?.name !== undefined ? Company?.type?.name : "",
   };

   return (
      <div className=" 3xs:grid grid-cols-12 gap-x-9">
         <div className="6lg:col-span-4 lg:col-span-5 col-span-12 lg:mb-0 mb-7">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
               <CompanyInfo CompanyInformation={CompanyInformation} />
               <CompanyContactDetails ContactDetails={ContactDetails} />
               <Categories category={category} />
               <TrustPoints CompanyTrust={CompanyTrust} />
            </div>
         </div>
         <div className="6lg:col-span-8 lg:col-span-7 col-span-12">
            <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
               {/* <TopSalingProductsTable /> */}
               <div className="  6lg:grid grid-cols-12 gap-5">
                  <AllProductsCard />
                  <TotalSaleCard />
                  <CompanyDensity />
                  {/* <Geolocation /> */}
               </div>
            </div>
         </div>
      </div>
   );
}
