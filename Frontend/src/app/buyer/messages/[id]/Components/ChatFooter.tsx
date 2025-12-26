"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { SendSvgIcon } from "@/buyer/components/SvgIcons";
import { BuyerState } from "@/buyer/store";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const ProductsModal = dynamic(() => import("./ProductsModal"), { ssr: false });
const UploadBtns = dynamic(() => import("./UploadBtns"), { ssr: false });

type Product = {
   id: number;
   discount_price: number | null;
   image: string;
   name: string;
   price: number;
   stock: number;
   min_order: number;
};

type Receiver = {
   id: number;
};

type Props = {
   sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
   messageFormRef: any;
   productSelectionModal: boolean;
   setProductSelectionModal: React.Dispatch<React.SetStateAction<boolean>>;
   authUser: any;
   selectProducts: any[];
   setSelectProducts: React.Dispatch<React.SetStateAction<any[]>>;
   onHandleSelectProducts: (id: number) => void;
   onHandleSearchProduct: (search: string) => void;
   limitProduct: number;
   onHandleProductsLimit: (limit: number) => void;
   onHandleSelectImages: (files: any) => void;
   onHandleSelectDocuments: (files: any) => void;
   messageEmpty: boolean;
};

export default function ChatFooter({
   sendMessage,
   messageFormRef,
   productSelectionModal,
   setProductSelectionModal,
   authUser,
   selectProducts,
   setSelectProducts,
   onHandleSelectProducts,
   onHandleSearchProduct,
   limitProduct,
   onHandleProductsLimit,
   onHandleSelectImages,
   onHandleSelectDocuments,
   messageEmpty,
}: Props) {
   const [uploadBtnsOpen, setUploadBtnsOpen] = useState<boolean>(false);
   const [typing, setTyping] = useState<boolean>(false);
   const typingDelay = 1000; // Delay in milliseconds
   let typingTimeout: NodeJS.Timeout;
   const imageRef = useRef<HTMLInputElement>(null);
   const pdfRef = useRef<HTMLInputElement>(null);
   const typeInputRef = useRef<HTMLInputElement>(null);
   const localhost = process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      : "";

   useEffect(() => {
      if (productSelectionModal) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }
   }, [productSelectionModal]);

   const { receiver } = useSelector(
      (state: BuyerState) => state.buyer.buyerMessage
   );
   const Receiver = receiver as Receiver;

   const handleTyping = (fromId: number, toId: number, field: string) => {
      if (!field || field.trim() === "") {
         clearTimeout(typingTimeout);

         typingTimeout = setTimeout(() => {
            handleStopTyping(fromId, toId);
         }, 500);
      } else {
         const socket = io(localhost);
         if (!typing) {
            setTyping(true);
            const chatMessage = {
               fromId: Number(fromId),
               toId: Number(toId),
               typing: true,
            };
            socket.emit("sendChatUserTypeingToSourceBDXServer", chatMessage);
         }

         clearTimeout(typingTimeout);

         typingTimeout = setTimeout(() => {
            handleStopTyping(fromId, toId);
         }, typingDelay);
      }
   };

   const handleStopTyping = (fromId: number, toId: number) => {
      const socket = io(localhost);
      if (typing) {
         setTyping(false);
         const chatMessage = {
            fromId: Number(fromId),
            toId: Number(toId),
            typing: false,
         };
         socket.emit("sendChatUserTypeingToSourceBDXServer", chatMessage);
      }
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            typeInputRef.current &&
            !typeInputRef.current.contains(event.target as Node)
         ) {
            handleStopTyping(Receiver?.id, authUser?.id);
         }
      };

      const handleKeyUp = (event: KeyboardEvent) => {
         if (event.key === "Enter") {
            handleStopTyping(Receiver?.id, authUser?.id); // Ensure typing stops after sending a message
         } else if (event.key === "Backspace") {
            handleStopTyping(Receiver?.id, authUser?.id); // Ensure typing stops after sending a message
         }
      };

      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyUp);

      return () => {
         document.removeEventListener("click", handleClickOutside);
         document.removeEventListener("keydown", handleKeyUp);
      };
   }, [typing]);

   return (
      <Fragment>
         <form
            onSubmit={sendMessage}
            ref={messageFormRef}
            className="flex gap-3"
         >
            <UploadBtns
               productSelectionModal={productSelectionModal}
               setProductSelectionModal={setProductSelectionModal}
               uploadBtnsOpen={uploadBtnsOpen}
               setUploadBtnsOpen={setUploadBtnsOpen}
               imageRef={imageRef}
               pdfRef={pdfRef}
            />
            <Input
               type="file"
               className="hidden"
               inputRef={imageRef}
               name="images[]"
               multiple
               onChange={(e) => onHandleSelectImages(e.target.files)}
            />
            <Input
               type="file"
               className="hidden"
               inputRef={pdfRef}
               name="documents[]"
               accept=".pdf"
               onChange={(e) => onHandleSelectDocuments(e.target.files)}
            />
            <div className="w-full relative">
               <Input
                  type="text"
                  className="bg-[#ffffff] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[14px] h-10 ps-5 pe-14 shadow-admin-card w-full border-none ring-0 focus:border-none focus:ring-0"
                  placeholder="Type a Message"
                  name="message"
                  inputRef={typeInputRef}
                  onChange={(e: any) =>
                     handleTyping(Receiver?.id, authUser?.id, e.target.value)
                  }
               />
               <Button
                  type="submit"
                  className="w-[25.29px] h-6 text-[#4285F4] absolute right-3 top-[50%] transform-translate-y-middle"
               >
                  <SendSvgIcon />
                  {/* <ImageGallerySvgIcon /> */}
               </Button>
            </div>
         </form>
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
      </Fragment>
   );
}
