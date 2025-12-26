import {
   AlertCircleSvgIcon,
   RedAlertCircleSvgIcon,
} from "@/app/saller/components/SvgIcons";
import { SallerState } from "@/app/saller/store";
import React, { Fragment, useCallback } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import NavLink from "@/components/NavLink";
const SellerCard = dynamic(() => import("@/app/saller/components/card"));
const SallerPagination = dynamic(
   () => import("@/app/saller/components/Pagination")
);
const Button = dynamic(() => import("@/components/Button"));

type Link = {
   url: string;
   label: string;
   active: boolean;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   to: number;
};

type Product = {
   name: string;
   category: string;
};

type Order = {
   id: number;
   name: string;
   pay_status: string;
   product: Product;
   transaction_id: string;
   status: string;
};

type OrdersData = {
   data: Order[];
   meta: any;
};

type Props = {
   getOrders: (page: number, perPage: number, search: string) => void;
   page: number;
   perPage: number;
   search: string;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   onHandleResetTable?: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
   changeOrderStatus: (
      id: number,
      payStatus: string,
      page: number,
      perPage: number,
      search: string
   ) => void;
};

export default function OrderStatusList({
   getOrders,
   page,
   perPage,
   search,
   setPage,
   onHandleResetTable,
   changeOrderStatus,
}: Props) {
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getOrders(page, perPage, search);
      },
      [perPage, search]
   );

   const { orders_data } = useSelector(
      (state: SallerState) => state.saller.orders
   );
   const OrderData = orders_data as OrdersData;
   const { data = [], meta = {} } = OrderData;
   const { current_page, from, last_page, links = [], to } = meta as Meta;
   const orders: Order[] = data;

   return (
      <Fragment>
         <SellerCard className=" overflow-x-auto w-full mb-7">
            <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-11 flex items-center gap-3 px-3">
               <div className="bg-[#f0f2ff] text-[#FF4242] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                  <div className="w-4 h-4">
                     <RedAlertCircleSvgIcon />
                  </div>
               </div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
                  Order Status Update
               </div>
            </div>

            <div className="pt-3 space-y-2">
               {orders && orders.length > 0
                  ? orders.map((order, index: number) => (
                       <div
                          key={index}
                          className="bg-[rgba(152,176,238,0.05)] rounded-lg xl:h-14 xl:py-0 py-3 flex lg:flex-row flex-col justify-between xl:items-center px-5 gap-2"
                       >
                          <div className="flex 3xs:flex-row flex-col items-center 3xs:gap-4 gap-2">
                             <div
                                className={`w-4 h-4 ${
                                   order?.status === "Pending"
                                      ? "text-[#42c0ff]"
                                      : order?.status === "On The Way"
                                        ? "text-[#FBBC05]"
                                        : "text-[#34a853]"
                                }`}
                             >
                                <AlertCircleSvgIcon />
                             </div>
                             <div className="flex xl:flex-row flex-col xl:items-center xl:gap-9 gap-0">
                                <div className="flex 3xs:flex-row flex-col 3xs:justify-start justify-center items-center 3xs:gap-2">
                                   <div className="text-[#2f2f2f] 3xs:text-left text-center font-['Raleway-Bold',_sans-serif] text-base font-bold">
                                      #{order?.transaction_id}
                                   </div>
                                   {/* <div className="text-[#777777] 3xs:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal  3xs:mb-0 mb-1">
                                      ({order?.product?.category})
                                   </div> */}
                                </div>
                                <div className="text-[#777777] 3xs:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal xl:w-[50%] lg:w-[75%]">
                                   Clear communication about order status and
                                   updates ensures customer satisfaction and
                                   trust in the business.
                                </div>
                             </div>
                          </div>
                          <div className="flex 3xs:flex-row flex-col items-center gap-3 lg:ms-0 3xs:ms-auto 3xs:me-0 mx-auto 3xs:pt-0 pt-3">
                             {order?.status !== "Cancled" ? (
                                <Button
                                   type="button"
                                   className={`${
                                      order?.status === "Pending"
                                         ? "bg-[#42c0ff]"
                                         : order?.status === "On The Way"
                                           ? "bg-[#FBBC05]"
                                           : "bg-[#34a853]"
                                   } rounded w-[94px] h-6`}
                                   onClick={() =>
                                      changeOrderStatus(
                                         order?.id,
                                         order?.status,
                                         page,
                                         perPage,
                                         search
                                      )
                                   }
                                >
                                   <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center">
                                      {order?.status}
                                   </div>
                                </Button>
                             ) : null}
                             {order?.status !== "Cancled" ? (
                                <Button
                                   type="button"
                                   className="bg-[#ff4242] rounded w-[94px] h-6"
                                   onClick={() =>
                                      changeOrderStatus(
                                         order?.id,
                                         "Cancled",
                                         page,
                                         perPage,
                                         search
                                      )
                                   }
                                >
                                   <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center">
                                      Cancle
                                   </div>
                                </Button>
                             ) : (
                                <Button
                                   type="button"
                                   className="bg-[#ff4242] rounded w-[94px] h-6"
                                >
                                   <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center">
                                      {order?.status}
                                   </div>
                                </Button>
                             )}
                             <NavLink
                                href={`/saller/invoice/${order?.id}`}
                                className="bg-[#98b0ee] rounded-md w-[58px] h-5 flex items-center justify-center"
                             >
                                <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold relative w-[35px] h-[13px]">
                                   Invoice
                                </div>
                             </NavLink>
                          </div>
                       </div>
                    ))
                  : null}
            </div>
         </SellerCard>
         <SallerPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
