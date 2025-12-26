"use client";
import Axios from "@/app/utils/axios-client";
import { useHotNotify } from "@/components/react/react-hot-toaster";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const TextArea = dynamic(() => import("@/components/react/textarea"), {
   ssr: false,
});

type Form = {
   name: string;
   phone: string;
   email: string;
   message: string;
};

export default function ContactUSForm() {
   const [err, setErr] = useState<object>({});
   const [form, setForm] = useState<HTMLFormElement | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   async function onSubmitContact(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await Axios.post("/contact-us", formData)
         .then((res) => {
            setLoading(true);
            setErr({});
            form?.reset();
            useHotNotify(res.data.msg, "success", 1000);
            setTimeout(() => {
               setLoading(false);
            }, 1000);
         })
         .catch((err) => setErr(err.response.data.errors));
   }

   const error = err as Form;
   return (
      <div className="xl:w-[65%] lg:w-[85%] md:w-[65%] sm:w-[85%] 6xs:w-[95%] w-full absolute top-[50%] left-[50%] transform-translate-middle  relative z-20">
         <form
            onSubmit={onSubmitContact}
            ref={(e) => setForm(e)}
            className="bg-[rgba(255,255,255,0.50)] rounded-[30px] xs:p-9 xs3:p-7 p-5"
            style={{ backdropFilter: "blur(6.6px)" }}
         >
            <div className="pb-4">
               <Input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 bg-[rgba(255,255,255,0.60)] rounded-[14px] h-[51px] font-['Raleway-Bold',_sans-serif] text-xs font-bold border-none focus:!ring-0"
                  name="name"
               />
               {error.name && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.name}
                  </small>
               )}
            </div>
            <div className="pb-4">
               <Input
                  type="text"
                  placeholder="Telephone"
                  className="w-full px-5 bg-[rgba(255,255,255,0.60)] rounded-[14px] h-[51px] font-['Raleway-Bold',_sans-serif] text-xs font-bold border-none focus:!ring-0"
                  name="phone"
               />
               {error.phone && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.phone}
                  </small>
               )}
            </div>
            <div className="pb-4">
               <Input
                  type="text"
                  placeholder="Email"
                  className="w-full px-5 bg-[rgba(255,255,255,0.60)] rounded-[14px] h-[51px] font-['Raleway-Bold',_sans-serif] text-xs font-bold border-none focus:!ring-0"
                  name="email"
               />
               {error.email && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.email}
                  </small>
               )}
            </div>
            <div className="pb-5">
               <TextArea
                  className="w-full !px-5 !py-3 !h-[87px] !bg-[rgba(255,255,255,0.60)] rounded-2xl font-['Raleway-Bold',_sans-serif] text-xs font-bold border-none focus:!ring-0"
                  placeholder="Message"
                  name="message"
               />

               {error.message && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.message}
                  </small>
               )}
            </div>
            <div className=" text-center">
               <Button
                  type="submit"
                  className={`rounded-[20px] w-full h-[50px] text-white ${
                     loading === true
                        ? " bg-blue-gradient-disable"
                        : "bg-blue-gradient"
                  }`}
                  style={{
                     boxShadow:
                        "2px 2px 15px 0px rgba(0, 0, 0, 0.25),-2px -2px 15px 0px rgba(255, 255, 255, 0.25)",
                  }}
               >
                  GET A FREE QUOTE
               </Button>
            </div>
         </form>
      </div>
   );
}
