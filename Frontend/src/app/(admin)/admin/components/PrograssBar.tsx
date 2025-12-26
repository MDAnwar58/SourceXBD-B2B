import React from "react";

type Props = {
   prograss?: any | undefined;
   stepType?: any | undefined;
};

export default function PrograssBar({ prograss, stepType }: Props) {
   return (
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
         <div
            className={`${stepType === "highest" ? "bg-[#5fd200]" : stepType === "high" ? "bg-[#90FF38]" : stepType === "middle" ? "bg-[#ffdb38]" : stepType === "low" ? "bg-[#ff7e38]" : "bg-red-500"} h-2 rounded-full`}
            style={{ width: `${prograss}%` }}
         />
      </div>
   );
}
