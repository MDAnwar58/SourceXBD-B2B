import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ProfileEditContent = dynamic(
   () => import("./Components/ProfileEditContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "Profile Edit",
   description: "Profile",
};

type Props = {
   params: {
      id: string;
   };
};

export default function Profile({ params }: Props) {
   return (
      <Fragment>
         <ProfileEditContent params={params} />
      </Fragment>
   );
}
