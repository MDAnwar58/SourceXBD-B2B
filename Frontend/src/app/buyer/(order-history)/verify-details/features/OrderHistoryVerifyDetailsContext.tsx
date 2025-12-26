import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/buyer/store";
import { generate_quotation } from "./OrderHistoryVerifyDetailsAction";

export default function OrderHistoryVerifyDetailsContext() {
   const primary_email = useRef<HTMLInputElement>(null);
   const alternate_email = useRef<HTMLInputElement>(null);
   const address = useRef<HTMLInputElement>(null);

   const dispatch = useDispatch<AppDispatch>();

   const generateQuotation = () => {
      const PrimaryEmail = primary_email.current as HTMLInputElement;
      const AlternateEmail = alternate_email.current as HTMLInputElement;
      const Address = address.current as HTMLInputElement;

      const formData = new FormData();
      formData.append("primary_email", PrimaryEmail.value);
      formData.append("alternate_email", AlternateEmail.value);
      formData.append("address", Address.value);
      dispatch(generate_quotation({ formData }));
   };
   return {
      primary_email,
      alternate_email,
      address,
      generateQuotation,
   };
}
