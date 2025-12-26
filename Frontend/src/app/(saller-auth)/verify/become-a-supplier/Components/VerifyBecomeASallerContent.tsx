"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/auth/store";
import {
   getCities,
   getCountries,
   verifyBecomeASupplier,
} from "@/saller/auth/features/SallerAuthAction";
import OtpInput from "react-otp-input";
import "../verify-code.css";
import Button from "@/components/Button";
import {
   getLocalStorage,
   removeLocalStorage,
} from "@/components/react/storage";
import { useRouter } from "next/navigation";

export default function VerifyBecomeASallerContent() {
   const [otp, setOtp] = useState<string>("");
   const [message, setMessage] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [cacheKey, setCacheKey] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getCountries());
      dispatch(getCities());
   }, [dispatch]);

   useEffect(() => {
      const verifyMsg = getLocalStorage("verify-msg");
      const verifyEmail = getLocalStorage("verify-email");
      const verifyCacheKey = getLocalStorage("verify-cache-key");
      if (!verifyMsg && !verifyEmail && !verifyCacheKey) {
         router.push("/become-a-supplier");
      }
      if (verifyMsg !== null) {
         setMessage(verifyMsg);
      }
      if (verifyEmail !== null) {
         setEmail(verifyEmail);
      }
      if (verifyCacheKey !== null) {
         setCacheKey(verifyCacheKey);
      }
      const timeoutId = setTimeout(() => {
         removeLocalStorage("verify-msg");
         removeLocalStorage("verify-email");
         removeLocalStorage("verify-cache-key");
         setMessage("");
         setEmail("");
         setCacheKey("");
      }, 1800000);
      // Clean up the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
   }, [router]);

   const onHandleVerifyBecomeASupplier = () => {
      const payload = {
         code: Number(otp),
         cache_key: cacheKey,
      };
      dispatch(verifyBecomeASupplier({ payload, router }));
   };

   return (
      <div className="5xl:max-w-[1421px] px-3 pb-3 lg:px-20 5xl:px-0 mx-auto xs6:pt-32 pt-20">
         <div className="flex xl:flex-row flex-col gap-7">
            <div className="w-full">
               <div className="xs3:max-w-[355px] w-full mx-auto">
                  <div className="text-[#98b0ee] text-center font-['Raleway-Bold',_sans-serif] text-[32px] leading-[117.46%] font-bold pb-3">
                     Verify As Supplier
                  </div>
                  {message && (
                     <p className="text-center text-gray-500 font-medium text-sm">
                        {message + " "}Please check your email!
                     </p>
                  )}
                  {email && (
                     <div className=" text-center pt-1 pb-3">
                        <strong className="text-green-500">{email}</strong>
                     </div>
                  )}
                  <div>
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs leading-[117.46%] font-medium pb-1">
                        OTP Code
                     </div>

                     <div className="otp-input-container">
                        <OtpInput
                           value={otp}
                           onChange={(value: string) => setOtp(value as string)}
                           numInputs={6}
                           renderInput={(props) => <input {...props} />}
                        />
                     </div>
                     {/* {errors.company_name && (
                  <small className="text-red-500 text-xs font-medium">
                     {errors.company_name}
                  </small>
               )} */}
                     <div className="pt-4">
                        <Button
                           type="button"
                           className=" bg-blue-gradient text-white text-md font-semibold uppercase w-full py-2 rounded-lg "
                           onClick={onHandleVerifyBecomeASupplier}
                        >
                           Verify
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
