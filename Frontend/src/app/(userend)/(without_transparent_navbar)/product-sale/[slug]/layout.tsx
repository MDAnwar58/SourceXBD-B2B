import React, { Fragment, ReactNode } from "react";

export const metadata = {
   title: "Sale",
};

type Props = {
   children: ReactNode;
};

export default function SaleLayout({ children }: Props) {
   return <Fragment>{children}</Fragment>;
}
