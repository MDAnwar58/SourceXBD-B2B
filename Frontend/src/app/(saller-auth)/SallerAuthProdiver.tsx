"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/saller/auth/store";

type Props = {
   children: React.ReactNode;
};

export default function SallerAuthProdiver({ children }: Props) {
   return <Provider store={store}>{children}</Provider>;
}
