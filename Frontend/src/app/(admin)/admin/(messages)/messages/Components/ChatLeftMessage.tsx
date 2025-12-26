import React from "react";

type Props = {
  chat: any | undefined;
};

export default function ChatLeftMessage({ chat }: Props) {
  return (
    <div className="pb-1">
      <span className="bg-[#98b0ee] text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal rounded-tr-[14px] rounded-tl-[14px] rounded-br-[14px] px-[1.1rem] py-2 shadow-admin-chat-left rotate-0 scale-100">
        {chat?.message}
      </span>
    </div>
  );
}
