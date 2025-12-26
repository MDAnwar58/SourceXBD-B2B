import { useCallback, useRef, useState } from "react";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import {
   accept_review,
   delete_review,
   get_replies,
   get_review,
   get_reviews,
   reply_added,
} from "./ReviewsAction";
import { useRouter } from "next/navigation";

type EntityWithId = {
   id: string;
};

type IdCard = {
   url: string;
   title: string;
};

export default function ReviewsContext() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const [limit, setLimit] = useState<number>(3);
   const content = useRef<HTMLTextAreaElement>(null);
   const replyFormRef = useRef<HTMLFormElement>(null);
   const [replyModal, setReplyModal] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const getReviews = useCallback(
      (Page: number, PerPage: number, Search: string): void => {
         dispatch(
            get_reviews({ page: Page, perPage: PerPage, search: Search })
         );
      },
      [dispatch]
   );

   const deleteReview = useCallback(
      (id: number, page: number, perPage: number, search: string): void => {
         dispatch(delete_review({ id, page, perPage, search }));
      },
      [dispatch]
   );

   const getReview = useCallback(
      (id: number) => {
         dispatch(get_review({ id }));
      },
      [dispatch]
   );

   const onAcceptReview = useCallback(
      (id: number, page: number, perPage: number, search: string) => {
         dispatch(accept_review({ id, page, perPage, search }));
      },
      [dispatch]
   );

   const replySubmit = useCallback(
      (reviewId: number, limit: number) => {
         const payload = {
            content: content?.current ? content?.current?.value : null,
         };
         dispatch(
            reply_added({ reviewId, limit, payload, replyFormRef })
         ).finally(() => {
            setReplyModal(false);
         });
      },
      [dispatch]
   );
   const getReplies = useCallback(
      (reviewId: number, limit: number) => {
         dispatch(get_replies({ reviewId, limit }));
      },
      [dispatch]
   );

   return {
      getReviews,
      page,
      setPage,
      perPage,
      setPerPage,
      search,
      setSearch,
      deleteReview,
      getReview,
      onAcceptReview,
      replySubmit,
      limit,
      setLimit,
      content,
      replyFormRef,
      getReplies,
      replyModal,
      setReplyModal,
   };
}
