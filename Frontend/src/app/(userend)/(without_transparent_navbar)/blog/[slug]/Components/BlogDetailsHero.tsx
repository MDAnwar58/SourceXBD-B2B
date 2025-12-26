import { LocalUrl } from "@/components/react/localhost";
import {
   LimitedText,
   useWordsShorting,
} from "@/components/react/react-shorting";
import React from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

type Props = {
   blog: any;
};

export default function BlogDetailsHero({ blog }: Props) {
   const localUrl = LocalUrl();
   const image = localUrl + "/" + blog?.images?.join(", ");
   const title = useWordsShorting({ text: blog?.title || "", maxWords: 5 });
   return (
      <div className=" relative">
         <Img
            src={image.toString()}
            alt="read user avatar"
            width={1550}
            height={400}
            className="h-[75vh] w-full" // h-[75vh]
         />

         <div
            className=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(47,47,47,0.50)]"
            style={{ backdropFilter: "blur(2px)" }}
         >
            <div className="container">
               <div className=" text-center">
                  {blog?.type && (
                     <Button
                        type="button"
                        className="bg-[#90a8e7] capitalize rounded px-5 py-2 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(144, 168, 231, 1),2px 2px 10px 0px rgba(144, 168, 231, 1)",
                        }}
                     >
                        {blog?.type}
                     </Button>
                  )}

                  {blog?.title && (
                     <div className="font-['Raleway-ExtraBold',_sans-serif] 3sm:text-6xl 4xs:text-5xl xs:text-4xl xs4:text-3xl xs6:text-2xl text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#4285F4] to-[#264D8E] 3sm:w-[650px] mx-auto text-center py-7">
                        {title}
                     </div>
                  )}

                  <div className="flex 3xs:flex-row flex-col 3xs:gap-0 gap-3 items-center justify-center">
                     <div className="">
                        <Img
                           src="/assets/images/read-user.png"
                           alt=""
                           width={200}
                           height={200}
                           className="rounded-[50%] w-[52px] h-[52px]"
                           style={{ objectFit: "cover" }}
                        />
                     </div>
                     <div className="text-[#ffffff] xs:text-left text-center font-['Raleway-Bold',_sans-serif] text-base font-bold ps-3">
                        Alex Thomas -jun 29,2024/12 min Read
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
