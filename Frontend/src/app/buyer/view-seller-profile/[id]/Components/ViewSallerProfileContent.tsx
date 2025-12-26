"use client";
import { DashboardQucikActionSvgIcon } from "@/app/buyer/components/SvgIcons";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { getSellerProfile } from "@/buyer/view-seller-profile/features/ViewSellerProfileAction";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@/app/saller/components/card"));
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"));
const UserInfo = dynamic(() => import("./UserInfo"));
const UserSocialDetails = dynamic(() => import("./UserSocialDetails"));
const UserContactDetails = dynamic(() => import("./UserContactDetails"));
const UserAvailableDetails = dynamic(() => import("./UserAvailableDetails"));
const RecentActivity = dynamic(() => import("./RecentActivity"));
const RecentOrders = dynamic(() => import("./RecentOrders"));

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

type Company = {
   address: string;
   city: string;
   country: string;
   country_iso: string;
   logo: string;
   trust_point: number;
};

type Seller = {
   company: Company;
   email: string;
   id: number;
   image: string;
   name: string;
   phone: string;
   role: string;
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
      dispatch(getSellerProfile({ id }));
   }, [dispatch, id]);

   const { seller = {} } = useSelector(
      (state: BuyerState) => state.buyer.viewSellerProfile
   );
   const Seller = seller as Seller;

   const sellerInfo = {
      cover_photo:
         Seller?.company?.logo !== undefined ? Seller?.company?.logo : "",
      name: Seller?.name !== undefined ? Seller?.name : "",
      role: Seller?.role !== undefined ? Seller?.role : "",
      image: Seller?.image !== undefined ? Seller?.image : "",
   };

   const userSocialDetails: any = {
      trust_point:
         Seller?.company?.trust_point !== undefined
            ? Seller?.company?.trust_point
            : "",
   };

   const sellerContactDetails = {
      email: Seller?.email !== undefined ? Seller?.email : "",
      phone: Seller?.phone !== undefined ? Seller?.phone : "",
   };

   const sellerAvailableDetails = {
      country:
         Seller?.company?.country !== undefined ? Seller?.company?.country : "",
      country_iso:
         Seller?.company?.country_iso !== undefined
            ? Seller?.company?.country_iso
            : "",
      city: Seller?.company?.city !== undefined ? Seller?.company?.city : "",
      profile_status: Seller?.status !== undefined ? Seller?.status : "",
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
                  <UserInfo sellerInfo={sellerInfo} />
                  <UserSocialDetails userSocialDetails={userSocialDetails} />
                  <UserContactDetails
                     sellerContactDetails={sellerContactDetails}
                  />
                  <UserAvailableDetails
                     sellerAvailableDetails={sellerAvailableDetails}
                  />
               </AdminCard>
            </div>
            <div className="7xl:col-span-8 6lg:col-span-7 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] !h-full">
                  {/* <RecentActivity /> */}
                  <RecentOrders />
               </AdminCard>
            </div>
         </div>
      </Fragment>
   );
}
