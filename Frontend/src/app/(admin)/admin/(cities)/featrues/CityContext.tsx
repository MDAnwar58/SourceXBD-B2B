import React, { useRef, useState } from "react";
import { create_city, delete_city, update_city } from "./CityAcion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { TextEditorHandle } from "@admin/components/TextEditor";
import { useRouter } from "next/navigation";

export default function CityContext() {
   const name = useRef<HTMLInputElement>(null);
   const map = useRef<HTMLInputElement>(null);
   const [country, setCountry] = useState<any>({});
   const [image, setImage] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const [status, setStatus] = useState<string>("active");

   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const createCity = () => {
      const Name = name.current ? name.current.value : "";
      const MapValue = map.current ? map.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";

      // const payload = {
      //    name: Name,
      //    country_id: country.id,
      //    map: MapValue,
      //    desc: Desc,
      //    status: status,
      // };

      const formData = new FormData();
      formData.append("name", Name);
      formData.append("country_id", country.id);
      formData.append("map", MapValue);
      formData.append("image", image);
      formData.append("desc", Desc);
      formData.append("status", status);

      dispatch(create_city({ formData, router }));
   };

   const updateCity = (id: number) => {
      const Name = name.current ? name.current.value : "";
      const MapValue = map.current ? map.current.value : "";
      const Desc = desc.current ? desc.current.getEditorValue() : "";

      const formData = new FormData();
      formData.append("name", Name);
      formData.append("country_id", country.id);
      formData.append("map", MapValue);
      formData.append("image", image);
      formData.append("desc", Desc);
      formData.append("status", status);
      dispatch(update_city({ id, formData, router }));
   };

   const onDeleteHandle = (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => {
      dispatch(delete_city({ id, page, perPage, search }));
   };
   return {
      page,
      perPage,
      search,
      setPerPage,
      setPage,
      setSearch,
      name,
      map,
      country,
      setCountry,
      image,
      setImage,
      desc,
      status,
      setStatus,
      createCity,
      updateCity,
      onDeleteHandle,
   };
}
