"use client";
import {
   EmailMessageSvgIcon,
   SMSMessageSvgIcon,
} from "@/app/saller/components/SvgIcons";
import { AppDispatch, SallerState } from "@/saller/store";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   getProfileNotifications,
   updateProfileNotifications,
} from "@/saller/settings/features/SettingsAction";
import dynamic from "next/dynamic";
const ToggleSwitch = dynamic(
   () => import("@/app/saller/components/ToggleSwitch")
);

type Notification = {
   email_notification: number | null;
   phone_notification: number | null;
};

export default function NotificationSettingsContent() {
   const [emailNotification, setEmailNotification] = useState<boolean>(false);
   const [phoneNotification, setPhoneNotification] = useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getProfileNotifications());
   }, [dispatch]);

   const { profile_notifications } = useSelector(
      (state: SallerState) => state.saller.settings
   );
   const profileNotificaiton: Array<Notification[]> =
      profile_notifications as any;

   const onHandleEmailNotification = useCallback(
      (email_notification: boolean) => {
         const notification = email_notification === false ? 1 : 0;
         const payload = {
            name: "email_notification",
            type: notification,
         };
         dispatch(updateProfileNotifications({ payload }));
      },
      [dispatch]
   );
   const onHandlePhoneNotification = useCallback(
      (phone_notification: boolean) => {
         const notification = phone_notification === false ? 1 : 0;
         const payload = {
            name: "phone_notification",
            type: notification,
         };
         dispatch(updateProfileNotifications({ payload }));
      },
      [dispatch]
   );

   const email_notification = profileNotificaiton.map((item: any) => {
      return item?.email_notification;
   });
   const phone_notification = profileNotificaiton.map((item: any) => {
      return item?.phone_notification;
   });

   useEffect(() => {
      if (email_notification?.length > 0) {
         setEmailNotification(email_notification.includes(1));
      }
      if (phone_notification?.length > 0) {
         setPhoneNotification(phone_notification.includes(1));
      }
   }, [email_notification, phone_notification]);

   return (
      <div
         className="bg-[#ffffff] rounded-[20px] h-[204px] p-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
            Notification
         </div>

         <div className="pt-3 space-y-4">
            <div
               className="bg-[rgba(152,176,238,0.05)] rounded-[10px] py-4 px-5 flex flex-wrap justify-between items-center"
               style={{
                  boxShadow:
                     "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
               }}
            >
               <div className="flex flex-row items-center gap-5">
                  <div className="w-6 h-6 text-[#515151]">
                     <EmailMessageSvgIcon />
                  </div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
                     Email
                  </div>
               </div>
               <ToggleSwitch
                  checked={emailNotification}
                  onChange={() => {
                     onHandleEmailNotification(emailNotification);
                  }}
               />
            </div>
            <div
               className="bg-[rgba(152,176,238,0.05)] rounded-[10px] py-4 px-5 flex flex-wrap justify-between items-center"
               style={{
                  boxShadow:
                     "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
               }}
            >
               <div className="flex flex-row items-center gap-5">
                  <div className="w-6 h-6 text-[#515151]">
                     <SMSMessageSvgIcon />
                  </div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
                     SMS
                  </div>
               </div>
               <ToggleSwitch
                  checked={phoneNotification}
                  onChange={() => {
                     onHandlePhoneNotification(phoneNotification);
                  }}
               />
            </div>
         </div>
      </div>
   );
}
