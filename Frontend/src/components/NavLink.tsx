"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

type Props = {
   children?: React.ReactNode;
   href?: Url | any | undefined;
   className?: string | undefined;
   onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
   style?: React.CSSProperties | undefined;
};

export default function NavLink({
   children,
   href,
   className,
   onClick,
   style,
}: Props) {
   return (
      <Link href={href} className={className} onClick={onClick} style={style}>
         {children}
      </Link>
   );
}
