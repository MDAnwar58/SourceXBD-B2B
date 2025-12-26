import React, {
   CSSProperties,
   HTMLAttributes,
   MouseEventHandler,
   ReactNode,
} from "react";

type Props = {
   children?: ReactNode | undefined;
   className?: string | undefined;
   onClick?: MouseEventHandler<HTMLDivElement> | undefined;
   style?: CSSProperties | undefined;
};

export default function SellerCard({
   children,
   className,
   onClick,
   style,
}: Props) {
   return (
      <div
         className={`bg-[#ffffff] rounded-2xl w-full h-auto shadow-admin-card p-5 ${className}`}
         onClick={onClick}
         style={style}
      >
         {children}
      </div>
   );
}
