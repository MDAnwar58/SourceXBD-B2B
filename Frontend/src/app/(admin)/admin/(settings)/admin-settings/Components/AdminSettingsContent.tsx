"use client";
import Grid from "@admin/components/grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getCompanyProfile } from "@/admin/settings/features/SettingsAction";
import SettingsContext from "@/admin/settings/features/SettingsContext";
import dynamic from "next/dynamic";
const PersonalInformationCard = dynamic(
   () => import("./PersonalInformationCard")
);
const ChangePasswordCard = dynamic(() => import("./ChangePasswordCard"));

export default function AdminSettingsContent() {
   const { image, name, email, phone, updateProfile, formRef } =
      SettingsContext();
   const dispatch = useDispatch<AppDispatch>();

   const { submit } = useSelector((state: AdminState) => state.admin.settings);
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
