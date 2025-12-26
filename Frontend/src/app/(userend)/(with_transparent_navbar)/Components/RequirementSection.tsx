"use client";
import React from "react";
import { SvgTriangleIcon, SvgVoiceRecorderIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
import Img from "@/components/Image";
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"));
const RequirementImageArea = dynamic(() => import("./RequirementImageArea"), {
   ssr: false,
});

export default function RequirementSection() {
   return (
      <div className=" container requirement-section pb-14">
         <div
            className="rounded-[30px]"
            style={{
               background:
                  "linear-gradient(90.42deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240,  1) 52.49999761581421%,rgba(208, 214, 255, 1) 100%)",
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="sm:py-10 4xs:py-7 py-5 sm:px-16 4xs:px-12 px-7 grid lg:grid-cols-2 grid-cols-1">
               <div className="w-full h-full relative">
                  {/* TODO: Requirement Background symbol start */}
                  <div className=" absolute -bottom-8 -right-16 lg:inline-block hidden">
                     <SvgTriangleIcon width={203} height={212} />
                  </div>
                  {/* TODO: Requirement Background symbol end */}

                  <div className=" relative">
                     <div
                        className="text-left font-['Raleway-ExtraBold',_sans-serif] text-3xl font-extrabold mb-3 z-10"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Post Buy Requirement
                     </div>
                     <div className="text-[#2F2F2F] text-left font-['Inter-Medium',_sans-serif] text-base font-medium">
                        Tell us what you need, and we{"'"}ll help you get quotes
                     </div>
                     <div
                        className="bg-[#ffffff] rounded-[5px] h-1 my-5 z-10"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className="bg-[#4285F4] w-[50%] h-full rounded-[5px]"></div>
                     </div>

                     {/* TODO: requirement image area start */}
                     <RequirementImageArea />
                     {/* TODO: requirement image area END */}

                     <div className="lg:pe-9 z-10">
                        <div className="pt-5">
                           <span className="text-[#2f2f2f] text-base font-extrabold font-[''Inter-Medium',_sans-serif']">
                              Provide the below details to get quick quotes from
                              sellers
                           </span>
                           <span className="text-[#4285f4] text-base font-extrabold font-['Raleway']">
                              *
                           </span>
                        </div>

                        <Input
                           type="search"
                           className="w-full px-5 my-5 bg-[#ffffff] rounded-2xl h-[43px] border-none text-[#494949] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                           placeholder="Enter the product,What are looking for......."
                        />

                        {/* <div className="grid grid-cols-12 gap-5 mb-7">
                           <div className="col-span-3">
                              <div
                                 className="flex items-center bg-[#ffffff] rounded-2xl border-solid border-[#4285f4] border w-full h-[43px]"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 <Button
                                    type="button"
                                    className="bg-[#4285f4] rounded-tl-2xl rounded-bl-2xl w-full "
                                 >
                                    <span className="flex justify-center items-center h-[43px]">
                                       <SvgBangladeshFlahIcon
                                          width={24}
                                          height={24}
                                       />
                                       <SvgDownArrowIcon
                                          width={16}
                                          height={16}
                                          color="white"
                                       />
                                    </span>
                                 </Button>
                                 <div className="text-[rgba(0,0,0,0.50)] text-left font-['Heebo-Medium',_sans-serif] text-xs font-medium ps-2 pe-3">
                                    +880
                                 </div>
                              </div>
                           </div>
                           <div className="col-span-9">
                              <Input
                                 type="search"
                                 className="bg-[#ffffff] rounded-2xl w-full h-[43px] border-none text-[#494949] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium px-5"
                                 placeholder="Enter Mobile Number......."
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              />
                           </div>
                        </div> */}

                        <div className="text-left pt-16">
                           <div className="text-[#2f2f2f] text-md font-medium pb-3">
                              Personalise your inquiry
                           </div>
                           <div className="text-black text-xs">
                              Now, record your requirement to communicate
                              clearly &amp; faster with <br /> sellers than ever
                              before.
                           </div>
                        </div>

                        <div
                           className="rounded-2xl h-[85px] w-full relative mt-5"
                           style={{
                              background:
                                 "linear-gradient(175.65deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 85.50000190734863%)",
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(91, 91, 91, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           <div className="grid grid-cols-3 h-full">
                              <div className=" col-span-2 flex items-center px-7 text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium">
                                 <span>Click Here To Record......</span>
                              </div>
                              <div className=" relative w-full h-full flex items-center">
                                 <div className=" h-full flex items-center justify-end">
                                    <Img
                                       src="/assets/images/voice-record-animation.png"
                                       alt="..."
                                       width={182}
                                       height={45}
                                       className="w-[95%] h-[45px] absolute top-[50%] left-0 transform-translate-y-middle"
                                    />
                                 </div>

                                 <Button
                                    type="button"
                                    className=" absolute top-[50%] right-10 transform-translate-y-middle"
                                 >
                                    <SvgVoiceRecorderIcon
                                       width={48}
                                       height={48}
                                       color="#4285F4"
                                    />
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* TODO: requirement right side part start */}
               <div className=" block">
                  <div className=" relative lg:flex hidden justify-center items-center h-[85%]">
                     <div
                        className="rounded-[50%] border-solid border-[#ffffff] border-2 w-[310px] h-[310px] relative"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        {/* TODO: requirement right side part's background symbol start */}
                        <div
                           className="bg-[rgba(172,224,255,0.10)] rounded-[50%] shadow-2xl w-[91.38px] h-[91.38px] absolute top-0 left-7"
                           style={{
                              transformOrigin: "0 0",
                              transform: "rotate(-32.832deg) scale(-1, 1)",
                           }}
                        ></div>
                        <div className=" absolute -top-[4.5rem] -right-10 -rotate-12">
                           <SvgTriangleIcon width={203} height={212} />
                        </div>
                        <div className=" absolute -bottom-[6.9rem] left-10 -rotate-[17deg]">
                           <SvgTriangleIcon width={203} height={212} />
                        </div>
                        {/* TODO: requirement right side part's background symbol end */}
                        <div
                           className="bg-[#2f2f2f] rounded-[50%] w-[50%] h-[50%] absolute top-[50%] left-[50%] transform-translate-middle"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        ></div>

                        <div
                           className="bg-[rgba(27,93,204,0.30)] rounded-[50%] w-[85%] h-[85%] absolute top-[50%] left-[50%] transform-translate-middle relative"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           {/* TODO: background symbol start */}
                           <div
                              className="bg-[#ffffff] rounded-[50%] w-[30px] h-[30px] absolute -top-1 left-3"
                              style={{
                                 boxShadow:
                                    "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                              }}
                           />
                           <div
                              className="bg-[#ace0ff] w-[15.31px] h-[15.31px]  absolute -top-1 right-[2.4rem]"
                              style={{
                                 boxShadow:
                                    "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 transformOrigin: "0 0",
                                 transform: "rotate(-11.896deg) scale(1, 1)",
                              }}
                           />
                           <div
                              className="bg-[#ace0ff] w-[24.56px] h-[24.56px] absolute bottom-2 left-3 -rotate-3"
                              style={{
                                 boxShadow:
                                    "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                              }}
                           />
                           <div
                              className="bg-[#85b2fd] rounded-[50%] w-[46px] h-[46px] absolute bottom-0 -right-0"
                              style={{
                                 boxShadow:
                                    "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                              }}
                           />
                           <div className="bg-[#4285f4] rounded-[10px] w-[91px] h-[39px] absolute top-[4.7rem] -left-[4.3rem] flex justify-center items-center">
                              <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium w-[63px]">
                                 Lorem ipsum dolor
                              </div>
                           </div>
                           <div className="bg-[rgba(172,224,255,0.80)] rounded-[10px] w-[98px] h-[38px] absolute top-32 -right-[5rem] flex justify-center items-center">
                              <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium w-[70px]">
                                 Lorem ipsum dolor sit amet
                              </div>
                           </div>

                           {/* TODO: background symbol end */}
                           <div
                              className="bg-[rgba(172,224,255,0.50)] rounded-[50%] w-[80%] h-[80%] absolute top-[50%] left-[50%] transform-translate-middle relative"
                              style={{
                                 boxShadow:
                                    "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                              }}
                           >
                              <div
                                 className="w-[155px] h-[198.09px] aspect-[3/4] absolute -top-4 left-[50%] transform-translate-x-middle overflow-hidden z-10"
                                 style={{
                                    borderRadius: "100% / 125% 125% 80% 80%",
                                 }}
                              >
                                 <Img
                                    src="/assets/images/requirement-men.png"
                                    alt="men"
                                    width={200}
                                    height={200}
                                    className="rounded-full w-[195px] h-[208.09px] absolute -bottom-7 left-0 -z-0"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="h-[15%] flex justify-end pt-11">
                     <Button
                        type="button"
                        className=" capitalize rounded-[26px] w-[178px] h-[62px] flex justify-center items-center text-white"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        continue
                     </Button>
                  </div>
               </div>
               {/* TODO: requirement right side part end */}
            </div>
         </div>
      </div>
   );
}
