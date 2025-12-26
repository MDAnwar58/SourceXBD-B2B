import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const UsersContent = dynamic(() => import("./Components/UsersContent"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "Users",
   description: "Users",
};

export default function Users() {
   return <UsersContent />;
}
