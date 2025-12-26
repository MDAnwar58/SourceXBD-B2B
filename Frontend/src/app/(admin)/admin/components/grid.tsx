import React, { ReactNode } from "react";

type Props = {
   children?: ReactNode | undefined;
   className?: string | undefined;
   cols?: number | undefined;
   rows?: number | undefined;
   gap?: number | undefined;
   gapX?: number | undefined;
   gapY?: number | undefined;
   style?: React.CSSProperties | undefined;
};

export default function Grid({
   children,
   className,
   cols,
   rows,
   gap,
   gapX,
   gapY,
   style,
}: Props) {
   return (
      <div
         className={` 3xs:grid ${cols && `grid-cols-${cols}`} ${rows && `grid-rows-${rows}`} ${gap && `gap-${gap}`} ${gapX && `gap-x-${gapX}`}  ${gapY && `gap-y-${gapY}`} ${className}`}
         style={style}
      >
         {children}
      </div>
   );
}
