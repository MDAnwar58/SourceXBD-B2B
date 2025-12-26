"use client";
import React, { Fragment, useCallback, useRef } from "react";
import AdminCard from "@admin/components/card";
import Input from "@/components/Input";
import { AdminState } from "@admin/store";
import { useSelector } from "react-redux";
import Button from "@/components/Button";
import PageHeader from "@admin/components/PageHeader";
import {
   CitySvgIcon,
   DeleteSvgIcon,
   PlusSvgIcon,
} from "@admin/components/SvgIcons";
import SelectArea from "@admin/components/select";
import SubscriptionContext from "@/admin/subscriptions/featrues/SubscriptionContext";
import CheckBox from "@/components/Checkbox";

const icon = (
   <div className="w-6 h-6 text-[#2F2F2F]">
      <CitySvgIcon />
   </div>
);

type SubscriptionPlan = {
   name: string;
   title: string;
   package: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: string;
   requirements: any;
};

const packages = [
   { name: "For a lifetime", value: 1 },
   { name: "Month", value: 2 },
   { name: "Year", value: 3 },
];
const types = [{ name: "Recommended", value: 1 }];

export default function SubscriptionPlanForm() {
   const {
      name,
      title,
      Package,
      setPackage,
      type,
      setType,
      duration,
      product_limit,
      amount,
      // fee,
      isFree,
      setIsFree,
      requirements,
      setRequirements,
      createSubscriptionPlan,
   } = SubscriptionContext();
   const is_free = useRef<HTMLInputElement>(null);

   const onHandleInputChange = useCallback(
      (index: number, value: string) => {
         const newRequirementFields = [...requirements];
         newRequirementFields[index] = value;
         setRequirements(newRequirementFields);
      },
      [requirements]
   );
   const onHandleAddRequirementField = useCallback(() => {
      setRequirements([...requirements, ""]);
   }, [requirements]);

   const onHandleFieldDelete = useCallback(
      (index: number) => {
         const updatedRequirementFields = requirements.filter(
            (_, i) => i !== index
         );
         setRequirements(updatedRequirementFields);
      },
      [requirements]
   );

   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFree(e.target.checked ? 1 : 0); // 1 when checked, 0 when unchecked
   };

   const { loading, error } = useSelector(
      (state: AdminState) => state?.admin.subscription
   );

   const Errors = error as SubscriptionPlan | null;
   console.log(type);
   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Subscriptions Plan Create"
            searchBox={false}
         />

         <AdminCard className="!bg-[#ffffff] !rounded-[20px]">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Subscription Name
               </div>
               <Input
                  type="text"
                  inputRef={name}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Subscription name"
               />
               {Errors?.name && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.name}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Title
               </div>
               <Input
                  type="text"
                  inputRef={title}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Sunscription title"
               />
               {Errors?.title && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.title}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Duration
               </div>
               <Input
                  type="text"
                  inputRef={duration}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Duration"
               />
               {Errors?.duration && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.duration}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <SelectArea
                  label="Package"
                  options={packages}
                  onHandleSelectValue={(value) => {
                     const packageValue = Number(value);
                     if (packageValue === 1) {
                        setPackage("for a lifetime");
                     } else if (packageValue === 2) {
                        setPackage("month");
                     } else if (packageValue === 3) {
                        setPackage("year");
                     }
                  }} // You should pass a function
               />
               {Errors?.package && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.package}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <SelectArea
                  label="Type - not importent"
                  options={types}
                  onHandleSelectValue={(value) => {
                     const typeValue = Number(value);
                     if (typeValue === 1) {
                        setType("recommended");
                     }
                  }} // You should pass a function
               />
               {Errors?.package && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.package}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Product Limit
               </div>
               <Input
                  type="text"
                  inputRef={product_limit}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Limit"
               />
               {Errors?.product_limit && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.product_limit}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Amount
               </div>
               <Input
                  type="text"
                  inputRef={amount}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Amount"
               />
               {Errors?.amount && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.amount}
                  </small>
               )}
            </div>

            {/* <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Subscription Fee
               </div>
               <Input
                  type="text"
                  inputRef={fee}
                  className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                  placeholder="Fee"
               />
               {Errors?.is_free && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.is_free}
                  </small>
               )}
            </div> */}

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Is Free
               </div>
               <CheckBox
                  checkRef={is_free}
                  checked={isFree === 1}
                  onChange={handleCheckboxChange}
               />
               {Errors?.is_free && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.is_free}
                  </small>
               )}
            </div>

            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pb-1">
                  Subscription Requirements
               </div>
               <div className="flex flex-col">
                  {/* Static Input Field (First Element in State) */}
                  <Input
                     type="text"
                     value={requirements[0]} // Bind the first element to the static input
                     onChange={(e) => onHandleInputChange(0, e.target.value)} // Update static input value on change
                     className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                     placeholder="Requirement"
                  />

                  {/* Dynamic Requirement Fields */}
                  {requirements.slice(1).map((requirement, index) => (
                     <div
                        key={index + 1}
                        className="flex flex-row items-center gap-3 pt-3"
                     >
                        <Input
                           type="text"
                           value={requirement}
                           onChange={(e) =>
                              onHandleInputChange(index + 1, e.target.value)
                           }
                           className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-4"
                           placeholder="Requirement"
                        />

                        <Button
                           type="button"
                           className="bg-[#f0f0f0] drop-shadow-sm text-red-400 px-3 h-[30px] rounded-lg"
                           onClick={() => onHandleFieldDelete(index + 1)} // Adjust index for deletion
                        >
                           <div className="w-4 h-4">
                              <DeleteSvgIcon />
                           </div>
                        </Button>
                     </div>
                  ))}

                  {/* Add Field Button */}
                  <div className="flex justify-end pt-3">
                     <Button
                        type="button"
                        className="bg-[#f0f0f0] drop-shadow-sm text-gray-700/90 p-3 rounded-lg"
                        onClick={onHandleAddRequirementField}
                     >
                        <div className="w-3 h-3">
                           <PlusSvgIcon />
                        </div>
                     </Button>
                  </div>
               </div>
               {Errors?.requirements && (
                  <small className="text-red-500 text-[10px] font-semibold">
                     {Errors.requirements}
                  </small>
               )}
            </div>
         </AdminCard>

         <div className="flex flex-row justify-end pt-5">
            <Button
               type="button"
               className={` ${
                  loading === true
                     ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                     : "bg-[#f0f0f0] text-[#515151]"
               } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => createSubscriptionPlan()}
            >
               Save & Changes
            </Button>
         </div>
      </Fragment>
   );
}
