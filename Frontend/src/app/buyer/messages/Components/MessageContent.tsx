"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
   getProducts,
   getReceiverWithMessage,
   getRecentMessageUserList,
} from "@/buyer/messages/features/MessageAction";
import io from "socket.io-client";
import Axios from "@/app/utils/axios-client";
import { BuyerState } from "@/buyer/store";
import { Window } from "@/components/react/window";
import { useNextParams } from "@/components/react/params";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Grid = dynamic(() => import("@admin/components/grid"));
const MessageSidebarSearch = dynamic(() => import("./MessageSidebarSearch"));
const MessageSidebarTabPills = dynamic(
   () => import("./MessageSidebarTabPills")
);
const MessagesSidebarPinnedUserMessages = dynamic(
   () => import("./MessagesSidebarPinnedUserMessages")
);
const SidebarUserMessages = dynamic(() => import("./SidebarUserMessages"));
const ChatHeader = dynamic(() => import("./ChatHeader"));
const ChatBody = dynamic(() => import("./ChatBody"));
const ChatFooter = dynamic(() => import("./ChatFooter"));
const Button = dynamic(() => import("@/components/Button"));

type Product = {
   id: number;
   discount_price: number | null;
   image: string;
   name: string;
   price: number;
   stock: number;
   min_order: number;
};

