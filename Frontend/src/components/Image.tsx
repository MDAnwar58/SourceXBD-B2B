"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";

type Props = {
   src: string | StaticImport;
   alt: string;
   width?: number | undefined;
   height?: number | undefined;
   className?: string | undefined;
   style?: React.CSSProperties | undefined;
};

export default function Img({
   src,
   alt,
   width,
   height,
   className,
   style,
}: Props) {
   return (
      <Image
         src={src}
         alt={alt}
         width={width}
         height={height}
         className={className}
         style={style}
         priority
      />
   );
}
