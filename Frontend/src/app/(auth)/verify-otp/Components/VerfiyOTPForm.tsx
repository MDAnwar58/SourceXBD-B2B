"use client";
import React, { useCallback, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import "../verify-code.css";
import { SvgSimpleLeftArrowIcon } from "@/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { VerifyOTP } from "@auth/features/action";
import { useRouter } from "next/navigation";

type Form = {
   otp: number;
   email: string;
};

type Props = {
   email: string;
};

export default function VerfiyOTPForm({ email }: Props) {
   const [otp, setOtp] = useState("");
   const [requireLengthError, setRequireLengthError] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   // Handler for verifying OTP
   const handleVerify = useCallback(() => {
      const textLength = typeof otp === "string" ? otp.length : 0;

      if (textLength === 6) {
         setRequireLengthError("" as string);
         const payload: Form = {
            otp: Number(otp),
            email: email,
         };
         dispatch(VerifyOTP({ payload, router }));
      } else {
         setRequireLengthError("Please enter a valid 6-digit OTP." as string);
      }
   }, [otp, email]);

   // Handler for navigating back
   const handleBack = () => {
      router.push("/forget-password");
   };

   return (
      <div className="pt-1">
         <div className="mb-5">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
               OTP Code
            </div>
            {/* OTP Input */}
            <div className="otp-input-container">
               <OtpInput
                  value={otp}
                  onChange={(value: string) => setOtp(value as string)}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
               />
            </div>
            {requireLengthError !== "" && (
               <strong className="text-xs text-red-500">
                  {requireLengthError}
               </strong>
            )}
            {/* Resend OTP button */}
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
         </div>

         <div className="flex items-center gap-2">
            {/* Back Button */}
            <div
               className="bg-[#dcdff0] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold backdrop-blur-[10px] rounded-[10px] w-full h-12 flex justify-center items-center gap-x-3 cursor-pointer"
               onClick={handleBack} // Navigate back
            >
               <div className="w-[7.67px] h-[13.31px]">
                  <SvgSimpleLeftArrowIcon />
               </div>
               <div>Back</div>
            </div>

            {/* Verify Button */}
            <div
               className="bg-auth-verify-code-btn backdrop-blur-[10px] rounded-[10px] w-full h-12 relative flex justify-center items-center cursor-pointer"
               onClick={handleVerify} // Trigger verification logic
            >
               Verify
            </div>
         </div>
      </div>
   );
}
