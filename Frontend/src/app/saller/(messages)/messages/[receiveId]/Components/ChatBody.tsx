"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { LoadingCircleSpinSvgIcon } from "@/components/SvgIcons";
import { debounce } from "lodash";
import { AppDispatch } from "@/app/store";
import { getReceiverWithMessage } from "@/saller/messages/features/MessageAction";
import dynamic from "next/dynamic";
const ChatBodyBlackEffect = dynamic(() => import("./ChatBodyBlackEffect"));
const ChatLeftMessage = dynamic(() => import("./ChatLeftMessage"));
const ChatRightMessage = dynamic(() => import("./ChatRightMessage"));

type Receiver = {
   id: number;
};

type UserMessage = {
   created_at: string;
   files: any;
   formatted_date: string;
   from_id: number;
   id: number;
   is_pin: number;
   massage: string;
   reply_id: number | null;
   to_id: number;
};

type Props = {
   messages: UserMessage[];
   authUser: any;
   limit: number;
   setLimit: React.Dispatch<React.SetStateAction<number>>;
   chatBodyElement: any;
   setChatBodyElement: React.Dispatch<React.SetStateAction<any>>;
   selectProducts: any[];
   onHandleRemoveProduct: (product: any) => void;
   updateSelectedProducts: (id: number, qty: number) => void;
   selectImages: any[];
   onHandleRemoveImage: (index: number) => void;
   selectDocuments: any[];
   onHandleRemoveDocument: (index: number) => void;
};
export default function ChatBody({
   messages,
   authUser,
   limit,
   setLimit,
   chatBodyElement,
   setChatBodyElement,
   selectProducts,
   onHandleRemoveProduct,
   updateSelectedProducts,
   selectImages,
   onHandleRemoveImage,
   selectDocuments,
   onHandleRemoveDocument,
}: Props) {
   const [loadMoreSpin, setLoadMoreSpin] = useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();

   const { receiver, messageLength } = useSelector(
      (state: SallerState) => state.saller.sellerMessage
   );
   const Receiver = receiver as Receiver;

   // TODO: Scroll event listener to detect when the user scrolls to the bottom
   useEffect(() => {
      if (messages.length !== messageLength && chatBodyElement) {
         const handleScroll = debounce(() => {
            if (chatBodyElement?.scrollTop <= 0 && !loadMoreSpin) {
               if (
                  chatBodyElement?.scrollHeight !== undefined &&
                  chatBodyElement?.offsetHeight !== undefined
               ) {
                  const atTheTop =
                     chatBodyElement?.scrollHeight -
                     chatBodyElement?.offsetHeight;
                  const ScrollTopWithMinusValue =
                     chatBodyElement?.scrollTop - 21;
                  const scrollTop = Math.abs(ScrollTopWithMinusValue);
                  const stayLoadingPosition = chatBodyElement?.scrollTop;

                  if (scrollTop >= atTheTop) {
                     setLoadMoreSpin(true); // Set loading state
                     setTimeout(() => {
                        setLimit(limit + 25);
                        // chatBodyElement.scrollTop = stayLoadingPosition;
                        chatBodyElement?.scrollTo({
                           top: stayLoadingPosition,
                           behavior: "smooth",
                        });
                        dispatch(
                           getReceiverWithMessage({
                              receiverId: Number(Receiver?.id),
                              limit: limit + 25,
                           })
                        ).finally(() => {
                           // chatBodyElement.scrollTop = stayLoadingPosition;
                           chatBodyElement?.scrollTo({
                              top: stayLoadingPosition,
                              behavior: "smooth",
                           });
                           setLoadMoreSpin(false); // Reset loading state
                           return;
                        });
                     }, 1000);
                  }
               }
            }
         }, 300);
         if (chatBodyElement) {
            chatBodyElement.addEventListener("scroll", handleScroll);
         }
         return () => {
            if (chatBodyElement) {
               chatBodyElement.removeEventListener("scroll", handleScroll);
            }
            handleScroll.cancel();
         };
      }
   }, [chatBodyElement, limit, dispatch, Receiver?.id, loadMoreSpin]);

   const sortedMessages = [...messages].sort((a, b) => {
      if (!a || !b || !a.created_at || !b.created_at) {
         return 0; // Treat null/undefined as equal for sorting purposes
      }
      return (
         new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
   });
   return (
      <div className="relative">
         <div
            className="pb-3 !pt-5 mb-3 h-[75vh] overflow-y-auto flex flex-col-reverse items-end"
            style={{ scrollbarWidth: "none" }}
            ref={(element) => setChatBodyElement(element)}
         >
            <div className="chat-messages transition-all duration-300 ease-linear">
               {loadMoreSpin === true ? (
                  <div className="flex justify-center">
                     <span className=" text-sm font-medium text-gray-500 inline-flex items-center">
                        <LoadingCircleSpinSvgIcon />
                        Loading...
                     </span>
                  </div>
               ) : null}
               {sortedMessages?.length > 0 &&
                  sortedMessages?.map(
                     (chat: UserMessage | any, index: number) => {
                        if (chat.from_id !== Number(authUser?.id)) {
                           return (
                              <Fragment key={index}>
                                 <ChatLeftMessage chat={chat} />
                              </Fragment>
                           );
                        } else {
                           return (
                              <Fragment key={index}>
                                 <ChatRightMessage chat={chat} />
                              </Fragment>
                           );
                        }
                     }
                  )}
            </div>
         </div>
         {selectProducts.length > 0 ||
         selectImages.length > 0 ||
         selectDocuments.length > 0 ? (
            <ChatBodyBlackEffect
               selectProducts={selectProducts}
               onHandleRemoveProduct={onHandleRemoveProduct}
               updateSelectedProducts={updateSelectedProducts}
               selectImages={selectImages}
               onHandleRemoveImage={onHandleRemoveImage}
               selectDocuments={selectDocuments}
               onHandleRemoveDocument={onHandleRemoveDocument}
            />
         ) : null}
      </div>
   );
}
