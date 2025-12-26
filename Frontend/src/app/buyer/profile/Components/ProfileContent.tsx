"use client";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import { ItemUserUpSvgIcon } from "@/buyer/components/SvgIcons";
import { AppDispatch } from "@/buyer/store";
import { getProfileForEdit } from "@/buyer/profile/features/ProfileAction";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
const AdminCard = dynamic(() => import("@/app/saller/components/card"), {
   ssr: false,
});
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"), {
   ssr: false,
});
const UserInfo = dynamic(() => import("./UserInfo"), {
   ssr: false,
});
const UserSocialDetails = dynamic(() => import("./UserSocialDetails"), {
   ssr: false,
});
const UserContactDetails = dynamic(() => import("./UserContactDetails"), {
   ssr: false,
});
const UserAvailableDetails = dynamic(() => import("./UserAvailableDetails"), {
   ssr: false,
});
const RecentActivity = dynamic(() => import("./RecentActivity"), {
   ssr: false,
});
const RecentOrders = dynamic(() => import("./RecentOrders"), {
   ssr: false,
});

const icon = (
   <div className="w-6 h-6 text-gray-700">
      <ItemUserUpSvgIcon />
   </div>
);

type Profile = {
   address: string | null;
   country_code_1: string | number | null;
   country_code_2: string | number | null;
   country_id: number;
   email_2: string | null;
   email_notification: string | null;
   first_name: string | null;
   gpo: string;
   id: number;
   last_name: string | null;
   middle_name: string | null;
   phone_1: string | null;
   phone_2: string | null;
   photo: string | null;
   state: string;
   user_id: number;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
   imageable_type: string;
};

type SocialLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type ProfileData = {
   email: string;
   id: number;
   image: Image[];
   name: string;
   phone: string;
   profile: any;
   role: string;
   status: string;
   suer_social_links: any[];
};

export default function ProfileContent() {
   const dispatch = useDispatch<AppDispatch>();
   const localUrl: string = LocalUrl();

   useEffect(() => {
      dispatch(getProfileForEdit());
   }, [dispatch]);

   const { profile } = useSelector((state: BuyerState) => state.buyer.profile);
   const { user } = useSelector((state: BuyerState) => state.buyer.common);
   const Profile = profile as ProfileData;
   const { suer_social_links = [] } = Profile;
   const socialLinks = suer_social_links as SocialLink[];

   let imagePath = "";
   if (Profile?.image !== undefined) {
      const imageStorePath = Profile?.image?.map((profile) => profile.image);
      const storagePath = imageStorePath.join(",");
      const forwardSlash = "/";
      const imageUrl = forwardSlash.concat(storagePath);
      const path = localUrl.concat(imageUrl);
      imagePath = path;
   }
   const name = Profile?.name !== undefined ? profile?.name : user?.name;
   const email = Profile?.email !== undefined ? profile?.email : user?.email;
   const userInfo = {
      image: imagePath,
      name: Profile?.name,
      role: Profile?.role,
   };
   const userContact = {
      email:
         Profile?.email !== undefined
            ? Profile?.email
            : user?.email !== undefined
              ? user?.email
              : "",
      phone: Profile?.phone !== undefined ? Profile?.phone : "",
   };
   const userAvailable = {
      country:
         Profile?.profile?.country?.name !== undefined
            ? Profile?.profile?.country?.name
            : null,
      iso:
         Profile?.profile?.country?.iso !== undefined
            ? Profile?.profile?.country?.iso
            : null,
      city: "Daulotpur",
      state:
         Profile?.profile?.state !== undefined ? Profile?.profile?.state : "",
      status: Profile?.status !== undefined ? Profile?.status : "",
   };

   const userName = Profile?.name !== undefined ? Profile?.name : "";
   const image = Profile?.image as any;

   return (
      <Fragment>
         <PageHeader icon={icon} title="Profile" searchBox={false} />
         <div className="xs3:grid grid-cols-12 6lg:gap-9 gap-7">
            <div className="7xl:col-span-4 6lg:col-span-5 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] 3xs:mb-0 mb-5">
                  <UserInfo name={name} userInfo={userInfo} image={image} />
                  <UserSocialDetails
                     socialLinks={socialLinks}
                     userName={userName}
                  />
                  <UserContactDetails email={email} userContact={userContact} />
                  <UserAvailableDetails userAvailable={userAvailable} />
               </AdminCard>
            </div>
            <div className="7xl:col-span-8 6lg:col-span-7 col-span-12 ">
               {/* <AdminCard className="!bg-[#ffffff] !rounded-[20px] !h-full"> */}
               {/* <RecentActivity /> */}
               <RecentOrders />
               {/* </AdminCard> */}
            </div>
         </div>
      </Fragment>
   );
}
