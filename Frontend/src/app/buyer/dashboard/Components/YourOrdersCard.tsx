"use client";
import React from "react";
import { useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import dynamic from "next/dynamic";
import { DownArrowSvgIcon } from "@/buyer/components/SvgIcons";
const Card = dynamic(() => import("@/buyer/components/buyer-card"), {
   ssr: false,
});
const OrderProduct = dynamic(() => import("./OrderProduct"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type OrderDetails = {
   address: string;
   amount: any;
   date: string;
};

type Product = {
   category: string;
   image: string;
   name: string;
};

type Seller = {
   image: string | null;
   name: string;
};
type User = {
   image: string | null;
   name: string;
};

type Order = {
   address: string;
   amount: string;
   company: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: Product;
   qty: number;
   seller: Seller;
   status: string;
   transaction_id: string;
   user: User;
};

type Props = {
   orderLimit: number;
   onLoadMoreOrders: (limit: number) => void;
   onCancleOrder: (orderId: number) => void;
};

export default function YourOrdersCard({
   orderLimit,
   onLoadMoreOrders,
   onCancleOrder,
}: Props) {
   const { orders = [], orderProductsCount } = useSelector(
      (state: BuyerState) => state.buyer.dashboard
   );
   const Orders = orders as Array<Order[]>;

   return (
      <div>
         <Card className="!pb-0 !px-0">
            <div className="px-5 flex flex-row">
               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[99px]"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Your Orders
               </div>
               <div className="text-gray-700">
                  {" "}
                  ({Orders.length}/{orderProductsCount})
               </div>
            </div>
            <div
               className=" 3md:h-[207px] h-[507px] w-full overflow-y-auto px-5 pt-3 pb-5 scroll-smooth space-y-3"
               style={{ scrollbarWidth: "none" }}
            >
               {Orders && Orders?.length > 0
                  ? Orders.map((order: any, index: number) => (
                       <div key={index}>
                          <OrderProduct
                             order={order}
                             onCancleOrder={onCancleOrder}
                          />
                       </div>
                    ))
                  : null}
               {/* <PenddingOrderProduct /> */}
               {/* <OnWayOrderProduct /> */}
            </div>
            {Orders.length !== orderProductsCount ? (
               <div className=" relative">
                  <Button
                     type="button"
                     className="rounded-[50%] w-[38px] h-[38px] flex justify-center items-center absolute right-2 -top-12"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backdropFilter: "blur(25px)",
                     }}
                     onClick={() => onLoadMoreOrders(orderLimit + 5)}
                  >
                     <div className="w-6 h-6 text-white">
                        <DownArrowSvgIcon />
                     </div>
                  </Button>
               </div>
            ) : null}
         </Card>
      </div>
   );
}
