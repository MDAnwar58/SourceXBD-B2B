"use client";
import Img from "@/components/Image";
import Input from "@/components/Input";
import { LocalUrl } from "@/components/react/localhost";
import React, { Fragment, useEffect, useState } from "react";
import ChatBodyBlackEffectProduct from "./ChatBodyBlackEffectProduct";
import Button from "@/components/Button";
import { CrosSvgIcon } from "@/saller/components/SvgIcons";
import ChatBodyEffectImagePreview from "./ChatBodyEffectImagePreview";
import ChatBodyEffectDocumentsPreview from "./ChatBodyEffectDocumentsPreview";

type Props = {
   selectProducts: any[];
   onHandleRemoveProduct: (product: any) => void;
   updateSelectedProducts: (id: number, qty: number) => void;
   selectImages: any[];
   onHandleRemoveImage: (index: number) => void;
   selectDocuments: any[];
   onHandleRemoveDocument: (index: number) => void;
};

export default function ChatBodyBlackEffect({
   selectProducts,
   onHandleRemoveProduct,
   updateSelectedProducts,
   selectImages,
   onHandleRemoveImage,
   selectDocuments,
   onHandleRemoveDocument,
}: Props) {
   const localUrl: string = LocalUrl();

   return (
      <div className=" bg-gray-600/70 absolute top-0 left-0 overflow-y-auto h-full w-full rounded-2xl">
         <div className="h-full">
            <div className="grid grid-cols-12 gap-3 items-end h-full p-3">
               {selectProducts?.length > 0
                  ? selectProducts.map((product, index: number) => {
                       const imageUrl = localUrl.concat(product?.image);
                       return (
                          <div
                             key={index + 1}
                             className="12xl:col-span-2 3xl:col-span-3 xl:col-span-4 5lg:col-span-6 2lg:col-span-3 5md:col-span-4 md:col-span-6 3sm:col-span-3 6xs:col-span-4 xs:col-span-6 col-span-12 h-auto mb-0"
                          >
                             {index + 1 === 1 ? (
                                <div className="text-white/70 text-left font-['Raleway-Bold',_sans-serif] text-md font-bold mb-1">
                                   Products
                                </div>
                             ) : null}
                             <ChatBodyBlackEffectProduct
                                product={product}
                                imageUrl={imageUrl}
                                onHandleRemoveProduct={onHandleRemoveProduct}
                                updateSelectedProducts={updateSelectedProducts}
                             />
                          </div>
                       );
                    })
                  : null}
               {selectImages?.length > 0 &&
                  selectImages?.map((image, index: number) => {
                     return (
                        <div
                           key={index + 1}
                           className="12xl:col-span-2 3xl:col-span-3 xl:col-span-4 5lg:col-span-6 2lg:col-span-3 5md:col-span-4 md:col-span-6 3sm:col-span-3 6xs:col-span-4 xs:col-span-6 col-span-12 h-auto mb-0"
                        >
                           {index + 1 === 1 ? (
                              <div className="text-white/70 text-left font-['Raleway-Bold',_sans-serif] text-md font-bold mb-1">
                                 Images
                              </div>
                           ) : null}
                           <ChatBodyEffectImagePreview
                              file={image}
                              index={index}
                              onHandleRemoveImage={onHandleRemoveImage}
                           />
                        </div>
                     );
                  })}
               {selectDocuments?.length > 0 &&
                  selectDocuments?.map((document, index: number) => {
                     return (
                        <div
                           key={index + 1}
                           className="12xl:col-span-2 3xl:col-span-3 xl:col-span-4 5lg:col-span-6 2lg:col-span-3 5md:col-span-4 md:col-span-6 3sm:col-span-3 6xs:col-span-4 xs:col-span-6 col-span-12 h-auto mb-0"
                        >
                           {index + 1 === 1 ? (
                              <div className="text-white/70 text-left font-['Raleway-Bold',_sans-serif] text-md font-bold mb-1">
                                 Documents
                              </div>
                           ) : null}
                           <ChatBodyEffectDocumentsPreview
                              index={index}
                              onHandleRemoveDocument={onHandleRemoveDocument}
                           />
                        </div>
                     );
                  })}
            </div>
         </div>
      </div>
   );
}
