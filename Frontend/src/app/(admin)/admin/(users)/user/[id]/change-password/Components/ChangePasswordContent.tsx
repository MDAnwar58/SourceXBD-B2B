"use client";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { changeUserPassword } from "@/admin/users/features/UserAction";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const PasswordChangeInput = dynamic(() => import("./PasswordChangeInput"));
const Button = dynamic(() => import("@/components/Button"));
const Grid = dynamic(() => import("@/components/grid"));

type Props = {
   params: {
      id: number;
   };
};

export default function ChangePasswordContent({ params }: Props) {
   const [userId, setUserId] = useState<number>(0);
   const [password, setPassword] = useState<string>("");
   const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      setUserId(params?.id);
   }, [params]);

   const onChangeUserPassword = useCallback(() => {
      const payload = {
         password: password,
         password_confirmation: passwordConfirmation,
      };
      dispatch(changeUserPassword({ id: userId, payload, router }));
   }, [dispatch, userId, password, passwordConfirmation, router]);
   const { error = [] } = useSelector((state: AdminState) => state.admin.user);
   const Error = error as any;
   return (
      <Fragment>
         <div className="4xs:w-[60%] 3xs:w-[70%] xs:w-[85%] w-full mx-auto mt-40">
            <Grid
               cols={2}
               gap={5}
               className="6lg:!grid-cols-2 !grid-cols-1 !gap-3"
            >
               <div className="col-span-1 3xs:pb-0 pb-3">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal mb-1">
                     New Password
                  </div>
                  <div>
                     <PasswordChangeInput
                        placeholder="Password"
                        onChange={(e: any) => setPassword(e.target.value)}
                        defaultValue={password}
                     />
                     {Error?.password && (
                        <small className=" text-red-500 text-xs">
                           {Error?.password}
                        </small>
                     )}
                  </div>
               </div>
               <div className="col-span-1">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal  mb-1">
                     Confirm Password
                  </div>
                  <div>
                     <PasswordChangeInput
                        placeholder="Confirm Password"
                        onChange={(e: any) =>
                           setPasswordConfirmation(e.target.value)
                        }
                        defaultValue={passwordConfirmation}
                     />
                     {Error?.password_confirmation && (
                        <small className=" text-red-500 text-xs">
                           {Error?.password_confirmation}
                        </small>
                     )}
                  </div>
               </div>
            </Grid>

            <Button
               type="button"
               className="cursor-pointer text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-lg font-bold rounded-[14px] h-[58px] xl:w-[492px] w-full mx-auto flex justify-center items-center mt-4 mb-20"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
               }}
               onClick={() => onChangeUserPassword()}
            >
               Change Password
            </Button>
         </div>
      </Fragment>
   );
}
