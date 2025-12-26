"use client";
import { removeLocalStorage } from "@/components/react/storage";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect } from "react";
import "../main.css";
const ContactHero = dynamic(() => import("./ContactHero"));
const ContactForm = dynamic(() => import("./ContactForm"));
const ContactImage = dynamic(() => import("./ContactImage"));
const ContactMoreForYou = dynamic(() => import("./ContactMoreForYou"));

export default function ContactContent() {
   useEffect(() => {
      removeLocalStorage("search-key");
      removeLocalStorage("category-slug-key");
   }, []);
   return (
      <div>
         <ContactHero />
         <div className=" container pb-20">
            <ContactForm />
            <ContactImage />
            <ContactMoreForYou />
         </div>
      </div>
   );
}
