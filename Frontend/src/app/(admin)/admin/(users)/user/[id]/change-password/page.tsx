import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const ChangePasswordContent = dynamic(
   () => import("./Components/ChangePasswordContent")
);

type Props = {
   params: {
      id: number;
   };
};

export default function ChangeUserPassword({ params }: Props) {
   return <ChangePasswordContent params={params} />;
}
