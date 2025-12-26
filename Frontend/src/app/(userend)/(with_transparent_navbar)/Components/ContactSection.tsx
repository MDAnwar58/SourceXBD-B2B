"use client";
import React from "react";
import {
   SvgContactUsFirstPolygon,
   SvgContactUsSecondPolygon,
} from "@/components/SvgPolygon";
import {
   SvgCdEmailIcon,
   SvgCdLocationIcon,
   SvgCdPhoneIcon,
} from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const ContactUSForm = dynamic(() => import("./ContactUSForm"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

export default function ContactSection() {
   return (
      <div className="contact-section container pt-[4.6rem] relative ">
         <div
            className="rounded-[30px] w-full sm:pt-10 3xs:pt-9 pt-5 sm:pb-16 3xs:pb-9 pb-5 sm:px-16 3xs:px-9 px-5"
            style={{
               background:
                  "linear-gradient(90.05deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 51.49369239807129%,rgba(208, 214, 255, 1) 100%)",
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className=" grid lg:grid-cols-2 grid-cols-1">
               <div className=" relative">
                  {/* TODO: contact us section background polygon left side start */}
                  <div className=" absolute -bottom-9 -left-[6.7rem] 5lg:inline-block hidden">
                     <SvgContactUsFirstPolygon width={238} height={225} />
                  </div>
                  <div className="bg-[rgba(27,93,204,0.10)] rounded-[50%] w-[136.86px] h-[136.86px] absolute left-[37.5%] top-[74.5%] transform-translate-middle  5lg:inline-block hidden" />
                  <div className="bg-[rgba(172,224,255,0.50)] rounded-[50%] w-[138.07px] h-[138.07px]  absolute left-[70%] bottom-[0.70rem] transform-translate-x-middle  5lg:inline-block hidden" />
                  {/* TODO: contact us section background polygon left side end */}

                  <div className="flex mb-4">
                     <div
                        className="text-left font-['Raleway-ExtraBold',_sans-serif] text-3xl font-extrabold"
                        style={{
                           background:
                              "linear-gradient(100deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Contact Us
                     </div>
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xl font-semibold mb-5">
                     Fill out the Below form to contact us
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Lorem ipsum dolor sit amet consectetur. Leo habitant nisi
                     rhoncus massa gravida netus ullamcorper ligula. Dis blandit
                     tristique volutpat quis. Pretium ut posuere nunc massa
                     tellus volutpat sapien venenatis egestas. Auctor
                     condimentum tortor sit quam adipiscing maecenas faucibus
                     morbi dignissim.
                  </div>

                  <div className="grid 5lg:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 6xs:grid-cols-2 grid-cols-1 gap-7 relative mt-16 lg:w-[75%] w-full">
                     <div
                        className="bg-[rgba(255,255,255,0.60)] rounded-[20px] w-full text-center py-5"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className="overflow-visible flex justify-center pb-[0.10rem]">
                           <SvgCdLocationIcon
                              width={24}
                              height={24}
                              color="#4285F4"
                           />
                        </div>
                        <div className="text-[#4285f4] font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold mb-1">
                           Location
                        </div>
                        <div className="text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           Lorem ipsum dolor sit amet <br /> consectetur
                        </div>
                     </div>
                     <div
                        className="bg-[rgba(255,255,255,0.60)] rounded-[20px] w-full text-center py-5"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className="text-[#4285f4] overflow-visible flex justify-center pb-[0.10rem]">
                           <SvgCdEmailIcon width={24} height={24} />
                        </div>
                        <div className="text-[#4285f4] font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold mb-1">
                           Email
                        </div>
                        <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           naimul46823@gmail.com
                        </div>

                        <div className="text-[#2f2f2f] text-center font-['Heebo-Medium',_sans-serif] text-xs font-medium">
                           info@gmail.com
                        </div>
                     </div>
                     <div
                        className="bg-[rgba(255,255,255,0.60)] rounded-[20px] w-full text-center py-5"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className="overflow-visible flex justify-center pb-[0.10rem]">
                           <SvgCdPhoneIcon
                              width={24}
                              height={24}
                              color="#4285F4"
                           />
                        </div>
                        <div className="text-[#4285f4] font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold mb-1">
                           Phone
                        </div>
                        <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           +880 1953683518
                        </div>

                        <div className="text-[#2f2f2f] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           +880 1953683518
                        </div>
                     </div>
                     <div
                        className="bg-[rgba(255,255,255,0.60)] rounded-[20px] w-full text-center py-5"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className="overflow-visible flex justify-center pb-[0.10rem]">
                           <SvgCdLocationIcon
                              width={24}
                              height={24}
                              color="#4285F4"
                           />
                        </div>
                        <div className="text-[#4285f4] font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold mb-1">
                           Contact Us
                        </div>
                        <div className="text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           Lorem ipsum dolor sit amet <br /> consectetur
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative lg:mt-0 mt-14">
                  <ContactUSForm />
                  {/* TODO: contact us section background polygon right side start */}
                  <div className="xl:w-[65%] lg:w-[85%] w-[100%] lg:block hidden absolute top-[50%] left-[50%] transform-translate-middle h-[430px]">
                     <div className=" relative h-full">
                        <div className=" absolute top-[53%] left-0 transform-translate-middle">
                           <SvgContactUsSecondPolygon
                              width={243}
                              height={251}
                           />
                        </div>
                        <div className="bg-[rgba(172,224,255,0.50)] rounded-[50%] w-[184.88px] h-[184.88px] absolute -top-14 left-[50%] transform-translate-x-middle" />
                        <div className="bg-[rgba(27,93,204,0.20)] rounded-[50%] w-[87.37px] h-[87.37px] absolute -bottom-9 -right-9" />
                     </div>
                  </div>
                  {/* TODO: contact us section background polygon right side end */}
               </div>
            </div>
         </div>
      </div>
   );
}
