"use client";
import AdminCard from "@admin/components/card";
import PageHeader from "@/app/saller/components/PageHeader";
import { DashboardQucikActionSvgIcon } from "@/app/saller/components/SvgIcons";
import React, { Fragment, useEffect } from "react";
import UserInfo from "./UserInfo";
import UserSocialDetails from "./UserSocialDetails";
import UserContactDetails from "./UserContactDetails";
import UserAvailableDetails from "./UserAvailableDetails";
import RecentActivity from "./RecentActivity";
import RecentOrders from "./RecentOrders";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { getBuyerProfile } from "@/saller/view-buyer-profile/features/ViewSellerProfileAction";
import { SallerState } from "@/app/saller/store";

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

type SocialLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type Buyer = {
   country: string;
   country_iso: string;
   email: string;
   id: number;
   image: string;
   name: string;
   phone: string;
   role: string;
   social_links: SocialLink[];
   state: string;
   status: string;
};

type Props = {
   params: {
      id: number;
   };
};

export default function ViewSallerProfileContent({ params }: Props) {
   const { id } = params;
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getBuyerProfile({ id }));
   }, [dispatch, id]);

   const { buyer = {} } = useSelector(
      (state: SallerState) => state.saller.viewBuyerProfile
   );
   console.log(buyer);
   const Buyer = buyer as Buyer;
   const { social_links = [] } = Buyer;
   const socialLinks: SocialLink[] = social_links;

   const buyerInfo = {
      name: Buyer?.name !== undefined ? Buyer?.name : "",
      role: Buyer?.role !== undefined ? Buyer?.role : "",
      image: Buyer?.image !== undefined ? Buyer?.image : "",
   };

   const buyerContactDetails = {
      email: Buyer?.email !== undefined ? Buyer?.email : "",
      phone: Buyer?.phone !== undefined ? Buyer?.phone : "",
   };

   const buyerAvailableDetails = {
      country: Buyer?.country !== undefined ? Buyer?.country : "",
      country_iso: Buyer?.country_iso !== undefined ? Buyer?.country_iso : "",
      state: Buyer?.state !== undefined ? Buyer?.state : "",
      profile_status: Buyer?.status !== undefined ? Buyer?.status : "",
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="View Saller Profile"
            searchBox={false}
         />

         <div className="xs3:grid grid-cols-12 6lg:gap-9 gap-7">
            <div className="7xl:col-span-4 6lg:col-span-5 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] 3xs:mb-0 mb-5">
                  <UserInfo buyerInfo={buyerInfo} />
                  <UserSocialDetails socialLinks={socialLinks} />
                  <UserContactDetails
                     buyerContactDetails={buyerContactDetails}
                  />
                  <UserAvailableDetails
                     buyerAvailableDetails={buyerAvailableDetails}
                  />
               </AdminCard>
            </div>
            {/* <div className="7xl:col-span-8 6lg:col-span-7 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] !h-full">
                  <RecentActivity />
                  <RecentOrders />
               </AdminCard>
            </div> */}
         </div>
      </Fragment>
   );
}
