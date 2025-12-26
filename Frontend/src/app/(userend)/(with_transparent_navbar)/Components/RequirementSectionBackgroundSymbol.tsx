import React, { Fragment } from "react";

export default function RequirementSectionBackgroundSymbol() {
   return (
      <Fragment>
         <div
            className="bg-[#ffffff] rounded-[50%] w-[30px] h-[30px] absolute xs:-top-1 -top-4 left-3"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         />
         <div
            className="bg-[#ace0ff] w-[15.31px] h-[15.31px]  absolute 4xs:-top-1 xs:-top-2 -top-3 xs:rotate-[-11.896deg] rotate-[-15.896deg] scale-100 right-[2.4rem]"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               transformOrigin: "0 0",
            }}
         />
         <div
            className="bg-[#ace0ff] w-[24.56px] h-[24.56px] absolute 4xs:bottom-2 xs:bottom-4 bottom-1 4xs:left-3 xs:left-0 left-0 4xs:-rotate-3 -rotate-[-3deg] scale-100"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         />
         <div
            className="bg-[#85b2fd] rounded-[50%] w-[46px] h-[46px] absolute 4xs:bottom-0 xs:-bottom-2 -bottom-4 -right-0"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         />
         <div className="bg-[#4285f4] rounded-[10px] w-[91px] h-[39px] absolute xs:top-[4.7rem] top-[3.3rem] 4xs:-left-[4.3rem] xs:-left-[3.3rem] -left-[3.7rem] flex justify-center items-center">
            <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium w-[63px]">
               Lorem ipsum dolor
            </div>
         </div>
         <div className="bg-[rgba(172,224,255,0.80)] rounded-[10px] w-[98px] h-[38px] absolute 4xs:top-32 xs:top-[7.5rem] xs5:top-[5.7rem] top-[6rem] 4xs:-right-[5rem] xs:-right-[4.9rem] xs5:-right-[4.3rem] -right-[3.8rem] flex justify-center items-center">
            <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium w-[70px]">
               Lorem ipsum dolor sit amet
            </div>
         </div>
      </Fragment>
   );
}
