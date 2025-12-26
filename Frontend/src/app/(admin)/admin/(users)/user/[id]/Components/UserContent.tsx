"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/store";
import { getUser } from "@/admin/users/features/UserAction";
import { AdminState } from "@admin/store";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"), {
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
// const ShowProfilePassword = dynamic(() => import("./ShowProfilePassword"), {
//    ssr: false,
// });
const RecentOrders = dynamic(() => import("./RecentOrders"), {
   ssr: false,
});

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};
type City = {
   country_id: number;
   created_at: string;
   desc: string;
   id: number;
   map: string;
   name: string;
   slug: string;
   status: string;
};

type Document = {
   company_id: number;
   created_at: string;
   date: string;
   id: number;
   title: string;
};

type Type = {
   created_at: string;
   id: number;
   name: string;
   status: string;
};

type Company = {
   address: string;
   city: City;
   city_id: number;
   contact: string;
   country: Country;
   country_id: number;
   created_at: string;
   desc: string;
   documents: Document[];
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: Type;
   user_id: number;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type Profile = {
   address: string | null;
   country_code_1: string | number | null;
   country_code_2: string | number | null;
   country_id: number | null;
   country: Country;
   created_at: string;
   email_2: string | null;
   email_notification: number;
   first_name: string | null;
   gpo: string | number | null;
   id: number;
   last_name: number | null;
   middle_name: number | null;
   phone_1: string;
   phone_2: string | null;
   phone_notification: number;
   photo: string | null;
   state: string | null;
   user_id: number;
};

type SocialMediaLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type User = {
   company: Company;
   created_at: string;
   email: string;
   email_verified_at: string | null;
   id: number;
   image: Image[];
   name: string;
   phone: string;
   profile: Profile;
   role: string;
   status: string;
   suer_social_links: SocialMediaLink[];
};

type Props = {
   params: {
      id: number;
   };
};

export default function UserContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const localUrl: string = LocalUrl();

   useEffect(() => {
      dispatch(getUser({ id: params?.id }));
   }, [dispatch, params]);

   const { user = {} } = useSelector((state: AdminState) => state.admin.user);
   const User = user as User;
   const { suer_social_links = [] } = User;

   let imagePath = "";
   if (User?.image !== undefined && User?.image?.length > 0) {
      const imageStorePath = User?.image?.map((user: any) => user.image);
      const storagePath = imageStorePath.join(",");
      const forwardSlash = "/";
      const imageUrl = forwardSlash.concat(storagePath);
      const path = localUrl.concat(imageUrl);
      imagePath = path;
   }
   let companyLogo = "";
   if (User?.company?.logo !== undefined) {
      const storeFileUrl = User?.company?.logo;
      const path = localUrl.concat(storeFileUrl);
      companyLogo = path;
   }

   const userInfo = {
      image: imagePath,
      name: User?.name,
      role: User?.role,
      companyLogo: companyLogo,
   };

   const trust: any = {
      trustPoint:
         User?.company?.trust_point !== undefined
            ? User?.company?.trust_point
            : 0,
      userId: User?.id !== undefined ? User?.id : 0,
   };
   const userContact = {
      email: User?.email !== undefined ? User?.email : "",
      phone: User?.phone !== undefined ? User?.phone : "",
      countryCode:
         User?.company?.country?.phonecode !== undefined
            ? User?.company?.country?.phonecode
            : User?.profile?.country?.phonecode
              ? User?.profile?.country?.phonecode
              : "",
   };

   const userAvailable: any = {
      country:
         User?.company?.country &&
         User?.company?.country?.nicename !== undefined
            ? User?.company?.country?.nicename
            : User?.profile?.country?.nicename !== undefined
              ? User?.profile?.country?.nicename
              : "",
      iso:
         User?.company?.country && User?.company?.country?.iso !== undefined
            ? User?.company?.country?.iso
            : User?.profile?.country?.iso !== undefined
              ? User?.profile?.country?.iso
              : "",
      city:
         User?.company?.city?.name !== undefined
            ? User?.company?.city.name
            : "",
      state: User?.profile?.state !== undefined ? User?.profile?.state : "",
      status: User?.status !== undefined ? User?.status : "",
   };

   return (
      <div className="xs3:grid grid-cols-12 6lg:gap-9 gap-7">
         <div className="7xl:col-span-4 6lg:col-span-5 col-span-12 ">
            <AdminCard className="!bg-[#ffffff] !rounded-[20px] 3xs:mb-0 mb-5">
               <UserInfo userInfo={userInfo} />
               <UserSocialDetails
                  trust={trust}
                  suer_social_links={suer_social_links}
               />
               <UserContactDetails userContact={userContact} />
               <UserAvailableDetails userAvailable={userAvailable} />
            </AdminCard>
         </div>
         <div className="7xl:col-span-8 6lg:col-span-7 col-span-12 ">
            <AdminCard className="!bg-[#ffffff] !rounded-[20px] !h-auto">
               {/* <RecentActivity /> */}
               {/* <ShowProfilePassword /> */}
               {userInfo?.role === "seller" ? (
                  <RecentOrders />
               ) : (
                  <div className="text-gray-600 text-lg text-center font-semibold">
                     Not found
                  </div>
               )}
            </AdminCard>
         </div>
      </div>
   );
}
