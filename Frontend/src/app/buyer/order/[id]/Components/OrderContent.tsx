"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { getOrder } from "../../features/OrderDetailsAction";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import ReviewAndReportArea from "./ReviewAndReportArea";
const OrderCardHeader = dynamic(() => import("./OrderCardHeader"), {
   ssr: false,
});
const OrderItems = dynamic(() => import("./OrderItems"), {
   ssr: false,
});
const OrderSellerInfo = dynamic(() => import("./OrderSellerInfo"), {
   ssr: false,
});
const OrderPayment = dynamic(() => import("./OrderPayment"), {
   ssr: false,
});
const OrderReportArea = dynamic(() => import("./OrderReportArea"), {
   ssr: false,
});
const OrderReviewArea = dynamic(() => import("./OrderReviewArea"), {
   ssr: false,
});
const OrderReviewAndReportBtns = dynamic(
   () => import("./OrderReviewAndReportBtns"),
   {
      ssr: false,
   }
);
const PageHeader = dynamic(() => import("@/app/buyer/components/PageHeader"), {
   ssr: false,
});
const OrderInfo = dynamic(() => import("./OrderInfo"), {
   ssr: false,
});

const icon = (
   <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M9.09958 2.39759C9.24874 2.78401 9.05641 3.21819 8.66999 3.36736C8.52855 3.42196 8.38879 3.47993 8.2508 3.54119C7.87221 3.70926 7.42906 3.53861 7.261 3.16002C7.09293 2.78144 7.26358 2.33829 7.64217 2.17022C7.80267 2.09897 7.96526 2.03152 8.12981 1.968C8.51623 1.81883 8.95041 2.01117 9.09958 2.39759ZM5.6477 4.24031C5.93337 4.54026 5.92178 5.015 5.62183 5.30066C5.51216 5.40511 5.40505 5.51221 5.30061 5.62188C5.01495 5.92183 4.54021 5.93342 4.24026 5.64775C3.94031 5.36209 3.92873 4.88736 4.21439 4.58741C4.33566 4.46008 4.46002 4.33571 4.58736 4.21444C4.88731 3.92878 5.36204 3.94036 5.6477 4.24031ZM3.15997 7.26105C3.53856 7.42912 3.70921 7.87226 3.54114 8.25085C3.47988 8.38884 3.42191 8.5286 3.36731 8.67004C3.21814 9.05646 2.78396 9.24879 2.39754 9.09963C2.01112 8.95046 1.81878 8.51628 1.96795 8.12986C2.03147 7.96531 2.09892 7.80272 2.17017 7.64222C2.33824 7.26363 2.78139 7.09298 3.15997 7.26105ZM2.02109 11.0041C2.43518 11.0142 2.76276 11.358 2.75275 11.772C2.75092 11.8478 2.75 11.9238 2.75 12.0001C2.75 12.0764 2.75092 12.1524 2.75275 12.2282C2.76276 12.6422 2.43518 12.986 2.02109 12.9961C1.60699 13.0061 1.26319 12.6785 1.25319 12.2644C1.25107 12.1765 1.25 12.0884 1.25 12.0001C1.25 11.9118 1.25107 11.8237 1.25319 11.7358C1.26319 11.3217 1.60699 10.9941 2.02109 11.0041ZM21.6025 14.9005C21.9889 15.0497 22.1812 15.4839 22.032 15.8703C21.9685 16.0348 21.9011 16.1974 21.8298 16.3579C21.6618 16.7365 21.2186 16.9072 20.84 16.7391C20.4614 16.571 20.2908 16.1279 20.4589 15.7493C20.5201 15.6113 20.5781 15.4715 20.6327 15.3301C20.7819 14.9437 21.216 14.7514 21.6025 14.9005ZM2.39754 14.9005C2.78396 14.7514 3.21814 14.9437 3.36731 15.3301C3.42191 15.4715 3.47988 15.6113 3.54114 15.7493C3.70921 16.1279 3.53856 16.571 3.15997 16.7391C2.78139 16.9072 2.33824 16.7365 2.17017 16.3579C2.09892 16.1974 2.03147 16.0348 1.96795 15.8703C1.81878 15.4839 2.01112 15.0497 2.39754 14.9005ZM19.7597 18.3524C20.0597 18.6381 20.0713 19.1128 19.7856 19.4127C19.6643 19.5401 19.54 19.6644 19.4126 19.7857C19.1127 20.0714 18.638 20.0598 18.3523 19.7598C18.0666 19.4599 18.0782 18.9852 18.3782 18.6995C18.4878 18.595 18.5949 18.4879 18.6994 18.3783C18.9851 18.0783 19.4598 18.0667 19.7597 18.3524ZM4.24026 18.3524C4.54021 18.0667 5.01495 18.0783 5.30061 18.3783C5.40506 18.4879 5.51216 18.595 5.62183 18.6995C5.92178 18.9852 5.93337 19.4599 5.6477 19.7598C5.36204 20.0598 4.88731 20.0714 4.58736 19.7857C4.46003 19.6644 4.33566 19.5401 4.21439 19.4127C3.92873 19.1128 3.94031 18.6381 4.24026 18.3524ZM7.261 20.8401C7.42907 20.4615 7.87221 20.2909 8.2508 20.459C8.38879 20.5202 8.52855 20.5782 8.66999 20.6328C9.05641 20.782 9.24874 21.2161 9.09958 21.6026C8.95041 21.989 8.51623 22.1813 8.12981 22.0321C7.96526 21.9686 7.80267 21.9012 7.64217 21.8299C7.26358 21.6619 7.09293 21.2187 7.261 20.8401ZM16.739 20.8401C16.9071 21.2187 16.7364 21.6619 16.3578 21.8299C16.1973 21.9012 16.0347 21.9686 15.8702 22.0321C15.4838 22.1813 15.0496 21.989 14.9004 21.6026C14.7513 21.2161 14.9436 20.782 15.33 20.6328C15.4714 20.5782 15.6112 20.5202 15.7492 20.459C16.1278 20.2909 16.5709 20.4615 16.739 20.8401ZM11.004 21.979C11.0141 21.5649 11.3579 21.2373 11.7719 21.2473C11.8477 21.2492 11.9237 21.2501 12 21.2501C12.0763 21.2501 12.1523 21.2492 12.2281 21.2473C12.6421 21.2373 12.9859 21.5649 12.996 21.979C13.006 22.3931 12.6784 22.7369 12.2643 22.7469C12.1764 22.749 12.0883 22.7501 12 22.7501C11.9117 22.7501 11.8236 22.749 11.7357 22.7469C11.3216 22.7369 10.994 22.3931 11.004 21.979Z"
         fill="#2F2F2F"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75C21.5858 12.75 21.25 12.4142 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C11.5858 2.75 11.25 2.41421 11.25 2ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.25H16C16.4142 12.25 16.75 12.5858 16.75 13C16.75 13.4142 16.4142 13.75 16 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
         fill="#2F2F2F"
      />
   </svg>
);

