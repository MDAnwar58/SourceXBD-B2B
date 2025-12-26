"use client";
import React from "react";
import dynamic from "next/dynamic";
const OrganisationSallerDetails = dynamic(
   () => import("./OrganisationSallerDetails")
);
const OrganisationBestPriceForm = dynamic(
   () => import("./OrganisationBestPriceForm")
);

type Props = {
   saller: {
      name: string;
      email: string;
      phone: string;
      yearOfJoining: string;
      location: string;
   };
};

export default function OrganisationRightContent({ saller }: Props) {
   return (
      <div className="lg:w-[25%]">
         <OrganisationSallerDetails saller={saller} />
         <OrganisationBestPriceForm />
      </div>
   );
}
