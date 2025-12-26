import React from "react";
import {
   SvgFtFacebookIcon,
   SvgFtInstagramIcon,
   SvgFtBehanceIcon,
   SvgFtTwitterIcon,
   SvgFtAppleIcon,
   SvgFtGoogleIcon,
} from "./SvgIcons";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/Input"));
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

export default function Footer() {
   return (
      <footer className="bg-[#2f2f2f] 10xl:px-60 4xl:px-32 1xl2:px-16 xs:px-10 px-5">
         <div className="pt-16 pb-32 lg:flex 1xl2:gap-0 gap-16">
            <div className="6lg:w-[19%] lg:w-[25%] w-full">
               <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-[40px] font-bold mb-1">
                  LOGO
               </div>
               <div className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur. Eu enim natoque tempor
                  est in consectetur porttitor nunc dictum.
               </div>

               <div
                  className="flex bg-[#ffffff] rounded-[30px] xs4:w-[298px] w-full h-[42px] mt-12"
                  style={{
                     borderImage:
                        "linear-gradient(175.17deg,rgba(66, 133, 244, 1) 0%,rgba(83, 118, 183, 1) 100%)",
                     borderImageSlice: 1,
                     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <Input
                     type="email"
                     className="w-full rounded-s-[30px] text-[#000000] font-['Inter-Medium',_sans-serif] text-sm font-medium px-5"
                     placeholder="Email"
                  />
                  <Button
                     type="button"
                     className=" text-white border-none rounded-tr-[30px] rounded-br-[30px] px-3"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                  >
                     Subscribe
                  </Button>
               </div>

               <div className="flex gap-x-8 pt-7">
                  <a>
                     <span>
                        <SvgFtFacebookIcon
                           color="#4285F4"
                           width={24}
                           height={24}
                        />
                     </span>
                  </a>
                  <a>
                     <span>
                        <SvgFtInstagramIcon
                           color="#4285F4"
                           width={24}
                           height={24}
                        />
                     </span>
                  </a>
                  <a>
                     <span>
                        <SvgFtBehanceIcon
                           color="#4285F4"
                           width={24}
                           height={24}
                        />
                     </span>
                  </a>
                  <a>
                     <span>
                        <SvgFtTwitterIcon
                           color="#4285F4"
                           width={24}
                           height={24}
                        />
                     </span>
                  </a>
               </div>
            </div>
            <div className="6lg:w-[81%] lg:w-[75%] w-full text-white pt-16 lg:ps-16">
               <div className="sm:grid grid-cols-12 19xl:gap-20 14xl:gap-16 6lg:gap-10 gap-5">
                  <div className="1xl2:col-span-2 6lg:col-span-6 lg:col-span-4 sm:col-span-4 col-span-12 1xl2:ps-5 sm:pb-0 pb-7">
                     <div className="sm:text-left text-center">
                        <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xl font-bold mb-3">
                           Page
                        </div>
                        <div className="block">
                           <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                              Home
                           </div>

                           <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                              About
                           </div>

                           <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                              Contact
                           </div>

                           <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                              Blog
                           </div>

                           <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                              Organization
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="1xl2:col-span-3 6lg:col-span-6 lg:col-span-8 sm:col-span-4 col-span-12 sm:pb-0 pb-7">
                     <div className="sm:text-left text-center">
                        <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xl font-bold mb-3">
                           Contacts
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           info@gmail.com
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           Emily Burton
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           naimul46823@gmail.com
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           Khulna,Bangladesh
                        </div>
                     </div>
                  </div>
                  <div className="1xl2:col-span-2 6lg:col-span-6 lg:col-span-4 sm:col-span-4 col-span-12 sm:pb-0 pb-7">
                     <div className="sm:text-left text-center">
                        <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xl font-bold mb-3">
                           Links
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           help Center
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           Live Chat
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           Check Order Status
                        </div>
                        <div className="text-[#bcbcbc] font-['Arial-Regular',_sans-serif] text-sm font-normal mb-2">
                           Refunds
                        </div>
                     </div>
                  </div>
                  <div className=" 1xl2:col-span-5 6lg:col-span-6 lg:col-span-8 col-span-12 sm:pb-0 pb-7">
                     <div className="text-[#ffffff] sm:text-left text-center font-['Raleway-Bold',_sans-serif] text-xl font-bold mb-3">
                        Download App
                     </div>
                     <div className="sm:grid grid-cols-3 items-end">
                        <Img
                           src="/assets/images/qr_code.png"
                           alt="pr code"
                           width={200}
                           height={200}
                           className="sm:w-full w-[200px] 17xl:h-[150px] lg:h-[130px] md:h-[211px] sm:h-[181px] 6xs:h-[161px] h-[141px] sm:mx-0 mx-auto rounded-[10px] border-solid border-[#4285f4] border-2 p-2"
                        />
                        <div className="ps-7 col-span-2 sm:pt-0 pt-5">
                           <button
                              type="button"
                              className="rounded-[10px] flex items-center px-3 py-[0.60rem] mb-5 sm:mx-0 mx-auto"
                              style={{
                                 background:
                                    "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%,rgba(37, 37, 37, 1) 100%)",
                              }}
                           >
                              <div className="me-2">
                                 <SvgFtAppleIcon
                                    width={24}
                                    height={24}
                                    color="white"
                                 />
                              </div>
                              <div>
                                 <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
                                    Available on the
                                 </div>

                                 <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                    Apple Store
                                 </div>
                              </div>
                           </button>

                           <button
                              type="button"
                              className="rounded-[10px] flex items-center px-3 py-[0.60rem]  sm:mx-0 mx-auto"
                              style={{
                                 background:
                                    "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%,rgba(37, 37, 37, 1) 100%)",
                              }}
                           >
                              <div className="me-2">
                                 <SvgFtGoogleIcon width={24} height={24} />
                              </div>
                              <div>
                                 <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
                                    GET IT ON
                                 </div>

                                 <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                                    GOOGLE PLAY
                                 </div>
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="text-white sm:flex justify-between items-center border-t-2 border-solid border-white py-6">
            <div className="font-['Inter-Medium',_sans-serif] text-md font-medium sm:text-left text-center">
               <div>
                  Copyright ©2024 All rights reserved | This Website is made
                  with <b className="text-blue-500">by Naimul islam</b>
               </div>
            </div>
            <div className="xs4:flex flex-row gap-10 items-start sm:justify-start justify-center sm:pt-0 pt-3">
               <div className="text-[#ffffff] xs4:text-right text-center font-['Inter-Bold',_sans-serif] text-base leading-[22px] font-bold xs4:pb-0 pb-3">
                  Privacy policy
               </div>
               <div className="text-[#ffffff] xs4:text-right text-center font-['Inter-Bold',_sans-serif] text-base leading-[22px] font-bold relative">
                  Terms &amp; conditions
               </div>
            </div>
         </div>
      </footer>
   );
}
