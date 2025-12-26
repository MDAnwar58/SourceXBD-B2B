import React, { useCallback, useRef, useState } from "react";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import { update_company_profile } from "@/saller/settings/features/SettingsAction";
import { TextEditorHandle } from "@/saller/components/TextEditor";
import { change_password } from "./SettingsAction";

type IdCard = {
   url: string;
   title: string;
};

export default function SettingsContext() {
   const image = useRef<HTMLInputElement>(null);
   const name = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const phone = useRef<HTMLInputElement>(null);
   const current_password = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const confirmPassword = useRef<HTMLInputElement>(null);
   const formRef = useRef<HTMLFormElement>(null);
   const passwordFormRef = useRef<HTMLFormElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   const updateProfile = useCallback((): void => {
      const Name = name.current?.value || "";
      const Email = email.current?.value || "";
      const Phone = phone.current?.value || "";
      const Image: File | string =
         image.current && image.current?.files ? image.current?.files[0] : "";

      const formData = new FormData();
      formData.append("name", Name);
      formData.append("email", Email);
      formData.append("phone", Phone);
      formData.append("image", Image);

      dispatch(update_company_profile({ formData }));
   }, [dispatch]);
   const changePassword = async () => {
      const currentPassword = current_password.current
         ? current_password.current.value
         : "";
      const Password = password.current ? password.current.value : "";
      const ConfirmPassword = confirmPassword.current
         ? confirmPassword.current.value
         : "";
      const formData = new FormData();
      formData.append("current_password", currentPassword);
      formData.append("new_password", Password);
      formData.append("new_password_confirmation", ConfirmPassword);

      dispatch(change_password({ formData, passwordFormRef })).then(() => {
         passwordFormRef?.current?.reset();
      });
   };

   return {
      image,
      name,
      email,
      phone,
      current_password,
      password,
      confirmPassword,
      formRef,
      passwordFormRef,
      updateProfile,
      changePassword,
   };
}