export default function MessageContent() {
   const [limit, setLimit] = useState<number>(25);
   const [search, setSearch] = useState<string>("");
   const [receiverId, setReceiverId] = useState<number | null>(null);
   const [tabPill, setTabPill] = useState<string>("All");
   const [localhost, setLocalhost] = useState<string>(
      process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         : ""
   );
   const [productSelectionModal, setProductSelectionModal] =
      useState<boolean>(false);
   const [userMessages, setUserMessages] = useState<any>([]);
   const [error, setError] = useState<{} | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [windowWidth, setWindowWidth] = useState<number | null>(null);
   const messageFormRef = useRef<HTMLFormElement>(null);
   const [chatBodyElement, setChatBodyElement] =
      useState<HTMLDivElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const screenWindow = Window();
   const [searchProduct, setSearchProduct] = useState<string>("");
   const [limitProduct, setLimitProduct] = useState<number>(5);
   const [selectProducts, setSelectProducts] = useState<any[]>([]);
   const [selectImages, setSelectImages] = useState([]);
   const [selectDocuments, setSelectDocuments] = useState([]);

   // useEffect(() => {
   //    if (params?.get("receiverId") !== null) {
   //       setReceiverId(Number(params?.get("receiverId")));
   //       dispatch(
   //          getReceiverWithMessage({
   //             receiverId: Number(params?.get("receiverId")),
   //             limit: limit,
   //          })
   //       );
   //       dispatch(getProducts({ limit: limitProduct, search: searchProduct }));
   //    }
   // }, [params, dispatch, limitProduct, searchProduct]);

   useEffect(() => {
      dispatch(getRecentMessageUserList({ search: search }));
   }, [dispatch, search]);

   const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let socket = io(localhost);
      const formData = new FormData(e.currentTarget);
      formData.append("to_id", String(receiverId));
      formData.get("message") as string;

      if (selectProducts.length > 0) {
         const products = selectProducts.map((product) => ({
            id: product.id,
            qty: product.qty,
         }));
         formData.append("products", JSON.stringify(products));
      }
      if (selectImages.length > 0) {
         formData.getAll("images[]");
      }
      formData.getAll("documents[]");
      setLoading(true);
      await Axios.post("/user/messages/send", formData)
         .then(async (res) => {
            const data = await res.data.message;
            // console.log(res.data);
            if (chatBodyElement) {
               // console.log(chatBodyElement?.scrollHeight);
               chatBodyElement?.scrollTo({
                  top: chatBodyElement?.scrollHeight + 100,
                  behavior: "smooth",
               });
            }
            socket.emit("sendChatToSourceBDXServer", data);
            setLoading(false);
            setSelectProducts([]);
            setSelectImages([]);
            setSelectDocuments([]);
            messageFormRef.current?.reset();
         })
         .catch((err) => {
            setError(err?.response?.data.errors);
            setLoading(false);
         });
   };

   // const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
   //    e.preventDefault();
   //    let socket = io(localhost);
   //    const formData = new FormData(e.currentTarget);
   //    formData.append("to_id", String(receiverId));
   //    const message = formData.get("message") as string;
   //    setLoading(true);
   //    await Axios.post("/user/messages/send", {
   //       to_id: receiverId,
   //       message: message,
   //    })
   //       .then(async (res) => {
   //          const data = await res.data.message;
   //          if (chatBodyElement) {
   //             console.log(chatBodyElement?.scrollHeight);
   //             chatBodyElement?.scrollTo({
   //                top: chatBodyElement?.scrollHeight + 100,
   //                behavior: "smooth",
   //             });
   //          }
   //          socket.emit("sendChatToSourceBDXServer", data);
   //          setLoading(false);
   //          messageFormRef.current?.reset();
   //       })
   //       .catch((err) => {
   //          console.log(err?.response?.data.errors);
   //          setError(err?.response?.data.errors);
   //          setLoading(false);
   //       });
   // };

   useEffect(() => {
      let socket = io(localhost);
      socket.on("sendChatToSourceBDXClient", (data) => {
         // console.log(data);
         setUserMessages((prevMessages: any[]) => {
            const existMessages = prevMessages.filter(
               (chat) =>
                  chat.from_id === Number(data?.from_id) &&
                  chat.to_id === Number(data?.to_id)
            );
            // console.log(existMessage.length === prevMessages.length);
            if (existMessages.length > 0) {
               // console.log(data);
               return [...prevMessages, data];
            } else {
               return prevMessages;
            }
         });
         dispatch(getRecentMessageUserList({ search: search }));
      });
      return () => {
         socket.disconnect();
      };
   }, [localhost, dispatch, search]);

   const [authUser, setAuthUser] = useState<any>(null);
   const { messages = [] } = useSelector(
      (state: BuyerState) => state.buyer.buyerMessage
   );
   const { user = {} } = useSelector((state: BuyerState) => state.buyer.common);
   useEffect(() => {
      if (user !== null) {
         setAuthUser(user);
      }
      setUserMessages(messages);
   }, [user, messages]);

   const onChangeToBackUserList = useCallback(() => {
      router.push("/buyer/messages");
      setReceiverId(null);
   }, [router]);

   useEffect(() => {
      const handleResize = () => {
         if (screenWindow !== undefined) {
            setWindowWidth(screenWindow?.innerWidth);
         }
      };
      handleResize();
      screenWindow?.addEventListener("resize", handleResize);
      return () => {
         screenWindow?.removeEventListener("resize", handleResize);
      };
   }, [screenWindow]);

   const onHandleSelectProducts = useCallback((product: any) => {
      setSelectProducts((prevSelected) => {
         const isAlreadySelected = prevSelected.some(
            (selected) => selected.id === product.id
         );
         if (isAlreadySelected) {
            return prevSelected.filter(
               (selected) => selected.id !== product.id
            );
         }
         return [...prevSelected, { ...product, qty: product.min_order }];
      });
   }, []);
   const updateSelectedProducts = useCallback((product: any, qty: number) => {
      setSelectProducts((prevProducts) => {
         const updatedProducts = prevProducts.map((p) =>
            p.id === product?.id ? { ...p, qty: qty } : p
         );
         return updatedProducts;
      });
   }, []);
   const onHandleSearchProduct = useCallback(
      (search: string) => {
         setSearchProduct(search);
         dispatch(getProducts({ limit: limitProduct, search }));
      },
      [dispatch, limitProduct]
   );
   const onHandleProductsLimit = useCallback(
      (limit: number) => {
         setLimitProduct(limit);
         dispatch(getProducts({ limit, search: searchProduct }));
      },
      [dispatch, searchProduct]
   );
   const onHandleRemoveProduct = useCallback(
      (product: any) => {
         const index = selectProducts.findIndex(
            (p: any) => p.id === product.id
         );
         if (index > -1) {
            selectProducts.splice(index, 1);
            setSelectProducts([...selectProducts]);
         }
      },
      [selectProducts]
   );

   const onHandleSelectImages = (files: any) => {
      setSelectImages(Array.from(files));
   };
   const onHandleRemoveImage = useCallback(
      (index: number) => {
         const updatedFiles = [
            ...selectImages.slice(0, index),
            ...selectImages.slice(index + 1),
         ];
         setSelectImages(updatedFiles);

         if (updatedFiles.length === 0) {
            setSelectImages([]);
         }
      },
      [selectImages]
   );
   const onHandleSelectDocuments = (files: any) => {
      setSelectDocuments(Array.from(files));
   };
   const onHandleRemoveDocument = useCallback(
      (index: number) => {
         const updatedDocumentFiles = [...selectDocuments];
         updatedDocumentFiles.splice(index, 1);
         setSelectDocuments(updatedDocumentFiles);
      },
      [selectDocuments]
   );
   // console.log(receiverId);
   return (
      <Fragment>
         {Number(windowWidth) < 1280 && receiverId !== null ? (
            <Button
               type="button"
               className="xl:hidden block px-7 py-2 bg-blue-gradient text-white rounded-2xl text-sm mb-2"
               onClick={onChangeToBackUserList}
            >
               Back
            </Button>
         ) : null}
         <Grid cols={12} gap={7}>
            {Number(windowWidth) < 1280 && receiverId === null ? (
               <div className="2xl:col-span-4 xl:col-span-5 col-span-12">
                  <AdminCard className=" !px-3">
                     <MessageSidebarSearch />
                     {/* <MessageSidebarTabPills
                        tabPill={tabPill}
                        setTabPill={setTabPill}
                     /> */}
                     <MessagesSidebarPinnedUserMessages search={search} />
                     <SidebarUserMessages search={search} />
                  </AdminCard>
               </div>
            ) : (
               Number(windowWidth) > 1280 && (
                  <div className="2xl:col-span-4 xl:col-span-5 col-span-12">
                     <AdminCard className=" !px-3">
                        <MessageSidebarSearch />
                        {/* <MessageSidebarTabPills
                           tabPill={tabPill}
                           setTabPill={setTabPill}
                        /> */}
                        <MessagesSidebarPinnedUserMessages search={search} />
                        <SidebarUserMessages search={search} />
                     </AdminCard>
                  </div>
               )
            )}

            {receiverId !== null ? (
               <div className="2xl:col-span-8 xl:col-span-7 col-span-12">
                  <AdminCard>
                     <AdminCard className="!bg-white !py-3 !px-3">
                        <ChatHeader authUser={authUser} />
                     </AdminCard>
                     <ChatBody
                        messages={userMessages}
                        authUser={authUser}
                        limit={limit}
                        setLimit={setLimit}
                        chatBodyElement={chatBodyElement}
                        setChatBodyElement={setChatBodyElement}
                        selectProducts={selectProducts}
                        onHandleRemoveProduct={onHandleRemoveProduct}
                        updateSelectedProducts={updateSelectedProducts}
                        selectImages={selectImages}
                        onHandleRemoveImage={onHandleRemoveImage}
                        selectDocuments={selectDocuments}
                        onHandleRemoveDocument={onHandleRemoveDocument}
                     />
                     <ChatFooter
                        sendMessage={sendMessage}
                        messageFormRef={messageFormRef}
                        productSelectionModal={productSelectionModal}
                        setProductSelectionModal={setProductSelectionModal}
                        authUser={authUser}
                        selectProducts={selectProducts}
                        setSelectProducts={setSelectProducts}
                        onHandleSelectProducts={onHandleSelectProducts}
                        onHandleSearchProduct={onHandleSearchProduct}
                        limitProduct={limitProduct}
                        onHandleProductsLimit={onHandleProductsLimit}
                        onHandleSelectImages={onHandleSelectImages}
                        onHandleSelectDocuments={onHandleSelectDocuments}
                     />
                  </AdminCard>
               </div>
            ) : Number(windowWidth) > 1280 ? (
               <div className="2xl:col-span-8 5lg:col-span-7 col-span-12">
                  <AdminCard>
                     <div className="text-blue-400 text-xl text-center font-semibold font-['Raleway-Bold',_sans-serif]">
                        Please Select a User
                     </div>
                  </AdminCard>
               </div>
            ) : null}
         </Grid>
      </Fragment>
   );
}
