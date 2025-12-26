"use client";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import dynamic from "next/dynamic";
import ProductsModal from "./ProductsModal";
import { LocalUrl } from "@/components/react/localhost";
import ProductsShow from "./ProductsShow";
const OrderCreateSelectArea = dynamic(() => import("./select"));
const SallerProductSearchAutoComplete = dynamic(
   () => import("@/app/saller/components/ProductSearchAutoComplete")
);
const SellerCard = dynamic(() => import("@/app/saller/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const CheckboxWithLabel = dynamic(
   () => import("@/app/saller/components/CheckboxWithLabel")
);
const Button = dynamic(() => import("@/components/Button"));
const AutofillYourCurrentLocation = dynamic(
   () => import("./AutofillYourCurrentLocation")
);

const statusOptions = [
   {
      name: "Paid",
      value: 1,
   },
   {
      name: "Unpaid",
      value: 2,
   },
];

type ProductData = {
   id: number;
   name: string;
   price: number;
   discount_price: number;
   qty: number;
};

type Form = {
   address: any;
   amount: any;
   email: any;
   location_name: any;
   phone: any;
   product_id: any;
   user_id: any;
};

type Props = {
   userId: any;
   setUserId: any;
   country: any;
   setCountry: any;
   product: any;
   setProduct: any;
   phone: any;
   amount: any;
   location_name: any;
   qty: any;
   setQty: any;
   email: any;
   address: any;
   state: any;
   city: any;
   setCity: any;
   zip_code: any;
   status: any;
   setStatus: any;
   paymentMethod: any;
   setPaymentMethod: any;
   createOrder: any;
   productSelectionModal: boolean;
   setProductSelectionModal: React.Dispatch<React.SetStateAction<boolean>>;
   selectProducts: Array<any[]>;
   setSelectProducts: React.Dispatch<React.SetStateAction<any[]>>;
   limitProduct: number;
   onHandleSelectProducts: (id: number) => void;
   onHandleSearchProduct: (search: string) => void;
   onHandleProductsLimit: (limit: number) => void;
   onHandleRemoveProduct: (product: any) => void;
   updateSelectedProducts: (id: number, qty: number) => void;
};

export default function OrderCreateFormAlternative({
   userId,
   setUserId,
   country,
   setCountry,
   product,
   setProduct,
   phone,
   amount,
   location_name,
   qty,
   setQty,
   email,
   address,
   state,
   city,
   setCity,
   zip_code,
   status,
   setStatus,
   paymentMethod,
   setPaymentMethod,
   createOrder,
   productSelectionModal,
   setProductSelectionModal,
   selectProducts,
   setSelectProducts,
   limitProduct,
   onHandleSelectProducts,
   onHandleSearchProduct,
   onHandleProductsLimit,
   onHandleRemoveProduct,
   updateSelectedProducts,
}: Props) {
   const localUrl: string = LocalUrl();

   const { buyers, products, countries, cities, error } = useSelector(
      (state: SallerState) => state.saller.orders
   );

   let Buyers: any = [];
   buyers?.length > 0 &&
      buyers?.map((item: any) => {
         Buyers.push({
            name: item.name,
            value: item.id,
         });
      });

   let Products: any = [];
   products?.length > 0 &&
      products?.map((item: ProductData | any) => {
         Products.push({
            name: item.name,
            value: item.id,
            price: Number(item.price),
            discount_price: Number(item.discount_price),
            qty: Number(item.stock),
            min_order: Number(item.min_order),
         });
      });
   const Error = error as Form;

   return (
      <Fragment>
         <div
            className="bg-[#ffffff] rounded-[20px] p-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="pb-5">
               <h1 className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-4">
                  Shipping Address Details
               </h1>
               <AutofillYourCurrentLocation />
            </div>
            <div className="pb-3">
               <OrderCreateSelectArea
                  label="Select Buyer"
                  options={Buyers}
                  onHandleSelectValue={(value: string) => setUserId(value)} // You should pass a function
                  className="!ps-5 !pe-2 !h-10"
                  dropdownClassName="!px-5"
                  top="!top-11"
                  iconBtnClassName="!w-7 !h-7 !rounded-md !bg-[rgba(152,176,238,0.05)] !text-[#515151]"
                  iconWidthAndHeight="!w-5 !h-5"
                  btnStyle={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
                  iconBtnStyle={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
               {Error?.user_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.user_id}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <Button
                  type="button"
                  className=" text-blue-500 hover:text-white hover:bg-blue-gradient px-7 py-2 rounded-lg border border-blue-500 text-sm font-medium transition-all duration-150 ease-linear"
                  onClick={() => setProductSelectionModal(true)}
               >
                  Select Products
               </Button>
               {productSelectionModal && (
                  <ProductsModal
                     productSelectionModal={productSelectionModal}
                     setProductSelectionModal={setProductSelectionModal}
                     selectProducts={selectProducts}
                     setSelectProducts={setSelectProducts}
                     onHandleSelectProducts={onHandleSelectProducts}
                     onHandleSearchProduct={onHandleSearchProduct}
                     limitProduct={limitProduct}
                     onHandleProductsLimit={onHandleProductsLimit}
                  />
               )}
               {selectProducts?.length > 0 ? (
                  <div className="grid grid-cols-12 gap-3 items-end h-full px-3 pb-3 pt-5">
                     {selectProducts.map((product: any, index: number) => {
                        const imageUrl = localUrl.concat(product?.image);
                        return (
                           <div
                              key={index + 1}
                              className="12xl:col-span-2 3xl:col-span-3 xl:col-span-4 5lg:col-span-6 lg:col-span-6 5md:col-span-4 md:col-span-6 3sm:col-span-3 6xs:col-span-4 xs:col-span-6 col-span-12 h-auto mb-0"
                           >
                              <ProductsShow
                                 product={product}
                                 imageUrl={imageUrl}
                                 onHandleRemoveProduct={onHandleRemoveProduct}
                                 updateSelectedProducts={updateSelectedProducts}
                              />
                           </div>
                        );
                     })}
                  </div>
               ) : null}
               {Error?.user_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.user_id}
                  </small>
               )}
            </div>
            {/* <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Product
               </div>

               <SallerProductSearchAutoComplete
                  items={Products}
                  product={product}
                  setProduct={setProduct}
                  setQty={setQty}
                  className="!px-5 !h-10"
               />
               {Error?.product_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.product_id}
                  </small>
               )}
            </div>

            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Amount
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] !h-10 w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal"
                  inputRef={amount}
                  defaultValue={
                     product
                        ? product?.discount_price
                           ? (product?.price - product?.discount_price) * qty
                           : product?.price * qty
                        : ""
                  }
                  style={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
               />
               {Error?.amount && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.amount}
                  </small>
               )}
            </div> */}
            {/* <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Units
               </div>
               <div>
                  <span className="flex flex-row items-center gap-2  text-[#2f2f2f] rounded-[10px] h-[30px] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     <Button
                        type="button"
                        className="px-3  h-[30px] bg-blue-gradient rounded-md text-white text-lg flex justify-center items-center"
                        onClick={() => {
                           if (qty > product?.min_order) {
                              setQty(qty - 1);
                           }
                        }}
                     >
                        -
                     </Button>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] shadow-admin-card w-[55px]  h-[30px] text-center rounded-md border-none focus:ring-0 focus:outline-none font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                        value={qty}
                        readOnly
                        // onChange={(e) => {
                        //    const inputValue = e.target.value;
                        //    // Only allow numeric values below 10
                        //    if (
                        //       /^\d*$/.test(inputValue) &&
                        //       Number(inputValue) < 10
                        //    ) {
                        //       setQty(Number(inputValue));
                        //    }
                        // }}
                     />
                     <Button
                        type="button"
                        className="px-3  h-[30px] bg-blue-gradient rounded-md text-white text-lg flex justify-center items-center"
                        onClick={() => {
                           if (qty !== product?.qty) {
                              setQty(qty + 1);
                           }
                        }}
                     >
                        +
                     </Button>
                  </span>
               </div>
            </div> */}
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Phone No.
               </div>
               <div className=" relative">
                  <span className="flex items-center gap-1 absolute top-[47%] left-0 transform-translate-y-middle text-[#666666] ps-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal">
                     <div className="pt-[.1rem]">+880</div>
                     <div>|</div>
                  </span>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] !h-10 w-full pe-5 ps-14 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="019xxxxxxxx"
                     inputRef={phone}
                     style={{
                        boxShadow:
                           "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                     }}
                  />
               </div>
               {Error?.phone && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.phone}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Email
               </div>
               <Input
                  type="email"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-10 w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal"
                  inputRef={email}
                  style={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
               />
               {Error?.email && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.email}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Address
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-10 w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal"
                  inputRef={address}
                  style={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
               />
               {Error?.address && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.address}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Location
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-10 w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal"
                  inputRef={location_name}
                  style={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
               />
               {Error?.location_name && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.location_name}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <OrderCreateSelectArea
                  label="Status"
                  options={statusOptions}
                  onHandleSelectValue={(value: string) => {
                     if (Number(value) === 1) {
                        setStatus("Paid");
                     } else {
                        setStatus("Unpaid");
                     }
                  }} // You should pass a function
                  className="!ps-5 !pe-2 !h-10"
                  dropdownClassName="!px-5"
                  top="!top-11"
                  iconBtnClassName="!w-7 !h-7 !rounded-md  !bg-[rgba(152,176,238,0.05)] !text-[#515151]"
                  iconWidthAndHeight="!w-5 !h-5"
                  btnStyle={{
                     boxShadow:
                        "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                  }}
                  iconBtnStyle={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                  Payment Method
               </div>

               <div className="space-y-1">
                  <CheckboxWithLabel
                     id="pay-now"
                     name="payment-method"
                     value="Pay Now"
                     checked={paymentMethod === "Pay Now"}
                     label="Pay Now"
                     htmlFor="pay-now"
                     onChange={(e): void => setPaymentMethod(e.target.value)}
                  />
                  <CheckboxWithLabel
                     id="cash-on-delivery"
                     name="payment-method"
                     value="Cash on Delivery"
                     checked={paymentMethod === "Cash on Delivery"}
                     label="Cash on Delivery"
                     htmlFor="cash-on-delivery"
                     onChange={(e): void => setPaymentMethod(e.target.value)}
                  />
               </div>
            </div>
         </div>

         <div className="flex justify-end pt-5">
            <Button
               type="button"
               className={` 
            bg-[#f0f0f0] text-[#515151]
      capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => createOrder()}
            >
               Create
            </Button>
         </div>
      </Fragment>
   );
}
