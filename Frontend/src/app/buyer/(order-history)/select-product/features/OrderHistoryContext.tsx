import React, { useRef, useState } from "react";
import { TextEditorHandle } from "@/buyer/components/TextEditor";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/buyer/store";
import { add_product_selection } from "./OrderHistoryAction";

interface Tag {
   id: string;
   text: string;
}
export default function OrderHistoryContext() {
   const name = useRef<HTMLInputElement>(null);
   const desc = useRef<TextEditorHandle>(null);
   const image = useRef<HTMLInputElement>(null);
   const [showImage, setShowImage] = useState<string>("");
   const [status, setStatus] = useState<string>("");
   const type = useRef<HTMLInputElement>(null);
   const vendor = useRef<HTMLInputElement>(null);
   const [categoryId, setCategoryId] = useState<number | null>(null);
   const [tags, setTags] = useState<Tag[]>([]);
   const dispatch = useDispatch<AppDispatch>();

   const addProductSelection = () => {
      const Name = name.current ? name.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const Image =
         image.current && image.current.files && image.current.files[0]
            ? image.current.files[0]
            : "";
      const Status = status;
      const Type = type.current ? type.current.value : "";
      const Vendor = vendor.current ? vendor.current.value : "";
      const CategoryId = categoryId ? String(categoryId) : "";
      const Tags = JSON.stringify(tags);

      const formData = new FormData();
      formData.append("name", Name);
      formData.append("desc", Desc);
      formData.append("image", Image);
      formData.append("status", Status);
      formData.append("type", Type);
      formData.append("vendor", Vendor);
      formData.append("categoryId", CategoryId);
      formData.append("tags", Tags);

      dispatch(add_product_selection({ formData }));
   };
   return {
      name,
      desc,
      image,
      showImage,
      setShowImage,
      status,
      setStatus,
      type,
      vendor,
      categoryId,
      setCategoryId,
      tags,
      setTags,
      addProductSelection,
   };
}
