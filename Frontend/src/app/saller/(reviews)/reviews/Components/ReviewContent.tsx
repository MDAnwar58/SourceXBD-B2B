"use client";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import { ItemReviewsSvgIcon } from "@/saller/components/SvgIcons";
import ReviewsContext from "@/saller/reviews/features/ReviewsContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const ProductReviews = dynamic(() => import("./ProductReviews"));

const icon = (
   <div className="w-6 h-6">
      <ItemReviewsSvgIcon />
   </div>
);

export default function ReviewContent() {
   const {
      getReviews,
      page,
      perPage,
      search,
      deleteReview,
      setPage,
      setSearch,
      setPerPage,
      onAcceptReview,
   } = ReviewsContext();
   const searchRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      getReviews(page, perPage, search);
   }, [page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         getReviews(1, perPage, search);
      },
      [perPage]
   );

   const onHandleResetTable = (
      page: number,
      perPage: number,
      search: string
   ): void => {
      setPage(page);
      setPerPage(perPage);
      setSearch(search);
      if (searchRef.current) {
         searchRef.current.value = "";
      }
      getReviews(page, perPage, search);
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Reviews"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <ProductReviews
            page={page}
            perPage={perPage}
            search={search}
            deleteReview={deleteReview}
            setPage={setPage}
            getReviews={getReviews}
            onHandleResetTable={onHandleResetTable}
            onAcceptReview={onAcceptReview}
         />
      </Fragment>
   );
}
