"use client";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import OrdersContext from "@/saller/orders/features/OrdersContext";
import dynamic from "next/dynamic";
const SelectArea = dynamic(() => import("@/saller/components/select"));
const SallerProductSearchAutoComplete = dynamic(
   () => import("@/app/saller/components/ProductSearchAutoComplete")
);
const SellerCard = dynamic(() => import("@/app/saller/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const CheckboxWithLabel = dynamic(
   () => import("@/app/saller/components/CheckboxWithLabel")
);
const Button = dynamic(() => import("@/components/Button"));

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

export default function OrderCreateForm() {
   const {
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
   } = OrdersContext();
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
         });
      });
   const Error = error as Form;
   return (
      <Fragment>
         <SellerCard>
            <div className="pb-3">
               <SelectArea
                  label="Select Buyer"
                  options={Buyers}
                  onHandleSelectValue={(value: string) => setUserId(value)} // You should pass a function
                  className="!px-5"
                  dropdownClassName="!px-5"
               />
               {Error?.user_id && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.user_id}
                  </small>
               )}
            </div>
            {/* <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Country / Region
               </div>

               <SallerSearchAutoComplete
                  items={countries}
                  country={country}
                  setCountry={setCountry}
                  className="!px-5"
               />
            </div> */}
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Product
               </div>

               <SallerProductSearchAutoComplete
                  items={Products}
                  product={product}
                  setProduct={setProduct}
                  className="!px-5"
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
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  inputRef={amount}
                  defaultValue={
                     product
                        ? product?.discount_price
                           ? (product?.price - product?.discount_price) * qty
                           : product?.price * qty
                        : ""
                  }
               />
               {Error?.amount && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.amount}
                  </small>
               )}
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Units
               </div>
               <div>
                  <span className="flex flex-row items-center gap-2  text-[#2f2f2f] rounded-[10px] h-[30px] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     <Button
                        type="button"
                        className="px-3  h-[30px] bg-blue-gradient rounded-md text-white text-lg flex justify-center items-center"
                        onClick={() => {
                           if (qty > 1) {
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
            </div>
            <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  Phone No.
               </div>
               <div className=" relative">
                  <span className="flex items-center gap-1 absolute top-[50%] left-0 transform-translate-y-middle text-[#2f2f2f] ps-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     <div>+880</div>
                     <div>|</div>
                  </span>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full pe-5 ps-14 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     placeholder="019xxxxxxxx"
                     inputRef={phone}
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
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  inputRef={email}
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
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  inputRef={address}
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
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  inputRef={location_name}
               />
               {Error?.location_name && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Error.location_name}
                  </small>
               )}
            </div>

            {/* <div className="pb-3 flex flex-row gap-5">
               <div className="w-full">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                     City
                  </div>

                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  />
               </div>
               <div className="w-full">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                     State
                  </div>

                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                     inputRef={state}
                  />
               </div>
            </div> */}

            {/* <div className="pb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                  ZIP Code
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
                  inputRef={zip_code}
               />
            </div> */}
            <div className="pb-3">
               <SelectArea
                  label="Status"
                  options={statusOptions}
                  onHandleSelectValue={(value: string) => {
                     if (Number(value) === 1) {
                        setStatus("Paid");
                     } else {
                        setStatus("Unpaid");
                     }
                  }} // You should pass a function
                  className="!px-5"
                  dropdownClassName="!px-5"
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
                  {/* <div className="flex items-center mb-4">
                  <input
                     id="default-radio-1"
                     type="radio"
                     name="default-radio"
                     defaultValue={"Pay Now"}
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                     htmlFor="default-radio-1"
                     className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                     Default radio
                  </label>
               </div>
               <div className="flex items-center">
                  <input
                     defaultChecked
                     id="default-radio-2"
                     type="radio"
                     defaultValue={"Cash on Delivery"}
                     name="default-radio"
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                     htmlFor="default-radio-2"
                     className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                     Checked state
                  </label>
               </div> */}
               </div>
            </div>
         </SellerCard>

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
