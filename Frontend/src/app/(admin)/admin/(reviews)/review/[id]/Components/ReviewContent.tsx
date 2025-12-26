"use client";
import React, { Fragment, useCallback, useEffect } from "react";
import ReviewsContext from "@/admin/reviews/features/ReviewsContext";
import { useSelector } from "react-redux";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import { AdminState } from "@admin/store";
const ProductDetailsCard = dynamic(() => import("./ProductDetailsCard"));
const ReviewCard = dynamic(() => import("./ReviewCard"));

type Country = { id: number; nicename: string };

type Profile = {
   country: Country;
   country_id: number;
   id: number;
   state: string;
   user_id: number;
};

type Image = { id: number; imageable_id: number; image: string };

type User = {
   id: number;
   name: string;
   image: Array<Image[]>;
   profile: Profile;
};

type Star = {
   five: number;
   four: number;
   three: number;
   two: number;
   one: number;
};

type Media = {
   file_path: string;
   id: number;
   product_id: number;
};

type Product = {
   id: number;
   media: Array<Media[]>;
   name: string;
};

type Review = {
   id: number;
   desc: string;
   product: Product;
   rattings: number;
   status: string;
   title: string;
   user_id: number;
   created_at: string;
   user: User;
};

type ReviewData = {
   avgRating: string;
   review: Review;
   reviewCount: number;
   star: Star;
};

type Props = {
   params: {
      id: string;
   };
};

export default function ReviewContent({ params }: Props) {
   const { id } = params;
   const {
      getReview,
      replySubmit,
      limit,
      setLimit,
      content,
      replyFormRef,
      getReplies,
      replyModal,
      setReplyModal,
   } = ReviewsContext();
   const localUrl = LocalUrl();

   useEffect(() => {
      getReview(Number(id));
   }, [id]);

   const { review = {}, error } = useSelector(
      (state: AdminState) => state.admin.review
   );
   // console.log(error);
   const ReviewData = review as ReviewData;

   useEffect(() => {
      getReplies(Number(ReviewData?.review?.id), limit);
   }, [ReviewData?.review?.id, ReviewData]);

   const loadMoreReplies = (reviewId: number, Limit: number) => {
      setLimit(Limit);
      getReplies(reviewId, Limit);
   };

   let image;
   if (ReviewData?.review?.product?.media !== undefined) {
      const storeFilePath = ReviewData?.review?.product?.media.map(
         (media: Media | any) => media?.file_path
      );
      const storeFilePathString = storeFilePath.toString();
      const imageUrl = localUrl.concat(storeFilePathString);
      image = imageUrl;
   }

   const product: any = {
      name: ReviewData?.review?.product?.name,
      reviewCount:
         ReviewData?.reviewCount !== undefined ? ReviewData?.reviewCount : 0,
      avgRating:
         ReviewData?.avgRating !== undefined ? ReviewData?.avgRating : 0,
      star: ReviewData?.star !== undefined ? ReviewData?.star : null,
      image: image,
   };
   let avatar;
   if (ReviewData?.review?.user?.image !== undefined) {
      const storeFilePath = ReviewData?.review?.user?.image?.map(
         (user: Image | any): any => user?.image
      );
      const storeFilePathString = storeFilePath.toString();
      const forwardSlash = "/";
      const imagePath = forwardSlash.concat(storeFilePathString);
      const imageUrl = localUrl.concat(imagePath);
      avatar = imageUrl;
   }

   const Review: any = {
      id: ReviewData?.review?.id,
      user: {
         name:
            ReviewData?.review?.user?.name !== undefined
               ? ReviewData?.review?.user?.name
               : null,
         avatar: avatar !== undefined ? avatar : "",
      },
      location: {
         country:
            ReviewData?.review?.user?.profile?.country?.nicename !== undefined
               ? ReviewData?.review?.user?.profile?.country?.nicename
               : null,
         state:
            ReviewData?.review?.user?.profile?.state !== undefined
               ? ReviewData?.review?.user?.profile?.state
               : null,
      },
      rating:
         ReviewData?.review?.rattings !== undefined
            ? ReviewData?.review?.rattings
            : null,
      created_at:
         ReviewData?.review?.created_at !== undefined
            ? ReviewData?.review?.created_at
            : "",
      title:
         ReviewData?.review?.title !== undefined
            ? ReviewData?.review?.title
            : null,
      desc:
         ReviewData?.review?.desc !== undefined ? ReviewData?.review?.desc : "",
   };
   return (
      <Fragment>
         <ProductDetailsCard product={product} />
         <ReviewCard
            Review={Review}
            replySubmit={replySubmit}
            limit={limit}
            content={content}
            replyFormRef={replyFormRef}
            getReplies={getReplies}
            loadMoreReplies={loadMoreReplies}
            replyModal={replyModal}
            setReplyModal={setReplyModal}
         />
      </Fragment>
   );
}
