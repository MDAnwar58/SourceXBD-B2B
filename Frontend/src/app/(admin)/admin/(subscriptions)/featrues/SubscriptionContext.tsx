import React, { useRef, useState } from "react";
import {
   create_subscription_plan,
   delete_city,
   update_subscription_plan,
} from "./SubscriptionAcion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { useRouter } from "next/navigation";

export default function SubscriptionContext() {
   const name = useRef<HTMLInputElement>(null);
   const title = useRef<HTMLInputElement>(null);
   const [Package, setPackage] = React.useState<string>("");
   const [type, setType] = React.useState<string>("");
   const duration = useRef<HTMLInputElement>(null);
   const product_limit = useRef<HTMLInputElement>(null);
   const amount = useRef<HTMLInputElement>(null);
   // const fee = useRef<HTMLInputElement>(null);
   const [isFree, setIsFree] = useState<number>(0);
   const [requirements, setRequirements] = useState<string[]>([""]);

   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   type SubscriptionPlan = {
      name: string;
      title: string;
      package: string;
      type: string;
      duration: string;
      product_limit: number | any;
      amount: number | any;
      is_free: number;
      contents: any;
   };

   const createSubscriptionPlan = () => {
      const Name = name.current ? name.current.value : "";
      const Title = title.current ? title.current.value : "";
      const Duration = duration.current ? duration.current.value : "";
      const ProductLimit = product_limit.current
         ? Number(product_limit.current.value)
         : "";
      const Amount = amount.current ? Number(amount.current.value) : "";
      // const Fee = fee.current ? fee.current.value : "";

      const payload = {
         name: Name,
         title: Title,
         package: Package,
         type: type,
         duration: Duration,
         product_limit: ProductLimit,
         amount: Amount,
         // fee: Fee,
         is_free: isFree,
         contents: requirements,
      };
      dispatch(create_subscription_plan({ payload: payload, router }));
   };

   const updateSubscriptionPlan = (id: string) => {
      const Name = name.current ? name.current.value : "";
      const Title = title.current ? title.current.value : "";
      const Duration = duration.current ? duration.current.value : "";
      const ProductLimit = product_limit.current
         ? Number(product_limit.current.value)
         : "";
      const Amount = amount.current ? Number(amount.current.value) : "";
      // const Fee = fee.current ? fee.current.value : "";

      const payload: SubscriptionPlan = {
         name: Name,
         title: Title,
         package: Package,
         type: type,
         duration: Duration,
         product_limit: ProductLimit,
         amount: Amount,
         // fee: Fee,
         is_free: isFree,
         contents: requirements,
      };
      dispatch(update_subscription_plan({ id, payload: payload, router }));
   };

   const onDeleteHandle = (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => {
      dispatch(delete_city({ id, page, perPage, search }));
   };
   return {
      page,
      perPage,
      search,
      setPerPage,
      setPage,
      setSearch,
      name,
      title,
      Package,
      setPackage,
      type,
      setType,
      duration,
      product_limit,
      amount,
      // fee,
      isFree,
      setIsFree,
      requirements,
      setRequirements,
      createSubscriptionPlan,
      updateSubscriptionPlan,
      onDeleteHandle,
   };
}
