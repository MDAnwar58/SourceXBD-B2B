import React from "react";
import BecomeASallerRegisterForm from "./Components/BecomeASallerRegisterForm";
import BecomeASallerRightSide from "./Components/BecomeASallerRightSide";

export default function BecomeASupplier() {
   return (
      <div className="5xl:max-w-[1421px] px-3 pb-3 lg:px-20 5xl:px-0 mx-auto xl:pt-9 pt-5">
         <div className="flex xl:flex-row flex-col gap-7">
            <BecomeASallerRegisterForm />
            <BecomeASallerRightSide />
         </div>
      </div>
   );
}
