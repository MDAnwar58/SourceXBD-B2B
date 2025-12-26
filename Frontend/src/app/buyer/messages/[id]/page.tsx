import React from "react";
import { Metadata } from "next";
import "./chat-style.css";
import dynamic from "next/dynamic";
const MessageContent = dynamic(() => import("./Components/MessageContent"));

export const metadata: Metadata = {
   title: "Messages",
};

type Props = {
   params: {
      id: number;
   };
};

export default function Messages({ params }: Props) {
   return <MessageContent params={params} />;
}
