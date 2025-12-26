"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import {
   CrosSvgIcon,
   DashboardThreeDotsSvgIcon,
   DownArrowSvgIcon,
   SpinSvgIcon,
} from "@admin/components/SvgIcons";
import { FAQsAccordion } from "./FAQsAccordion";
import { TextEditorHandle } from "@admin/components/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import {
   deleteFaqs,
   getFaq,
   storeFaqs,
   updateFaqs,
} from "@/admin/support/features/SupportAction";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const DropdownBtn = dynamic(() => import("@/components/DropdownBtn"), {
   ssr: false,
});
const DropdownItem = dynamic(() => import("@/components/DropdownItem"), {
   ssr: false,
});
const FAQsAddModal = dynamic(() => import("./FAQsAddModal"), {
   ssr: false,
});

const faqAccordions = [
   {
      id: 1,
      name: "Lorem ipsum dolor sit 1",
      content:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione animi in nisi amet quas officia dolor assumenda, iusto error quia quaerat nesciunt est aperiam laborum eveniet dolorum! Ipsa, quae.",
   },
   {
      id: 2,
      name: "Lorem ipsum dolor sit 2",
      content:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione animi in nisi amet quas officia dolor assumenda, iusto error quia quaerat nesciunt est aperiam laborum eveniet dolorum! Ipsa, quae.",
   },
   {
      id: 3,
      name: "Lorem ipsum dolor sit 3",
      content:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione animi in nisi amet quas officia dolor assumenda, iusto error quia quaerat nesciunt est aperiam laborum eveniet dolorum! Ipsa, quae.",
   },
   {
      id: 4,
      name: "Lorem ipsum dolor sit 4",
      content:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione animi in nisi amet quas officia dolor assumenda, iusto error quia quaerat nesciunt est aperiam laborum eveniet dolorum! Ipsa, quae.",
   },
   {
      id: 5,
      name: "Lorem ipsum dolor sit 5",
      content:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione animi in nisi amet quas officia dolor assumenda, iusto error quia quaerat nesciunt est aperiam laborum eveniet dolorum! Ipsa, quae.",
   },
];

type FAQs = {
   ans: string;
   created_at: string;
   id: number;
   qs: string;
   status: string;
};

const dropdown_button = (
   <div className="bg-[#c9c9c9] text-white rounded-[50%] w-6 h-6 flex justify-center items-center">
      <div className="w-4 h-4">
         <DashboardThreeDotsSvgIcon />
      </div>
   </div>
);

type Props = {
   limit: number;
   setLimit: React.Dispatch<React.SetStateAction<number>>;
   onHandleLoadMore: (limit: number) => void;
   loading: boolean;
};

