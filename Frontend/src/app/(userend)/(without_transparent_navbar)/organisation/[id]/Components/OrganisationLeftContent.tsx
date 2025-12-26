"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const OrganisationSallerCard = dynamic(
   () => import("./OrganisationSallerCard")
);
const OrganisationTab = dynamic(() => import("./OrganisationTab"));
const OrganisationTabContent = dynamic(
   () => import("./OrganisationTabContent")
);
const OrganisationCardGrid = dynamic(() => import("./OrganisationCardGrid"));

const tabs = [{ name: "Seller Profile" }, { name: "Products & Service" }];

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type Props = {
   sallerProfile: {
      industry: string;
      desc: any;
   };
   sallerInfo: {
      company: {
         name: string;
      };
      country: Country;
      location: string;
      rating: string;
      image: string;
   };
};

export default function OrganisationLeftContent({
   sallerProfile,
   sallerInfo,
}: Props) {
   const [organisationTab, setOrganisationTab] =
      useState<string>("Seller Profile");
   return (
      <div className="lg:w-[75%] w-full">
         <OrganisationSallerCard sallerInfo={sallerInfo} />
         <OrganisationTab
            tabs={tabs}
            organisationTab={organisationTab}
            setOrganisationTab={setOrganisationTab}
         />
         <OrganisationTabContent sallerProfile={sallerProfile} />
         <OrganisationCardGrid />
      </div>
   );
}
