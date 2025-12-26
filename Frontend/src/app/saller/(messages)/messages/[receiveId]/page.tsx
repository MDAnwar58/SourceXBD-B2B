import React from "react";
import dynamic from "next/dynamic";
const MessageContent = dynamic(() => import("./Components/MessageContent"));
import "./chat-style.css";

type Props = {
   params: {
      receiveId: number;
   };
};

export default function Messages({ params }: Props) {
   return <MessageContent params={params} />;
}
