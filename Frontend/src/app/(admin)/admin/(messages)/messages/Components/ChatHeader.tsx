import React from "react";
import Img from "@/components/Image";
import Button from "@/components/Button";
import { DashboardThreeDotsSvgIcon } from "@admin/components/SvgIcons";

export default function ChatHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-3">
        <div className=" relative">
          <Img
            src="/assets/images/message-user.png"
            alt="chat user avatar"
            width={100}
            height={100}
            className="rounded-full w-[40.4px] h-[40.4px] "
          />
          <div className="bg-[#52ff00] rounded-[50%] w-[7px] h-[7px] absolute bottom-0 right-[.35rem]" />
        </div>
        <div>
          <div className="text-[#000000] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-1">
            Roufiqul Islam
          </div>
          <div className="text-[#4285f4] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
            Typing........
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Button type="button" className="w-[22px] h-[22px]">
          <DashboardThreeDotsSvgIcon />
        </Button>
      </div>
    </div>
  );
}
