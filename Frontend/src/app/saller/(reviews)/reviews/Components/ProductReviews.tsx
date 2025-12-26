"use client";
import React, { Fragment, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import dynamic from "next/dynamic";
const SellerCard = dynamic(() => import("@/app/saller/components/card"));
const ProductReview = dynamic(() => import("./ProductReview"));
const SallerPagination = dynamic(
   () => import("@/app/saller/components/Pagination")
);

type User = { image: string | null; name: string };

type Product = {
   images: any[];
   category_id: number;
   category: any;
   contact: string | number | null;
   deleted_at: null;
   desc: string;
   discount_price: any | null;
   id: number;
   is_show: number;
   min_order: number | string | null;
   name: string;
   price: number;
   publish: string;
   rating_point: number;
   s_desc: any | null;
   section: string;
   slug: string;
   spacification: any | null;
   status: string;
   stock: number;
   sub_category_id: number;
   tags: any;
   title: string;
   type: string;
   user_id: number;
   vendor: string;
};

type Review = {
   desc: string;
   id: number;
   product: Product;
   product_id: number;
   rattings: number;
   status: string;
   title: string;
   user: User;
   user_id: number;
   created_at: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type ReviewsData = {
   current_page: number;
   data: Review[];
   first_page_url: string;
   from: number;
   last_page: number;
   last_page_url: string | null;
   links: Link[];
   next_page_url: string | null;
   path: string;
   per_page: number;
   prev_page_url: string | null;
   to: number;
   total: number;
};

type Props = {
   page: number;
   perPage: number;
   search: string;
   deleteReview: (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => void;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   getReviews: (page: number, perPage: number, search: string) => void;
   onHandleResetTable: (page: number, perPage: number, search: string) => void;
   onAcceptReview: (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => void;
};

export default function ProductReviews({
   page,
   perPage,
   search,
   deleteReview,
   setPage,
   getReviews,
   onHandleResetTable,
   onAcceptReview,
}: Props) {
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getReviews(page, perPage, search);
      },
      [perPage, search]
   );

   const { reviews = {} } = useSelector(
      (state: SallerState) => state.saller.reviews
   );

   const ReviewsData = reviews as ReviewsData | any;
   const {
      data = [],
      links = [],
      current_page,
      last_page,
      from,
      to,
   } = ReviewsData;
   const Reviews: Review[] = data;

   useEffect(() => {
      if (current_page !== last_page && from === null && to === null) {
         getReviews(Number(last_page), perPage, search);
      }
   }, [current_page, last_page, from, to, perPage, search]);

   return (
      <Fragment>
         <SellerCard className="space-y-3 mb-7">
            {Reviews.length > 0 ? (
               Reviews.map((review: Review, index: number) => (
                  <Fragment key={index}>
                     <ProductReview
                        review={review}
                        page={page}
                        perPage={perPage}
                        search={search}
                        deleteReview={deleteReview}
                        onAcceptReview={onAcceptReview}
                     />
                  </Fragment>
               ))
            ) : (
               <div className="text-center text-xl font-semibold text-gray-600 ">
                  Data not found
               </div>
            )}
         </SellerCard>

         <SallerPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
