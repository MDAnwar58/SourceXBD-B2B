import React from "react";

type Props = {
   tabs: any;
   organisationTab: string;
   setOrganisationTab: React.Dispatch<React.SetStateAction<string>>;
};

export default function OrganisationTab({
   tabs,
   organisationTab,
   setOrganisationTab,
}: Props) {
   return (
      <div className="pt-10 ">
         <div
            className="bg-[#ffffff] rounded-[20px] py-6 px-12 w-full flex 3xs:flex-row flex-col items-center gap-x-10 3xs:gap-y-0 gap-y-1"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            {tabs.length > 0 &&
               tabs.map((tab: { name: string }, index: number) => {
                  if (tab?.name === organisationTab) {
                     return (
                        <div
                           key={index}
                           className=" cursor-pointer"
                           onClick={() => setOrganisationTab(tab?.name)}
                        >
                           <div className="text-[#92aae9] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold transition-all duration-300 ease-linear">
                              <div>{tab?.name}</div>
                              <div className=" pt-[.15rem] px-4 flex justify-center">
                                 <span className=" inline-flex w-16 h-[2px] bg-[#90a8e7] drop-shadow-md"></span>
                              </div>
                           </div>
                        </div>
                     );
                  } else {
                     return (
                        <div
                           key={index}
                           className="cursor-pointer text-[#565656] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium"
                           onClick={() => setOrganisationTab(tab?.name)}
                        >
                           {tab?.name}
                        </div>
                     );
                  }
               })}
         </div>
      </div>
   );
}
