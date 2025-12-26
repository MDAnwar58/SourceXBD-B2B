"use client";
import React, { useState } from "react";
import { SvgCPRetangularPolygon } from "@/components/SvgPolygon";

import {
   SvgCdEmailIcon,
   SvgCdLinkIcon,
   SvgCdPhoneIcon,
   SvgLocationIcon,
} from "@/components/SvgIcons";
import "../contact-hero.css";
import dynamic from "next/dynamic";
import TextArea from "@/components/react/textarea";
import Axios from "@/app/utils/axios-client";
import { useHotNotify } from "@/components/react/react-hot-toaster";
const Input = dynamic(() => import("@/components/Input"));
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

type Form = {
   name: string;
   phone: string;
   email: string;
   message: string;
};

export default function ContactHero() {
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
      <div className=" bg-gradient-to-r from-[#dddff6] via-[#c0c6f0] to-[#d0d6ff] pt-44 pb-28">
         <div className="container">
            <div className="flex 5lg:justify-start justify-center items-center">
               <div className="5lg:w-6/12 md:w-9/12 w-12/12">
                  <div
                     className="text-left font-['Raleway-Bold',_sans-serif] text-5xl font-bold pb-3 xl:w-[290px]"
                     style={{
                        background:
                           "linear-gradient(45deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     Contact Us
                  </div>

                  <div className="xl:w-[535px] text-[#2f2f2f] text-base font-normal font-['Arial'] pb-10">
                     Lorem ipsum dolor sit amet consectetur. Leo habitant nisi
                     rhoncus massa gravida netus ullamcorper ligula. Dis blandit
                     tristique volutpat quis. Pretium ut posuere nunc massa
                     tellus volutpat sapien venenatis egestas.
                  </div>
                  <div className=" relative">
                     {/* FIXME: problem here */}
                     <div className="relative overflow-hidden z-10">
                        <Img
                           src="/assets/images/Contact-image.png" // Adjust the src to your actual image
                           alt="Main Image"
                           width={500}
                           height={500}
                           className="w-[100%] object-cover rounded-2xl"
                        />
                        <Img
                           src="/assets/images/contact-image-bottom.png" // Adjust the src to your actual image
                           alt="Main Image"
                           width={500}
                           height={500}
                           className=" w-[43%] h-[44%] absolute bottom-[1%] right-[1%]"
                        />
                     </div>
                     {/* FIXME: problem here */}

                     <div className="w-full h-full absolute top-0 left-0 md:block hidden">
                        <div className="w-full h-full relative">
                           <div className="w-[262.33px] h-[262.33px] origin-top-left rotate-[32.83deg] bg-[#ace0ff]/30 rounded-full -z-0 shadow-xl absolute top-[50%] -left-16 transform-translate-y-middle" />
                           <div className="w-[200px] h-[200px] origin-top-left rotate-[32.83deg] bg-[#1b5dcc]/30 rounded-full -z-0 shadow-xl absolute -top-16 -right-[4%]" />
                           <div className="w-[186px] h-[186px] origin-top-left rotate-[32.83deg] bg-[#1b5dcc]/30 rounded-full -z-0 shadow-xl absolute bottom-1 -right-[13%]" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="5lg:w-6/12 5lg:block hidden">
                  <div className=" relative">
                     <div className="relative z-10">
                        <div className=" absolute top-0 left-0 w-full h-full  flex 5lg:justify-center justify-end">
                           <div className=" 3lg:w-[65%] w-[75%] h-full relative">
                              <div className="w-32 h-32 origin-top-left rotate-[32.83deg] bg-blue-700/20 shadow-lg rounded-full absolute  top-4 -left-3 transform-translate-x-middle" />
                              <div className="w-64 h-64 origin-top-left rotate-[32.83deg] bg-sky-200/50 rounded-full absolute  top-[60%] left-[50%] transform-translate-middle" />
                              <div className="absolute  -top-[6.7rem] -right-24">
                                 <SvgCPRetangularPolygon
                                    width={241}
                                    height={248}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="w-full flex 5lg:justify-center justify-end">
                           <form
                              onSubmit={onSubmitContact}
                              ref={(e) => setForm(e)}
                              className="bg-[rgba(255,255,255,0.50)] rounded-[30px] 3lg:w-[65%] w-[75%] p-7"
                              style={{
                                 boxShadow:
                                    "-2px -2px 20px 0px rgba(101, 101, 101, 0.25),2px 2px 20px 0px rgba(0, 0, 0, 0.25)",
                                 backdropFilter: "blur(6.6px)",
                              }}
                           >
                              <div className="pb-5">
                                 <Input
                                    type="text"
                                    className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none focus:!ring-0"
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
                                    className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none focus:!ring-0"
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
                                    className="bg-[rgba(255,255,255,0.60)] rounded-[14px] w-full h-[51px] px-5 border-none focus:!ring-0"
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
                                    className="!bg-[rgba(255,255,255,0.60)] !rounded-2xl w-full !h-32 !px-5 !py-3 border-none focus:!ring-0"
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
                                    className=" bg-blue-gradient rounded-[20px] w-[259px] h-[50px] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
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
                        <div className="w-full  flex 5lg:justify-center justify-end relative z-10 ">
                           <div className=" grid grid-cols-2  gap-7 3lg:w-[65%] w-[75%] mt-7">
                              <div
                                 className="bg-[rgba(255,255,255,0.60)] rounded-[20px] p-4"
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
                                 className="bg-[rgba(255,255,255,0.60)] rounded-[20px] p-4"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 <div className="text-[#4285F4] flex justify-center">
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
                                 className="bg-[rgba(255,255,255,0.60)] rounded-[20px] p-4"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 <div className="flex justify-center">
                                    <SvgCdPhoneIcon
                                       width={24}
                                       height={25}
                                       color="#4285F4"
                                    />
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
                                 className="bg-[rgba(255,255,255,0.60)] rounded-[20px] py-4"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 <div className="flex justify-center">
                                    <SvgCdLinkIcon
                                       width={24}
                                       height={24}
                                       color="#4285F4"
                                    />
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