type Category = {
   name: string;
};

type Product = {
   name: string;
   category: Category;
};

type OrderItem = {
   amount: string;
   id: number;
   order_id: number;
   product: Product;
   qty: number;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type User = {
   created_at: string;
   email: string;
   id: number;
   image: Image[];
   name: string;
   phone: string;
   role: string;
   status: string;
};

type Order = {
   address: string;
   amount: string;
   author: string;
   created_at: string;
   email: string;
   id: number;
   location_name: string;
   order_items: OrderItem[];
   pay_status: string;
   payment_method: string;
   phone: string;
   product_id: string | null;
   qty: number;
   status: string;
   transaction_id: string;
   user: User;
   user_id: number;
};

type Props = {
   params: { id: number };
};

export default function OrderDetailsContent({ params }: Props) {
   const [reviewOrReport, setReviewOrReport] = useState<string>("");
   const reportTextAreaRef = useRef<HTMLDivElement>(null);
   const reviewTextAreaRef = useRef<HTMLDivElement>(null);
   const [productIds, setProductIds] = useState<number[]>([]);
   const [userId, setUserId] = useState<number>(0);
   const [orderId, setOrderId] = useState<number>(0);
   const [transactionId, setTransactionId] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getOrder({ id: params?.id }));
   }, [params]);

   const toggleReviewOrReport = useCallback(
      (item: string) => {
         if (item === "") {
            if (reportTextAreaRef.current) {
               reportTextAreaRef.current.innerHTML = ""; // Clear the content
            }
            if (reviewTextAreaRef.current) {
               reviewTextAreaRef.current.innerHTML = ""; // Clear the content
            }
         }
         setReviewOrReport(item);
      },
      [reportTextAreaRef]
   );

   const { order = {} } = useSelector(
      (state: BuyerState) => state.buyer.orderDetails
   );

   const Order = order as Order | any;

   const orderInfo = {
      created_at: Order?.created_at !== undefined ? Order?.created_at : "",
      delivery_status: Order?.pay_status !== undefined ? Order?.pay_status : "",
      payment_method:
         Order?.payment_method !== undefined ? Order?.payment_method : "",
      status: Order?.status !== undefined ? Order?.status : "",
   };

   const orderSellerInfo = {
      company:
         Order?.order_items !== undefined &&
         Order?.order_items[0]?.product?.user?.company?.name !== undefined
            ? Order?.order_items[0]?.product?.user?.company?.name
            : "",
      companyPhone:
         Order?.order_items !== undefined &&
         Order?.order_items[0]?.product?.user?.company?.contact !== undefined
            ? Order?.order_items[0]?.product?.user?.company?.contact
            : "",
      name:
         Order?.order_items !== undefined &&
         Order?.order_items[0]?.product?.user?.name !== undefined
            ? Order?.order_items[0]?.product?.user?.name
            : "",
      phone:
         Order?.order_items !== undefined &&
         Order?.order_items[0]?.product?.user?.phone !== undefined
            ? Order?.order_items[0]?.product?.user?.phone
            : "",
      email:
         Order?.order_items !== undefined &&
         Order?.order_items[0]?.product?.user?.email !== undefined
            ? Order?.order_items[0]?.product?.user?.email
            : "",
   };

   useEffect(() => {
      if (order?.order_items?.length > 0) {
         const ids = order?.order_items?.map((item: any) => item?.product?.id);
         setProductIds(ids);
      }
      if (order?.user_id) {
         setUserId(order?.user_id);
      }
      if (order?.id) {
         setOrderId(order?.id);
      }
      if (order?.transaction_id) {
         setTransactionId(order?.transaction_id);
      }
   }, [order?.order_items, order?.user_id, order?.id, order?.transaction_id]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Order Detail" searchBox={false} />
         <div
            className="bg-[#ffffff] rounded-[20px] mt-5 mb-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <OrderCardHeader transactionId={transactionId} />
            <div className="p-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                  <div>
                     <OrderItems order={Order} />
                     <OrderPayment order={Order} />
                  </div>
                  <ReviewAndReportArea
                     reviewOrReport={reviewOrReport}
                     toggleReviewOrReport={toggleReviewOrReport}
                     reportTextAreaRef={reportTextAreaRef}
                     reviewTextAreaRef={reviewTextAreaRef}
                     order={Order}
                     productIds={productIds}
                     setProductIds={setProductIds}
                     userId={userId}
                     orderId={orderId}
                     orderInfo={orderInfo}
                     orderSellerInfo={orderSellerInfo}
                     params={params}
                  />
               </div>
            </div>
         </div>
      </Fragment>
   );
}
