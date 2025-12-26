import React, { Fragment } from "react";

const products = [
   {
      id: 1,
      name: "Lorem Ipsum 1",
      price: 1000,
      discount_price: null,
      qty: 1,
   },
   {
      id: 2,
      name: "Lorem Ipsum 2",
      price: 2000, // every time change price
      discount_price: 50, // and discount price too
      qty: 3, // and qty too
   },
   {
      id: 3,
      name: "Lorem Ipsum 3",
      price: 3000,
      discount_price: 200,
      qty: 5,
   },
   {
      id: 4,
      name: "Lorem Ipsum 4",
      price: 4000,
      discount_price: 300,
      qty: 7,
   },
   {
      id: 5,
      name: "Lorem Ipsum 5",
      price: 5000,
      discount_price: 400,
      qty: 9,
   },
];

export default function ProductListTable() {
   const totalPrice = products.reduce((acc, product) => {
      const effectivePrice = product.discount_price
         ? product.price - product.discount_price
         : product.price;
      return acc + effectivePrice * product.qty;
   }, 0);

   return (
      <Fragment>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] mt-4 border-solid border-[#b2b2b2] border-[0.5px]">
            <div className="flex-auto block">
               <div className="overflow-x-auto rounded-md">
                  <table className="min-w-full leading-normal ">
                     <thead>
                        <tr className=" rounded-[10px] h-8 text-[#2F2F2F] ">
                           <th className="py-2 pl-3 pr-8 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                              Deliverable
                           </th>
                           <th className="py-2 px-3 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                              Rate
                           </th>
                           <th className="py-2 px-3 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                              Qty
                           </th>
                           <th className="py-2 px-3 text-[#000000] text-right font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                              Amount
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {products?.length > 0
                           ? products.map((product, index: number) => (
                                <tr
                                   key={index}
                                   className={`${index + 1 === products.length ? "" : "h-8 border border-b-gray-100   "}   group rounded-[10px] text-[#2F2F2F]`}
                                >
                                   <td className="pl-3 pr-8 py-1 ">
                                      <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                         {product?.name}
                                      </p>
                                   </td>
                                   <td className="px-1 py-1 flex items-end gap-1">
                                      <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                         BDT{" "}
                                         {product?.discount_price
                                            ? product?.price -
                                              product?.discount_price
                                            : product?.price}
                                      </p>
                                      <div className=" line-through text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[7px] font-normal">
                                         {product?.discount_price
                                            ? product?.price
                                            : null}
                                      </div>
                                   </td>
                                   <td className="px-3 py-1 ">
                                      <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                         {product?.qty}
                                      </p>
                                   </td>
                                   <td className="px-3 py-1 ">
                                      <p className="text-[#515151] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                         BDT{" "}
                                         {product?.discount_price
                                            ? (product?.price -
                                                 product?.discount_price) *
                                              product?.qty
                                            : product?.price * product?.qty}
                                      </p>
                                   </td>
                                </tr>
                             ))
                           : null}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div></div>
         <div className=" mt-5">
            <div className="flex justify-end gap-8 pb-2">
               <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                  Sub Total
               </h6>
               <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  BDT {totalPrice}
               </h6>
            </div>
            <div className="flex justify-end gap-8 pb-2">
               <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                  Tax
               </h6>
               <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  BDT 500
               </h6>
            </div>
            {/* <div className="flex justify-end gap-8 pb-2">
               <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                  Discount
               </h6>
               <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  BDT 000
               </h6>
            </div> */}
            <div className="flex justify-end gap-8 pb-2">
               <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                  Shipping Fee
               </h6>
               <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  BDT 100
               </h6>
            </div>
         </div>
         <div className="mt-5">
            <h4 className="text-[#515151] pb-1 text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
               Note
            </h4>
            <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
               Pay Within 15 days, Thank You for your business
            </p>
         </div>
      </Fragment>
   );
}
