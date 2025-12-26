"use client";
import Grid from "@admin/components/grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import SettingsContext from "@/saller/settings/features/SettingsContext";
import { AppDispatch } from "@/saller/store";
import { getCompanyProfile } from "@/saller/settings/features/SettingsAction";
import dynamic from "next/dynamic";
const PersonalInformationCard = dynamic(
   () => import("./PersonalInformationCard")
);
const ChangePasswordCard = dynamic(() => import("./ChangePasswordCard"));

export default function ProfileSettingsContent() {
   const { image, name, email, phone, updateProfile, formRef } =
      SettingsContext();
   const dispatch = useDispatch<AppDispatch>();

   const { submit } = useSelector(
      (state: SallerState) => state.saller.settings
   );
   useEffect(() => {
      if (submit === true) {
         formRef.current?.reset();
      }
      dispatch(getCompanyProfile());
   }, [submit, dispatch]);

   return (
      <Grid cols={12} gap={7}>
         <div className="lg:col-span-6 col-span-12 3xs:mb-0 mb-7">
            <PersonalInformationCard
               image={image}
               name={name}
               email={email}
               phone={phone}
               updateProfile={updateProfile}
               formRef={formRef}
            />
         </div>
         <ChangePasswordCard />
      </Grid>
   );
}
