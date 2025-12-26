import React, { useRef, useState } from "react";
import { SvgPlainIcon } from "@/components/SvgIcons";
import { io } from "socket.io-client";
import { notify } from "@/app/utils/notify";
import Axios from "@/app/utils/axios-client";
import { useHotNotify } from "@/components/react/react-hot-toaster";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/card"));
const TextArea = dynamic(() => import("@/components/react/textarea"));
const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));

type Props = {
   toId: number | null;
};

export default function MessageSendArea({ toId }: Props) {
   const [localhost] = useState<string>("http://localhost:6001");
   const [err, setErr] = useState<string | null>(null);
   const formRef = useRef<HTMLFormElement>(null);

   const onSendMessageOnSeller = async (
      e: React.FormEvent<HTMLFormElement>
   ) => {
      e.preventDefault();
      let socket = io(localhost);
      const formData = new FormData(e.currentTarget);
      await Axios.post("/user/messages/send", formData)
         .then(async (res) => {
            if (res.status === 200) {
               const data = await res.data.message;
               socket.emit("sendChatToSourceBDXServer", data);
               useHotNotify("Your Message Send!", "success", 1000);
               formRef.current?.reset();
            }
         })
         .catch((err) => {
            useHotNotify("Something went wrong!", "error", 1000);
            setErr(err?.response?.data.errors);
         });
   };

   return (
      <Card className="!bg-[rgba(152,176,238,0.05)] !rounded-[14px] !pb-7 !px-7">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
            Send Message
         </div>
         <form
            onSubmit={onSendMessageOnSeller}
            ref={formRef}
            className=" relative"
         >
            {toId !== null ? (
               <Input
                  type="text"
                  defaultValue={Number(toId)}
                  name="to_id"
                  className="hidden"
               />
            ) : null}
            <TextArea
               className=" shadow-admin-card rounded-md h-[132px]"
               placeholder="message ..."
               name="message"
            />
            <Button
               type="submit"
               className=" absolute bottom-[.3rem] right-1 bg-[#90a8e6] text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium rounded w-[76px] h-5 flex items-center justify-center gap-x-2"
            >
               <div>Massege</div>
               <div className="w-3 h-3">
                  <SvgPlainIcon />
               </div>
            </Button>
         </form>
      </Card>
   );
}
