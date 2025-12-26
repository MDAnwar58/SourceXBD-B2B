import { AppDispatch } from "@/app/store";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { get_blogs } from "./BlogAction";

export default function BlogContext() {
   const [limit, setLimit] = useState<number>(3);
   const dispatch = useDispatch<AppDispatch>();
   const getBlogs = useCallback(
      (limit: number) => {
         dispatch(get_blogs({ limit }));
      },
      [dispatch]
   );
   const loadMore = useCallback(
      (Limit: number) => {
         setLimit(limit + Limit);
         dispatch(get_blogs({ limit: limit + Limit }));
      },
      [limit, dispatch]
   );
   return { getBlogs, limit, loadMore };
}
