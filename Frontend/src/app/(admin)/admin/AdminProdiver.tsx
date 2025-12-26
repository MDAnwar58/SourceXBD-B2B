"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@admin/store";

type Props = {
   children: React.ReactNode;
};

export default function AdminProdiver({ children }: Props) {
   return <Provider store={store}>{children}</Provider>;
}
