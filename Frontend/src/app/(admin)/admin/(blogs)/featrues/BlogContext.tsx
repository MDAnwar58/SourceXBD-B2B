import React, { useRef, useState } from "react";
import { create_blog, delete_blog, update_blog } from "./BlogAction";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { useRouter } from "next/navigation";
import { TextEditorHandle } from "@admin/components/TextEditor";

type Tag = {
   id: string;
   text: string;
};

type Blog = {
   title: string;
   sub_title: string;
   type: string;
   desc: string;
   tags: Tag[];
   status: string;
   image: string;
};

export default function BlogContext() {
   const title = useRef<HTMLInputElement>(null);
   const sub_title = useRef<HTMLInputElement>(null);
   const type = useRef<HTMLInputElement>(null);
   const desc = useRef<TextEditorHandle>(null);
   const [tags, setTags] = useState<Tag[]>([]);
   const [status, setStatus] = useState<string>("active");
   const [image, setImage] = useState<string>("");

   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const createBlog = () => {
      const Title = title.current ? title.current.value : "";
      const SubTitle = sub_title.current ? sub_title.current.value : "";
      const Type = type.current ? type.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const transformedTags = tags.map((tag: { id: string; text: string }) => ({
         id: tag.text,
         text: tag.text,
      }));

      const formData = new FormData();
      formData.append("title", Title);
      formData.append("sub_title", SubTitle);
      formData.append("type", Type);
      formData.append("desc", Desc);
      formData.append("tags", JSON.stringify(transformedTags));
      formData.append("status", status);
      formData.append("images", image);
      dispatch(create_blog({ formData, router }));
   };

   const updateBlog = (id: string) => {
      const Title = title.current ? title.current.value : "";
      const SubTitle = sub_title.current ? sub_title.current.value : "";
      const Type = type.current ? type.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const transformedTags = tags.map((tag: { id: string; text: string }) => ({
         id: tag.text,
         text: tag.text,
      }));

      const formData = new FormData();
      formData.append("title", Title);
      formData.append("sub_title", SubTitle);
      formData.append("type", Type);
      formData.append("desc", Desc);
      formData.append("tags", JSON.stringify(transformedTags));
      formData.append("status", status);
      formData.append("images", image);
      dispatch(update_blog({ id, formData, router }));
   };

   const onDeleteHandle = (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => {
      dispatch(delete_blog({ id, page, perPage, search }));
   };
   return {
      page,
      perPage,
      search,
      setPerPage,
      setPage,
      setSearch,
      title,
      sub_title,
      type,
      desc,
      status,
      setStatus,
      setImage,
      image,
      tags,
      setTags,
      createBlog,
      updateBlog,
      onDeleteHandle,
   };
}
