"use client";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

export function useParamsGenerator() {
   const pathname = usePathname();
   // Split the path into segments
   const params = pathname.split("/").filter(Boolean);
   return params;
}
export function useParamLength(params: any, length: number) {
   // Extract the slug, which is the second-to-last segment
   const slug = params[params.length - length];
   return slug;
}

export function useNextParams() {
   const params = useSearchParams();
   return params;
}
export function useNextSearchParams() {
   const [Params, setParams] = useState<any>();
   useEffect(() => {
      if (window !== undefined) {
         const params = new URLSearchParams(window.location.search);
         setParams(params);
      } else {
         setParams(null);
      }
   }, []);
   return Params;
}
export function useClearSearchParams(params: string) {
   const searchParams = new URLSearchParams(window.location.search);
   searchParams.delete(params);
   const newUrl = searchParams.toString()
      ? `${window.location.pathname}?${searchParams.toString()}`
      : window.location.pathname;
   window.history.replaceState(null, "", newUrl);
}
