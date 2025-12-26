"use client";
import { useEffect, useState } from "react";

export function useDaysCurrentMonth() {
   const [day, setDay] = useState<number>(new Date().getDate());
   const [date, setDate] = useState(new Date());
   const [month, setMonth] = useState<number | null>(null);
   const [currentMonthDays, setCurrentMonthDays] = useState<number[]>([]);
   // Get the current date
   useEffect(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      // Get the number of days in the current month
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      // Create an array from 1 to daysInMonth
      const allDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      setCurrentMonthDays(allDays);
   }, []);
   return { day, currentMonthDays };
}

export function useDateformat(dateString: string | undefined) {
   if (!dateString) return "Invalid Date";
   const date = new Date(dateString);
   if (isNaN(date.getTime())) return "Invalid Date";
   const day = date.getDate().toString().padStart(2, "0");
   const month = (date.getMonth() + 1).toString().padStart(2, "0");
   const year = date.getFullYear();
   return `${day}-${month}-${year}`;
}
export function useDateFormatExtra(dateString: string) {
   const [datePart] = dateString.split(" | "); // Separate date from time
   const [day, month, year] = datePart.split("-"); // Split day, month, year
   const formattedYear = year.slice(-2); // Get the last two digits of the year
   return `${day}-${month}-${formattedYear}`;
}

export function useDateFormatAndLastTimeCancel({
   dateAndTime,
}: {
   dateAndTime: string;
}) {
   if (dateAndTime) {
      const dateTimeString = dateAndTime;
      // Split the date part and ignore the time
      const datePart = dateTimeString.split(" | ")[0];
      // Split the date into components and reformat the year to 2 digits
      const [day, month, year] = datePart.split("-");
      const formattedDate = `${day}-${month}-${year.slice(-2)}`;
      return formattedDate; // Output: "20-10-24"
   }
   return null;
}

export function calculateTimeDifference(accountDateStr: any) {
   // Parse the account creation date and current date
   const accountDate: any = new Date(accountDateStr);
   const currentDate: any = new Date();

   // Calculate the total difference in milliseconds
   const diffInMilliseconds = currentDate - accountDate;

   // Calculate the difference in days
   const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

   // Calculate years, months, and remaining days
   const years = Math.floor(diffInDays / 365);
   const remainingDaysAfterYears = diffInDays % 365;
   const months = Math.floor(remainingDaysAfterYears / 30);
   const days = remainingDaysAfterYears % 30;

   return { years, months, days };
}

export function useDateWithMonthFormat(dateStr: string) {
   const [day, month, year] = dateStr.split("-");
   const date = new Date(`${year}-${month}-${day}`);
   const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
   };
   const formattedDate = date.toLocaleDateString("en-US", options);
   return formattedDate;
}
export function useDateWithMonthFormatExtra(dateStr: string): string {
   const date = new Date(dateStr);
   const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric", // numeric, 2-digit, 4-digit
      month: "short", // long, short, narrow, numeric, 2-digit
      day: "numeric", // numeric, 2-digit,
   });
   return formattedDate;
}
export function useDateToDateMonthFormat(dateStr: string): string {
   const [day, month, year] = dateStr.split("-");
   const date = new Date(`${month}-${day}-${year}`);

   const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
   });
   return formattedDate;
}
export function useDffFormat(dateStr: string): string {
   const pastDate: any = new Date(dateStr);
   const currentDate: any = new Date();
   const timeDifference = currentDate - pastDate;
   const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   return `${daysAgo} days ago`;
}

export const formatDate = (dateString: string): string => {
   const date = new Date(dateString);
   const day = date.getDate(); // Get the day
   const month = date.toLocaleString("en-US", { month: "short" }); // Get abbreviated month
   const year = date.getFullYear(); // Get year
   return `${day} ${month}, ${year}`;
};

export const getTime = (dateString: string): string => {
   const date = new Date(dateString);
   let hours = date.getHours();
   const minutes = date.getMinutes();
   const ampm = hours >= 12 ? "PM" : "AM";
   hours = hours % 12 || 12;
   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
   const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
   return formattedTime;
};

export const getLocalTime = (dateString: string): string => {
   const date = new Date(dateString); // Converts to local timezone automatically
   let hours = date.getHours();
   const minutes = date.getMinutes();
   const ampm = hours >= 12 ? "PM" : "AM";

   hours = hours % 12 || 12; // 12-hour format
   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

   return `${hours}:${formattedMinutes} ${ampm}`;
};
