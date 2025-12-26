"use client";
import React, { useState } from "react";
import {
   SvgCdEmailIcon,
   SvgCdLinkIcon,
   SvgCdPhoneIcon,
   SvgLocationIcon,
} from "@/components/SvgIcons";
import dynamic from "next/dynamic";
import TextArea from "@/components/react/textarea";
import Axios from "@/app/utils/axios-client";
import { useHotNotify } from "@/components/react/react-hot-toaster";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

type Form = {
   name: string;
   phone: string;
   email: string;
   message: string;
};

export default function ContactForm() {
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
      <div
         className="md:w-7/12 sm:w-8/12 6xs:w-9/12 3xs:w-11/12 rounded-[30px] mt-14  5lg:hidden block xs:p-7 p-5 mx-auto"
         style={{
            background:
               "linear-gradient(90.92deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 56.00000023841858%,rgba(208, 214, 255, 1) 100%)",
            boxShadow:
               "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div>
            <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold pb-1">
               Contact Us
            </div>
            <div className="text-gray-700 text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
               Fill out the Below form to contact us
            </div>
            <div className="text-gray-600 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal pb-5">
               Lorem ipsum dolor sit amet consectetur. Leo habitant nisi rhoncus
               massa gravida netus ullamcorper ligula.
            </div>
         </div>
         <form
            onSubmit={onSubmitContact}
            ref={(e) => setForm(e)}
            className="bg-[rgba(255,255,255,0.50)] rounded-[30px] w-full xs3:p-7 p-5"
            style={{
               boxShadow:
                  "-2px -2px 20px 0px rgba(101, 101, 101, 0.25),2px 2px 20px 0px rgba(0, 0, 0, 0.25)",
               backdropFilter: "blur(6.6px)",
            }}
         >
            <div className="pb-5">
               <Input
                  type="text"
                  className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none"
                  placeholder="Name"
                  name="name"
               />
               {error.name && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.name}
                  </small>
               )}
            </div>
            <div className="pb-5">
               <Input
                  type="text"
                  className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none"
                  placeholder="Telephone"
                  name="phone"
               />
               {error.phone && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.phone}
                  </small>
               )}
            </div>
            <div className="pb-5">
               <Input
                  type="email"
                  className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none"
                  placeholder="Email"
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
                  className="!bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-32 px-5 !py-3"
                  placeholder="Message"
                  name="message"
               />

               {error.message && (
                  <small className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-xs font-semibold">
                     {error.message}
                  </small>
               )}
            </div>
            <div className="flex justify-center">
               <Button
                  type="submit"
                  className={`${loading === true ? " bg-blue-gradient-disable" : "bg-blue-gradient"} rounded-[20px] xs:w-[259px] w-full h-[50px] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center`}
                  style={{
                     boxShadow:
                        "2px 2px 15px 0px rgba(0, 0, 0, 0.25),-2px -2px 15px 0px rgba(255, 255, 255, 0.25)",
                  }}
               >
                  GET A FREE QUOTE
               </Button>
            </div>
         </form>
         <div className=" grid xs:grid-cols-2 grid-cols-1  gap-7 5lg:w-[65%] w-full mt-7">
            <div
               className="bg-[rgba(255,255,255,0.60)] rounded-[20px] xs:p-4 p-9"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <div className="w-6 h-6 text-[#4285F4]">
                     <SvgLocationIcon />
                  </div>
               </div>
               <div
                  className="text-center font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold w-20 mx-auto"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Location
               </div>

               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                  Lorem ipsum dolor sit amet consectetur
               </div>
            </div>
            <div
               className="bg-[rgba(255,255,255,0.60)] rounded-[20px] xs:p-4 p-9"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center text-[#4285F4]">
                  <SvgCdEmailIcon width={24} height={24} />
               </div>
               <div
                  className="text-center font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold w-20 mx-auto"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Email
               </div>

               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                  Lorem ipsum dolor sit amet consectetur
               </div>
            </div>
            <div
               className="bg-[rgba(255,255,255,0.60)] rounded-[20px] xs:p-4 p-9"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgCdPhoneIcon width={24} height={25} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold w-16 mx-auto"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Phone
               </div>
               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                  +880 1953683518
               </div>

               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  +880 1953683518
               </div>
            </div>
            <div
               className="bg-[rgba(255,255,255,0.60)] rounded-[20px] xs:p-4 p-9"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgCdLinkIcon width={24} height={24} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold w-24 mx-auto"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Contact Us
               </div>
               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                  +880 1953683518
               </div>

               <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  +880 1953683518
               </div>
            </div>
         </div>
      </div>
   );
}
