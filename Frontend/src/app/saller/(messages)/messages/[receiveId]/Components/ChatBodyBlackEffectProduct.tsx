"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CrosSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));

type Props = {
   product: any;
   imageUrl: string;
   onHandleRemoveProduct: (product: any) => void;
   updateSelectedProducts: (id: number, qty: number) => void;
};

export default function ChatBodyBlackEffectProduct({
   product,
   imageUrl,
   onHandleRemoveProduct,
   updateSelectedProducts,
}: Props) {
   const [productQty, setProductQty] = useState<number>(0);

   useEffect(() => {
      if (product?.min_order) {
         setProductQty(product?.min_order);
      }
   }, []);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10); // Convert input value to number
      if (
         !isNaN(value) &&
         value >= product?.min_order &&
         value <= product?.stock
      ) {
         setProductQty(value);
         updateSelectedProducts(product, Number(value));
      } else if (isNaN(value)) {
         setProductQty(0);
         updateSelectedProducts(product, 0);
      } else {
         setProductQty(value);
         updateSelectedProducts(product, Number(value));
      }
   };

   const handleBlur = useCallback(() => {
      if (productQty < product?.min_order) {
         setProductQty(product?.min_order);
         updateSelectedProducts(product, Number(product?.min_order));
      } else if (productQty > product?.stock) {
         setProductQty(product?.stock);
         updateSelectedProducts(product, Number(product?.stock));
      }
   }, [product, productQty]);

   return (
      <div className="rounded-2xl bg-white shadow-admin-card relative">
         <Button
            type="button"
            className=" absolute right-1 top-1 bg-red-500 hover:bg-red-700 hover:text-white/90 rounded-xl p-1"
            onClick={() => onHandleRemoveProduct(product)}
         >
            <div className="w-3.5 h-3.5">
               <CrosSvgIcon />
            </div>
         </Button>
         {product?.image ? (
            <Img
               src={imageUrl}
               alt="product image"
               width={150}
               height={150}
               className="rounded-2xl w-full xs:h-32 xs5:h-52 h-auto"
            />
         ) : null}
         <div className="px-3 pt-1 pb-2">
            <div className="text-gray-700 text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
               {product?.name}
            </div>
            <div className="text-gray-700 text-left font-['Raleway-Bold',_sans-serif] text-xs font-medium">
               Stock Available: {product?.stock}x
            </div>
            <div>
               <Input
                  type="text"
                  className="w-16 h-5 p-0 text-center mx-auto rounded-2xl"
                  value={productQty}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
            </div>
         </div>
      </div>
   );
}
