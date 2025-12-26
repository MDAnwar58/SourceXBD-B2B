import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ContactContent = dynamic(() => import("./components/ContactContent"));

export const metadata: Metadata = {
   title: "Contact",
};

export default function Contact() {
   return <ContactContent />;
}
