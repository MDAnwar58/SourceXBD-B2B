"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import {
   getOrganisation,
   getOrganisationWithAuth,
} from "../features/OrganisationAction";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";

const OrganisationLeftContent = dynamic(
   () => import("./OrganisationLeftContent")
);
const OrganisationRightContent = dynamic(
   () => import("./OrganisationRightContent")
);
const OrganisationProductsGrid = dynamic(
   () => import("./OrganisationProductsGrid")
);
const LoadMoreBtn = dynamic(() => import("./LoadMoreBtn"));

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type Company = {
   address: string;
   city_id: number;
   contact: string;
   country_id: number;
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
   type: string;
   user_id: number;
   created_at: string;
};

type Product = {
   id: number;
   name: string;
   slug: string;
   contact: string;
   images: any;
   price: number;
};

type Organisation = {
   company: Company;
   email: string;
   email_verified_at: string;
   id: string;
   image: any;
   name: string;
   phone: string;
   products: Product[];
   totalLength: number;
   profile: string;
   role: string;
   status: string;
   location: string;
   yearOfJoining: string;
};

type Props = {
   params: {
      id: string;
   };
};

export default function OrganisationPageContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const [limit, setLimit] = useState<number>(8);
   const localUrl = LocalUrl() as string;

   const { auth } = useSelector((state: RootState) => state.userend.common);

   useEffect(() => {
      if (auth === true) {
         dispatch(getOrganisationWithAuth({ id: Number(params?.id), limit }));
      } else {
         dispatch(getOrganisation({ id: Number(params?.id), limit }));
      }
   }, [auth, dispatch, params?.id, limit]);

   const onHandleLoadMore = useCallback(
      (Limit: number) => {
         setLimit(limit + Limit);
         dispatch(
            getOrganisation({ id: Number(params?.id), limit: limit + Limit })
         );
      },
      [limit, dispatch, params?.id]
   );

   const { organisation = {} } = useSelector(
      (state: RootState) => state.userend.organisation
   );
   const Organisation = organisation as Organisation;
   const { products = [], totalLength = 0 } = Organisation;
   const saller = {
      name: Organisation.name,
      email: Organisation.email,
      phone: Organisation?.company?.contact,
      yearOfJoining: Organisation?.company?.created_at || "00 Years",
      location:
         Organisation?.company?.address ||
         "Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan nec at non ac.",
   };

   const sallerProfile = {
      industry: Organisation?.company?.industry,
      desc: Organisation?.company?.desc,
   };
   const userImage =
      Organisation?.image !== undefined
         ? Organisation?.image.map((item: any) => item?.image)
         : "";
   const imageJoin = userImage !== "" ? userImage?.join("") : "";
   const forwardSlash = "/";
   const imageUrl = forwardSlash?.concat(imageJoin);
   const imagePath = localUrl.concat(imageUrl);

   const sallerInfo = {
      company: {
         name: Organisation?.company?.name,
      },
      country: Organisation?.company?.country,
      location: Organisation?.company?.address,
      rating: "rating_point",
      image: imagePath,
   };
   const totalProductLength = totalLength;
   const productLength = products && products.length;
   return (
      <div className="container pt-16 pb-20">
         <div className=" flex lg:flex-row flex-col gap-7">
            <OrganisationLeftContent
               sallerProfile={sallerProfile}
               sallerInfo={sallerInfo}
            />
            <OrganisationRightContent saller={saller} />
         </div>
         <div className="pt-10">
            <div className="text-[#4285f4] text-left font-['Inter-Bold',_sans-serif] text-2xl font-bold">
               Buy Online Product
            </div>
            <OrganisationProductsGrid
               products={products}
               auth={auth}
               params={params}
               limit={limit}
            />

            {productLength > 8 ? (
               <LoadMoreBtn
                  productLength={productLength}
                  totalProductLength={totalProductLength}
                  onHandleLoadMore={onHandleLoadMore}
               />
            ) : null}
            {/* <OrganisationBottomText /> */}
         </div>
      </div>
   );
}
