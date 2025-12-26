import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/buyer/store";
import { add_terms_and_condition } from "./OrderHistoryTermAndConditionAction";

export default function OrderHistoryTermAndConditionContext() {
   const discount = useRef<HTMLInputElement>(null);
   const applicable_text = useRef<HTMLInputElement>(null);
   const shipping_charge = useRef<HTMLInputElement>(null);
   const delivery_period = useRef<HTMLInputElement>(null);
   const payment_terms = useRef<HTMLInputElement>(null);
   const additional_info = useRef<HTMLTextAreaElement>(null);
   const [productPrice, setProductPrice] = useState<string | null>(null);
   const [paymentLink, setPaymentLink] = useState<string | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   const addTermsAndCondition = () => {
      const Discount = discount.current ? discount.current?.value : "";
      const ApplicableText = applicable_text.current
         ? applicable_text?.current?.value
         : "";
      const ShippingCharge = shipping_charge.current
         ? shipping_charge?.current?.value
         : "";
      const DeliveryPeriod = delivery_period.current
         ? delivery_period?.current?.value
         : "";
      const PaymentTerms = payment_terms.current
         ? payment_terms?.current?.value
         : "";
      const AdditionalInfo = additional_info.current
         ? additional_info?.current?.value
         : "";
      const product_price = productPrice || "";
      const payment_link = paymentLink || "";

      const formData = new FormData();
      formData.append("discount", Discount);
      formData.append("applicable_text", ApplicableText);
      formData.append("shipping_charge", ShippingCharge);
      formData.append("delivery_period", DeliveryPeriod);
      formData.append("payment_terms", PaymentTerms);
      formData.append("additional_info", AdditionalInfo);
      formData.append("product_price", product_price);
      formData.append("payment_link", payment_link);
      dispatch(add_terms_and_condition({ formData }));
   };
   return {
      discount,
      applicable_text,
      shipping_charge,
      delivery_period,
      payment_terms,
      additional_info,
      productPrice,
      paymentLink,
      setProductPrice,
      setPaymentLink,
      addTermsAndCondition,
   };
}
