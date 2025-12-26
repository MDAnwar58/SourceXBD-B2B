"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { AppDispatch } from "@/saller/store";
import {
   getProducts,
   getReceiverWithMessage,
   getRecentMessageUserList,
} from "@/saller/messages/features/MessageAction";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";
import Axios from "@/app/utils/axios-client";
import { Window } from "@/components/react/window";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const AdminCard = dynamic(() => import("@admin/components/card"));
const Grid = dynamic(() => import("@admin/components/grid"));
const MessageSidebarSearch = dynamic(() => import("./MessageSidebarSearch"));
const MessagesSidebarPinnedUserMessages = dynamic(
   () => import("./MessagesSidebarPinnedUserMessages")
);
const SidebarUserMessages = dynamic(() => import("./SidebarUserMessages"));
const ChatHeader = dynamic(() => import("./ChatHeader"));
const ChatBody = dynamic(() => import("./ChatBody"));
const ChatFooter = dynamic(() => import("./ChatFooter"));

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

export default function MessageContent() {
   const [localhost, setLocalhost] = useState(
      process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         : ""
   );
   const [limit, setLimit] = useState<number>(25);
   const [search, setSearch] = useState<string>("");
   const [recentUserLimit, setRecentUserLimit] = useState<number>(15);
   const [receiverId, setReceiverId] = useState<number | null>(null);
   const [userMessages, setUserMessages] = useState<UserMessage[] | any>([]);
   const [tabPill, setTabPill] = useState("All");
   const [authUser, setAuthUser] = useState<any>(null);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [windowWidth, setWindowWidth] = useState<number | null>(null);
   const messageFormRef = useRef<HTMLFormElement>(null);
   const [productSelectionModal, setProductSelectionModal] =
      useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();
   const [chatBodyElement, setChatBodyElement] =
      useState<HTMLDivElement | null>(null);
   const screenWindow = Window();
   const router = useRouter();
   const [limitProduct, setLimitProduct] = useState<number>(5);
   const [searchProduct, setSearchProduct] = useState<string>("");
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
      dispatch(getRecentMessageUserList({ limit: recentUserLimit, search }));
   }, [dispatch, recentUserLimit, search]);

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
            if (chatBodyElement) {
               chatBodyElement.classList.add("pb-14");
               chatBodyElement.classList.remove("pb-3");
               chatBodyElement?.scrollTo({
                  top: chatBodyElement?.scrollHeight + 300,
                  behavior: "smooth",
               });
            }
            socket.emit("sendChatToSourceBDXServer", data);
            setSelectProducts([]);
            setSelectImages([]);
            setSelectDocuments([]);
            messageFormRef.current?.reset();
         })
         .catch((err) => {
            setError(err?.response?.data.errors);
         });
   };

   useEffect(() => {
      const socket = io(localhost);
      socket.on("sendChatToSourceBDXClient", (data) => {
         setUserMessages((prevMessages: UserMessage[]) => {
            const existMessages = prevMessages.filter(
               (chat) =>
                  chat.from_id === Number(data?.from_id) &&
                  chat.to_id === Number(data?.to_id)
            );
            // console.log(existMessage.length === prevMessages.length);
            if (existMessages.length > 0) {
               return [...prevMessages, data];
            } else {
               return prevMessages;
            }
         });
         dispatch(getRecentMessageUserList({ limit: recentUserLimit, search }));
      });
      // Cleanup socket and timeout
      return () => {
         socket.disconnect();
      };
   }, [localhost, dispatch]);

   const { user } = useSelector(
      (state: SallerState) => state.saller.sallerCommon
   );

   const { messages = [] } = useSelector(
      (state: SallerState) => state.saller.sellerMessage
   );
   useEffect(() => {
      if (user !== null) {
         setAuthUser(user);
      }
      if (Array.isArray(messages)) {
         setUserMessages(messages);
      }
   }, [user, messages]);

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

   const onChangeToBackUserList = useCallback(() => {
      router.push("/saller/messages");
      setReceiverId(null);
   }, [router]);

   const searchUser = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getRecentMessageUserList({ limit: recentUserLimit, search }));
      },
      [dispatch, recentUserLimit]
   );

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
   const updateSelectedProducts = useCallback((product: any, qty: number) => {
      setSelectProducts((prevProducts) => {
         const updatedProducts = prevProducts.map((p) =>
            p.id === product?.id ? { ...p, qty: qty } : p
         );
         return updatedProducts;
      });
   }, []);

   return (
      <Fragment>
         {Number(windowWidth) < 1175 && receiverId !== null ? (
            <Button
               type="button"
               className="5lg:hidden block px-7 py-2 bg-blue-gradient text-white rounded-2xl text-sm mb-2"
               onClick={onChangeToBackUserList}
            >
               Back
            </Button>
         ) : null}
         <Grid cols={12} gap={7}>
            {Number(windowWidth) < 1175 && receiverId === null ? (
               <div className="2xl:col-span-4 5lg:col-span-5 col-span-12">
                  <AdminCard className=" !px-3">
                     <MessageSidebarSearch searchUser={searchUser} />
                     {/* <MessageSidebarTabPills
                        tabPill={tabPill}
                        setTabPill={setTabPill}
                     /> */}
                     <MessagesSidebarPinnedUserMessages
                        search={search}
                        recentUserLimit={recentUserLimit}
                     />
                     <SidebarUserMessages
                        search={search}
                        recentUserLimit={recentUserLimit}
                     />
                  </AdminCard>
               </div>
            ) : (
               Number(windowWidth) > 1175 && (
                  <div className="2xl:col-span-4 5lg:col-span-5 col-span-12">
                     <AdminCard className=" !px-3">
                        <MessageSidebarSearch searchUser={searchUser} />
                        {/* <MessageSidebarTabPills
                           tabPill={tabPill}
                           setTabPill={setTabPill}
                        /> */}
                        <MessagesSidebarPinnedUserMessages
                           search={search}
                           recentUserLimit={recentUserLimit}
                        />
                        <SidebarUserMessages
                           search={search}
                           recentUserLimit={recentUserLimit}
                        />
                     </AdminCard>
                  </div>
               )
            )}

            {receiverId !== null ? (
               <div className="2xl:col-span-8 5lg:col-span-7 col-span-12">
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
            ) : Number(windowWidth) > 1175 ? (
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
