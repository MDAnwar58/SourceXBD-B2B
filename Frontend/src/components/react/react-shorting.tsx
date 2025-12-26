"use client";
import React, { useMemo } from "react";

type Props = {
   text: string;
   minWord?: number | undefined;
   maxWords: number;
};
type LimitedProps = {
   text: string;
   maxChars: number;
};

export function useWordsShorting({ text, minWord = 0, maxWords }: Props) {
   const shortenedText = text.split(" ").slice(minWord, maxWords).join(" ");
   return shortenedText;
}

export function LimitedText({ text = "", maxChars }: LimitedProps) {
   const limitedText = useMemo(() => {
      // Check if text is empty or null
      if (!text) return "";

      // Check if text exceeds the max character limit
      return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
   }, [text, maxChars]);

   return <div>{limitedText}</div>;
}

export function useRemoveZeroNumberFrist({ number }: { number: string }) {
   let result = number.replace(/^0/, "");
   result = number.startsWith("0") ? number.slice(1) : number;
   return result;
}
