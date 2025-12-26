"use client";
import React, { Fragment } from "react";
import ChatLeftMessage from "./ChatLeftMessage";
import ChatRightMessage from "./ChatRightMessage";

const chats = [
  {
    id: 1,
    message: "Lorem ipsum dolor sit amet.",
    user_role: "user",
  },
  {
    id: 2,
    message: "Lorem ipsum",
    user_role: "admin",
  },
  {
    id: 3,
    message: "Lorem ipsum dolor sit amet. 2",
    user_role: "user",
  },
  {
    id: 4,
    message: "Lorem ipsum",
    user_role: "admin",
  },
  {
    id: 5,
    message: "Lorem ipsum dolor sit amet",
    user_role: "admin",
  },
];
export default function ChatBody() {
  return (
    <div className="py-3 h-[85vh] overflow-y-auto flex flex-col-reverse items-end">
      <div className="w-full ">
        {chats.map((chat, index) =>
          chat.user_role === "user" ? (
            <Fragment key={index}>
              <ChatLeftMessage chat={chat} />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <ChatRightMessage chat={chat} />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}
