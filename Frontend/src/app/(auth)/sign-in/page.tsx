import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SignInPageContent = dynamic(
   () => import("./Components/SignInPageContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "Sign In",
};

export default function Login() {
   return <SignInPageContent />;
}
