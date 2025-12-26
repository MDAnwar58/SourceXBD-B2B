import React from "react";
import UserInfoContent from "./Components/UserInfoContent";

export const metadata = {
   title: "Message User Info",
   description: "Message User Info",
};

type Props = {
   params: {
      id: number;
   };
};

export default function MessageUserInfo({ params }: Props) {
   return <UserInfoContent params={params} />;
}
