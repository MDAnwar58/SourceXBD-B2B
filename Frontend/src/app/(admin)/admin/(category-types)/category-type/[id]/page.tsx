"use client";
import React, { Fragment, useEffect, useState } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getCategoryType } from "../../featrues/CategoryTypeAcion";
import dynamic from "next/dynamic";
const CategoryTypeUpdateForm = dynamic(
   () => import("./Components/CategoryTypeUpdateForm"),
   { ssr: false }
);
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

type Props = {
   params: {
      id: string;
   };
};

export default function CategoryEdit({ params }: Props) {
   const { id } = params;
   const dispatch = useDispatch<AppDispatch>();
   const [status, setStatus] = useState<string>("active");

   useEffect(() => {
      dispatch(getCategoryType({ id, setStatus }));
   }, []);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Category Edit" searchBox={false} />

         <CategoryTypeUpdateForm status={status} setStatus={setStatus} />
      </Fragment>
   );
}
