"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/saller/store";

type Props = {
   children: React.ReactNode;
};

export default function SallerProdiver({ children }: Props) {
   return <Provider store={store}>{children}</Provider>;
}
