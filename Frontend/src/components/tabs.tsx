"use client";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("./Button"), { ssr: false });

type Props = {
   tabs?: any | undefined;
   onTabHandler?: any | undefined;
   tableTab?: any | undefined;
};

export default function ReactTabs({ tabs, onTabHandler, tableTab }: Props) {
   return (
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
         {tabs.length > 0 &&
            tabs.map((tab: any, _i: number) => (
               <li key={_i + 1} className="me-2">
                  <Button
                     type="button"
                     className={` rounded-md py-1 px-2 ${tab === tableTab ? "text-white bg-blue-700" : "hover:text-white hover:bg-blue-700"} transition-all duration-75 ease-linear`}
                     onClick={() => onTabHandler(tab)}
                  >
                     {tab}
                  </Button>
               </li>
            ))}
      </ul>
   );
}
