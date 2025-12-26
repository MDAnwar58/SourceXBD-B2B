"use client";
import React, { useRef, useState } from "react";
import { TextEditorHandle } from "@/saller/components/TextEditor";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/store";
import {
   create_product,
   get_categories,
   get_products,
   get_product,
   get_sub_categories,
   deleteProduct,
   update_product,
   restore_product,
   force_delete_product,
} from "./ProductAcion";
import { useRouter } from "next/navigation";
import { LocalUrl } from "@/components/react/localhost";

interface Tag {
   id: string;
   text: string;
}

export default function ProductContext() {
   const [userId, setUserId] = useState<string>("");
   const name = useRef<HTMLInputElement>(null);
   const price = useRef<HTMLInputElement>(null);
   const discount_price = useRef<HTMLInputElement>(null);
   const min_order = useRef<HTMLInputElement>(null);
   const desc = useRef<TextEditorHandle>(null);
   const spec = useRef<TextEditorHandle>(null);
   const s_desc = useRef<HTMLTextAreaElement>(null);
   const images = useRef<HTMLInputElement>(null);
   const [productImages, setProductImages] = useState<object[]>([]);
   const [categoryId, setCategoryId] = useState<string>("");
   const [subCategoryId, setSubCategoryId] = useState<string>("");
   const [status, setStatus] = useState<string>("active");
   const [section, setSection] = useState<string>("");
   const [publishing, setPublishing] = useState<Array<{ name: string }>>([]);
   const type = useRef<HTMLInputElement>(null);
   const vendor = useRef<HTMLInputElement>(null);
   const [tags, setTags] = useState<Tag[]>([]);
   const [tableTab, setTableTab] = useState<string>("All");
   const stock = useRef<HTMLInputElement>(null);
   const rating_point = useRef<HTMLInputElement>(null);
   const contact = useRef<HTMLInputElement>(null);

   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const localUrl = LocalUrl();

   // write a function and function name is getCategories
   const getCategories = (): void => {
      dispatch(get_categories());
   };
   const getCubCategories = (): void => {
      dispatch(get_sub_categories());
   };
   const createProduct = async () => {
      const Name = name.current ? name.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const Specification = spec.current ? spec.current.getEditorValue() : "";
      const SDesc = s_desc.current ? s_desc.current.value : "";
      // const Title = title.current ? title.current.value : "";
      const Price = price.current ? price.current.value : "";
      const DiscountPrice = discount_price.current
         ? discount_price.current.value
         : "";
      const MinOrder = min_order.current ? min_order.current.value : "";
      const Type = type.current ? type.current.value : "";
      const Vendor = vendor.current ? vendor.current.value : "";
      const Stock = stock.current ? stock.current.value : "";
      const Images: any = images.current ? images.current.files : [];
      const RatingPoint = rating_point.current
         ? rating_point.current.value
         : "";
      const transformedTags = tags.map((tag: { id: string; text: string }) => ({
         id: tag.text,
         text: tag.text,
      }));
      const Contact = contact.current ? contact.current.value : "";
      // userId, Name, Desc, Title ,Price ,images, categoryId, subCategoryId, subStatus, section, publishing, Type, Vendor, Tags, Stock, RatingPoint this include in a formData
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("name", Name);
      formData.append("desc", Desc);
      formData.append("spacification", Specification);
      formData.append("s_desc", SDesc);
      // formData.append("title", Title);
      formData.append("price", Price);
      formData.append("discount_price", DiscountPrice);
      formData.append("min_order", MinOrder);
      if (images) {
         Array.from(Images).forEach((file: any) => {
            formData.append("files[]", file); // Use 'images[]' for multiple files
         });
      }
      formData.append("category_id", categoryId);
      formData.append("sub_category_id", subCategoryId);
      formData.append("status", status);
      formData.append("section", section);
      formData.append("publish", JSON.stringify(publishing));
      formData.append("type", Type);
      formData.append("vendor", Vendor);
      formData.append("tags", JSON.stringify(transformedTags));
      formData.append("stock", Stock);
      formData.append("rating_point", RatingPoint);
      formData.append("contact", Contact);
      dispatch(create_product({ formData, router }));
   };

   const getProducts = (
      page: number,
      perPage: number,
      search: string,
      tableTab: string
   ): void => {
      dispatch(get_products({ page, perPage, search, tableTab }));
   };

   const getProduct = (id: string): void => {
      dispatch(
         get_product({
            id,
            setProductImages,
            setStatus,
            setPublishing,
            setCategoryId,
            setSubCategoryId,
            setTags,
            localUrl,
         })
      );
   };

   const updateProduct = (id: string) => {
      const Name = name.current ? name.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";
      const Specification = spec.current ? spec.current.getEditorValue() : "";
      const SDesc = s_desc.current ? s_desc.current.value : "";
      // const Title = title.current ? title.current.value : "";
      const Price = price.current ? price.current.value : "";
      const DiscountPrice = discount_price.current
         ? discount_price.current.value
         : "";
      const MinOrder = min_order.current ? min_order.current.value : "";
      const Type = type.current ? type.current.value : "";
      const Vendor = vendor.current ? vendor.current.value : "";
      const Stock = stock.current ? stock.current.value : "";
      const Images: any = images.current ? images.current.files : [];
      const RatingPoint = rating_point.current
         ? rating_point.current.value
         : "";
      const transformedTags = tags.map((tag: { id: string; text: string }) => ({
         id: tag.text,
         text: tag.text,
      }));
      const Contact = contact.current ? contact.current.value : "";

      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("name", Name);
      formData.append("desc", Desc);
      formData.append("specification", Specification);
      formData.append("s_desc", SDesc);
      // formData.append("title", Title);
      formData.append("price", Price);
      formData.append("discount_price", DiscountPrice);
      formData.append("min_order", MinOrder);
      if (images) {
         Array.from(Images).forEach((file: any) => {
            formData.append("files[]", file); // Use 'images[]' for multiple files
         });
      }
      formData.append("category_id", categoryId);
      formData.append("sub_category_id", subCategoryId);
      formData.append("status", status);
      formData.append("section", section);
      formData.append("publish", JSON.stringify(publishing));
      formData.append("type", Type);
      formData.append("vendor", Vendor);
      formData.append("tags", JSON.stringify(transformedTags));
      formData.append("stock", Stock);
      formData.append("rating_point", RatingPoint);
      formData.append("contact", Contact);
      // console.log(Name);
      dispatch(update_product({ id, formData, router }));
   };

   const onDeleteHandle = (
      id: number,
      page: number,
      search: string,
      tableTab: string
   ) => {
      dispatch(deleteProduct({ id, page, perPage, search, tableTab }));
   };

   const onRestoreProductHandle = (
      id: number,
      page: number,
      perPage: number,
      search: string,
      tableTab: string
   ) => {
      dispatch(restore_product({ id, page, perPage, search, tableTab }));
   };

   const onForceDeleteProductHandle = (
      id: number,
      page: number,
      perPage: number,
      search: string,
      tableTab: string
   ) => {
      dispatch(force_delete_product({ id, page, perPage, search, tableTab }));
   };

   return {
      getCategories,
      getCubCategories,
      // product form data start
      userId,
      name,
      desc,
      spec,
      s_desc,
      // title,
      price,
      discount_price,
      min_order,
      images,
      productImages,
      categoryId,
      subCategoryId,
      status,
      section,
      publishing,
      type,
      vendor,
      tags,
      setTags,
      stock,
      rating_point,
      setProductImages,
      setUserId,
      setCategoryId,
      setSubCategoryId,
      setStatus,
      setSection,
      setPublishing,
      contact,
      // product form data start
      createProduct,
      getProducts,
      page,
      perPage,
      search,
      setPage,
      setSearch,
      setPerPage,
      getProduct,
      onDeleteHandle,
      updateProduct,
      tableTab,
      setTableTab,
      onRestoreProductHandle,
      onForceDeleteProductHandle,
   };
}