export default function FAQsCard({
   limit,
   setLimit,
   onHandleLoadMore,
   loading,
}: Props) {
   const [edit, setEdit] = useState<boolean>(false);
   const [faqDelete, setFaqDelete] = useState<boolean>(false);
   const [faqQs, setFaqQs] = useState<string>("");
   const [faqId, setFaqId] = useState<number | null>(null);
   const [isOpen, setIsOpen] = useState(false);
   const ans = useRef<TextEditorHandle>(null);
   const formRef = useRef<HTMLFormElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   const onSubmitFAQs = useCallback(
      (e: any) => {
         e.preventDefault();
         const Ans = ans?.current ? ans?.current?.getEditorValue() : "";
         const formData = new FormData(e.target);
         formData.get("qs");
         formData.append("ans", Ans);
         dispatch(storeFaqs({ formData, limit })).finally(() => {
            formRef?.current?.reset();
            ans?.current?.setEditorValue("");
            setIsOpen(false);
         });
      },
      [dispatch, limit]
   );
   const onSubmitUpdateFAQs = useCallback(
      (e: any) => {
         e.preventDefault();
         const Ans = ans?.current ? ans?.current?.getEditorValue() : "";
         const formData = new FormData(e.target);
         formData.get("qs");
         formData.append("ans", Ans);
         dispatch(updateFaqs({ id: Number(faqId), formData, limit })).finally(
            () => {
               formRef?.current?.reset();
               setIsOpen(false);
               setFaqId(null);
               setFaqQs("");
               ans?.current?.setEditorValue("");
            }
         );
      },
      [dispatch, faqId, limit]
   );

   const {
      faqs = [],
      faq = {},
      faqLength,
   } = useSelector((state: AdminState) => state.admin.support);
   const FAQs = faqs as FAQs[];
   const FAQ = faq as FAQs;

   useEffect(() => {
      if (FAQ.qs !== undefined && FAQ.ans !== undefined) {
         setFaqId(FAQ.id);
         setFaqQs(FAQ.qs);
         ans.current?.setEditorValue(FAQ.ans);
      }
   }, [faq]);

   const onHandleEditFAQs = useCallback(
      (faqId: number) => {
         setIsOpen(true);
         dispatch(getFaq({ id: faqId }));
      },
      [dispatch]
   );

   const onHandleDeleteFAQs = useCallback(
      (faqId: number) => {
         dispatch(deleteFaqs({ id: faqId, limit }));
      },
      [dispatch, limit]
   );

   const FAQS = FAQs.map((item) => ({
      id: item.id,
      name: item.qs,
      content: item.ans,
   }));

   return (
      <Fragment>
         <div className="5lg:w-2/4 lg:w-3/4 md:w-full 6xs:w-3/4 w-full mx-auto">
            <AdminCard>
               <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] p-3">
                  <div className="flex justify-between items-center">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative w-[43px]">
                        FAQs
                     </div>

                     {!edit && !faqDelete ? (
                        <DropdownBtn
                           label={dropdown_button}
                           placement="bottom-end"
                           arrowIcon={false}
                           inline
                           className="py-1 px-2 bg-[rgba(240,242,255,0.40)]  shadow-admin-table-btn rounded-[10px] border-none"
                        >
                           <DropdownItem
                              className="!p-0 bg-[#ffffff] hover:!bg-[#4285f4] hover:!text-white shadow-admin-table-btn text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[56.22px] h-[22.15px] flex justify-center items-center transition-all duration-100 ease-linear mb-[.35rem]"
                              onClick={() => setIsOpen(!isOpen)}
                           >
                              Add
                           </DropdownItem>
                           <DropdownItem
                              className="!p-0 bg-[#ffffff] hover:!bg-[#4285f4] hover:!text-white shadow-admin-table-btn text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[56.22px] h-[22.15px]  flex justify-center items-center transition-all duration-100 ease-linear mb-[.35rem]"
                              onClick={() => setEdit(!edit)}
                           >
                              Edit
                           </DropdownItem>
                           <DropdownItem
                              className="!p-0 bg-[#ffffff] hover:!bg-[#4285f4] hover:!text-white shadow-admin-table-btn text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[56.22px] h-[22.15px]  flex justify-center items-center transition-all duration-100 ease-linear mb-[.35rem]"
                              onClick={() => setFaqDelete(true)}
                           >
                              Delete
                           </DropdownItem>
                        </DropdownBtn>
                     ) : null}
                     {edit === true && faqDelete !== true ? (
                        <Button
                           type="button"
                           className="p-1 bg-white text-red-500 hover:text-red-700 shadow-admin-card rounded-md"
                           onClick={() => setEdit(false)}
                        >
                           <div className="w-3.5 h-3.5">
                              <CrosSvgIcon />
                           </div>
                        </Button>
                     ) : faqDelete === true ? (
                        <Button
                           type="button"
                           className="p-1 bg-white text-red-500 hover:text-red-700 shadow-admin-card rounded-md"
                           onClick={() => setFaqDelete(false)}
                        >
                           <div className="w-3.5 h-3.5">
                              <CrosSvgIcon />
                           </div>
                        </Button>
                     ) : null}
                  </div>

                  <div
                     className="h-[14.7rem] overflow-y-auto"
                     style={{ scrollbarWidth: "none" }}
                  >
                     <FAQsAccordion
                        faqAccordions={FAQS}
                        edit={edit}
                        setEdit={setEdit}
                        faqDelete={faqDelete}
                        setFaqDelete={setFaqDelete}
                        onHandleEditFAQs={onHandleEditFAQs}
                        onHandleDeleteFAQs={onHandleDeleteFAQs}
                     />
                  </div>

                  {faqs.length !== faqLength ? (
                     <div className=" relative">
                        <Button
                           type="button"
                           className=" absolute left-[50%] -bottom-10 transform-translate-x-middle flex justify-center items-center bg-blue-gradient w-9 h-9 rounded-full text-xs text-white hover:text-white/90 capitalize"
                           onClick={() => onHandleLoadMore(limit + 5)}
                        >
                           {loading !== true ? (
                              <div className="w-5 h-5">
                                 <DownArrowSvgIcon />
                              </div>
                           ) : (
                              <div className="w-4 h-4">
                                 <SpinSvgIcon />
                              </div>
                           )}
                        </Button>
                     </div>
                  ) : null}
               </div>
            </AdminCard>
         </div>
         <FAQsAddModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmitFAQs={onSubmitFAQs}
            ans={ans}
            formRef={formRef}
            faqQs={faqQs}
            edit={edit}
            onSubmitUpdateFAQs={onSubmitUpdateFAQs}
         />
      </Fragment>
   );
}
