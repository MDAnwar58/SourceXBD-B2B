import React, { Fragment } from "react";
import { ProductRequestSvgIcon } from "@/buyer/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("../../components/PageHeader"));
const PostBuyRequirement = dynamic(
   () => import("./Components/PostBuyRequirement")
);

const icon = (
   <div className="w-6 h-6">
      <ProductRequestSvgIcon />
   </div>
);
export default function ProductPost() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Product Post" searchBox={false} />
         <PostBuyRequirement />
      </Fragment>
   );
}
