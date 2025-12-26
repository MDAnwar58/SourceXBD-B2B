import { PlusSvgIcon } from "@/app/(admin)/admin/components/SvgIcons";
import Img from "@/components/Image";
import { LocalUrl } from "@/components/react/localhost";
import React, { Fragment } from "react";

type BuyerInfo = {
   name: string;
   role: string;
   image: string;
};

type Props = {
   buyerInfo: BuyerInfo | any;
};

export default function UserInfo({ buyerInfo }: Props) {
   const localUrl: string = LocalUrl();
   let imageUrl = "";
   if (buyerInfo?.image) {
      const storeFilePath = buyerInfo?.image;
      const forwardSlash = "/";
      const storeImageUrl = forwardSlash.concat(storeFilePath);
      const imagePath = localUrl.concat(storeImageUrl);
      imageUrl = imagePath;
   }
   // console.log(sellerInfo);
   return (
      <Fragment>
         <div className="bg-[#d9d9d9] rounded-[14px] 18xl:h-72 6lg:h-64 lg:h-80 xs3:h-64 xs4:h-56 h-48 relative flex items-center justify-center">
            <div className=" flex items-center gap-x-3">
               <div className="w-3.5 h-3.5">
                  <PlusSvgIcon />
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold">
                  Add a Cover Photo
               </div>
            </div>
            <div className="bg-[#4285F499] rounded-md px-4 py-1 absolute top-2 left-2">
               <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                  {buyerInfo?.role}
               </div>
            </div>
            <div className="hidden bg-[rgba(66,133,244,0.60)] rounded-md px-4 py-1 absolute top-2 left-2">
               <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                  {buyerInfo?.role}
               </div>
            </div>
            <div
               className="
            bg-white 10xl:w-[160px] 7xl:w-[130px] 4xl:w-[160px] 2xl:w-[140px] 1xl:w-[125px] 6lg:w-[105px] lg:w-[205px] 3md:w-[160px] md:w-[125px] 4xs:w-[160px] xs:w-[140px] xs3:w-[125px] w-[105px] 
            10xl:h-[160px] 7xl:h-[130px] 4xl:h-[160px] 2xl:h-[140px] 1xl:h-[125px] 6lg:h-[105px] lg:h-[205px] 3md:h-[160px] md:h-[125px] 4xs:h-[160px] xs:h-[140px] xs3:h-[125px] h-[105px]
             absolute 24xl:left-[17%] 23xl:left-[17.5%] 22xl:left-[18%] 21xl:left-[18.5%] 20xl:left-[19%] 19xl:left-[19.5%] 18xl:left-[20%] 17xl:left-[20.5%] 
             16xl:left-[21%] 15xl:left-[21.5%] 14xl:left-[22%] 13xl:left-[22.5%] 12xl:left-[23%] 11xl:left-[23.5%] 10xl:left-[24%] 9xl:left-[22%] 8xl:left-[22.3%] 
             7xl:left-[22%] 6xl:left-[23%] 5xl:left-[24%] 4xl:left-[25%] 3xl:left-[23%] 2xl:left-[26.5%] xl:left-[23%] 6lg:left-[25%] 3lg:left-[19%] 2lg:left-[20%] 
             lg:left-[21%] 6md:left-[19%] 5md:left-[20%] 4md:left-[22%] 3md:left-[24%] 2md:left-[21%] md:left-[23%] 2sm:left-[17%] sm:left-[19%] 6xs:left-[20%] 
             4xs:left-[23%] 3xs:left-[24%] xs4:left-[25%] left-[27%] 
             10xl:-bottom-20 7xl:-bottom-[4.1rem] 4xl:-bottom-20 2xl:-bottom-16 1xl:-bottom-14 6lg:-bottom-12 lg:-bottom-24 3md:-bottom-20 md:-bottom-16 4xs:-bottom-20 
             xs:-bottom-16 xs3:-bottom-[3.7rem] -bottom-12
             transform-translate-x-middle rounded-full
             "
            >
               <div className="flex justify-center items-center w-full h-full">
                  {imageUrl ? (
                     <Img
                        src={imageUrl}
                        alt="user avatar"
                        width={300}
                        height={300}
                        className=" w-[85%] h-[85%]"
                     />
                  ) : (
                     <Img
                        src="/assets/images/user-demo-avatar.png"
                        alt="user avatar"
                        width={300}
                        height={300}
                        className=" w-[85%] h-[85%]"
                     />
                  )}
               </div>
            </div>
         </div>

         <div className="flex items-center pt-[5.3rem]">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
               {buyerInfo?.name}
            </div>
            {/* <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
               ( team Manager )
            </div> */}
         </div>
      </Fragment>
   );
}
