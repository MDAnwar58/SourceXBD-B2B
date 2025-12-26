"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function HomeCalender() {
   const [value, onChange] = useState<Value>(new Date());

   return (
      <div className="lg:w-[60%] mx-auto">
         <Calendar
            onChange={onChange}
            value={value}
            className="!w-full !rounded-2xl !border-none shadow-admin-card"
         />
      </div>
   );
}
