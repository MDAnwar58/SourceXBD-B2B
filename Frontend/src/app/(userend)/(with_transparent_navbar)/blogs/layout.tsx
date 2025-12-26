import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
   title: "Blogs",
   description: "Blogs",
};

type Props = {
   children: React.ReactNode;
};

export default function BlogsLayout({ children }: Props) {
   return <Fragment>{children}</Fragment>;
}
