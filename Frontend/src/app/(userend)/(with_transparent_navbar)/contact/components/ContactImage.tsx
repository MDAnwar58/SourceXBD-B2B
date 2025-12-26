"use client";
import React from "react";
import dynamic from "next/dynamic";
const ContactPageMap = dynamic(() => import("./ContactPageMap"));

export default function ContactImage() {
   return (
      <div className="py-10 google-map-container">
         <ContactPageMap />
      </div>
   );
}
