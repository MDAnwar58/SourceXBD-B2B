"use client";
import Button from "@/components/Button";
import { SvgFacebookIcon, SvgGoogleIcon } from "@/components/SvgIcons";
import React from "react";

type Props = {
   signInWithSocialProviders: (provider: string) => void;
};

export default function SignUpSocialBtn({ signInWithSocialProviders }: Props) {
   return (
      <div className="xs3:flex justify-center gap-x-3 pt-9">
         <Button
            type="button"
            className="bg-[rgba(255,255,255,0.80)]  backdrop-blur-[10px] shadow-auth-social-btn xs3:rounded-[10px] rounded-lg xs3:border-none border-solid border-[#bbb8b0] border-[1.5px]  4xs:w-[180px] w-full h-12 flex justify-center items-center gap-x-2 xs3:mb-0 mb-3"
            onClick={() => signInWithSocialProviders("google")}
         >
            <div className="w-6 h-6 ">
               <SvgGoogleIcon />
            </div>
            <div className="text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold relative">
               Google
            </div>
         </Button>

         <Button
            type="button"
            className="bg-[rgba(255,255,255,0.80)]  backdrop-blur-[10px] shadow-auth-social-btn xs3:rounded-[10px] rounded-lg xs3:border-none border-solid border-[#bbb8b0] border-[1.5px]  4xs:w-[180px] w-full h-12 flex justify-center items-center gap-x-2"
            style={{
               boxShadow:
                  "-1px -1px 2px 0px rgba(101, 101, 101, 0.1),1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               backdropFilter: "blur(25px)",
            }}
            onClick={() => signInWithSocialProviders("facebook")}
         >
            <div className="w-6 h-6 ">
               <SvgFacebookIcon />
            </div>
            <div className="text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold relative">
               Facebook
            </div>
         </Button>
      </div>
   );
}
