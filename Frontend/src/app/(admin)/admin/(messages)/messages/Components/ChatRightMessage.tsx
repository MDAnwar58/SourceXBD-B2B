import React from "react";

type Props = {
  chat?: any | undefined;
};

export default function ChatRightMessage({ chat }: Props) {
  return (
    <div className="flex justify-end pb-1">
      <span className="bg-[#ffffff] text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] px-[1.1rem] py-2 shadow-admin-chat-left">
        {chat?.message}
      </span>
    </div>
  );
}
