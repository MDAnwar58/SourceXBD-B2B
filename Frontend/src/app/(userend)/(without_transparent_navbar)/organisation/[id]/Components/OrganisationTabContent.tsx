import React from "react";

type Props = {
   sallerProfile: {
      industry: string;
      desc: any;
   };
};

export default function OrganisationTabContent({ sallerProfile }: Props) {
   return (
      <div className="pt-9">
         <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold 7xs:w-[600px]">
            {sallerProfile?.industry}
         </div>
         <p
            className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xl leading-7 font-normal pt-5"
            dangerouslySetInnerHTML={{ __html: sallerProfile?.desc }}
         />
      </div>
   );
}
