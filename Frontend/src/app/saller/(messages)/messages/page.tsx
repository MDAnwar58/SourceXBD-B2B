import React from "react";
import dynamic from "next/dynamic";
const MessageContent = dynamic(() => import("./Components/MessageContent"));
import "./chat-style.css";

export default function Messages() {
   return <MessageContent />;
}
