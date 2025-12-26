"use client";
import React, { useEffect, useState } from "react";
import BecomeASallerRegisterForm from "./BecomeASallerRegisterForm";
import BecomeASallerRightSide from "./BecomeASallerRightSide";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/auth/store";
import {
   getCities,
   getCountries,
} from "@/saller/auth/features/SallerAuthAction";
import { getLocalStorage } from "@/components/react/storage";

export default function BecomeASallerContent() {
   const [message, setMessage] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getCountries());
      dispatch(getCities());
   }, [dispatch]);

   return (
      <div className="5xl:max-w-[1421px] px-3 pb-3 lg:px-20 5xl:px-0 mx-auto xl:pt-9 pt-5">
         <div className="flex xl:flex-row flex-col gap-7">
            <BecomeASallerRegisterForm />
            <BecomeASallerRightSide />
         </div>
      </div>
   );
}
