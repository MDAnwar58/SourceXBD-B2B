"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
   percentage?: any | undefined;
   className?: string | undefined;
   rotation?: number | undefined;
   textSize?: string | undefined;
   pathTransitionDuration?: number | undefined;
   pathColor?: string | undefined;
   textColor?: string | undefined;
   trailColor?: string | undefined;
};

export default function CircleCounter({
   percentage,
   className,
   rotation,
   textSize,
   pathTransitionDuration,
   pathColor,
   textColor,
   trailColor,
}: Props) {
   return (
      <CircularProgressbar
         value={percentage}
         text={`${percentage}%`}
         className={className}
         styles={buildStyles({
            rotation: rotation, // 0.25,
            textSize: textSize,
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: pathTransitionDuration,
            // Colors
            pathColor: pathColor,
            textColor: textColor,
            trailColor: trailColor,
            // backgroundColor: "#98b0ee",
         })}
      />
   );
}
