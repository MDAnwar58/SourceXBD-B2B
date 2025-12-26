import React, { useCallback, useRef, useState } from "react";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import {
   documents_update,
   get_category_types,
   get_cities,
   get_countries,
   update_company_profile,
} from "@/saller/companies/features/CompanyAction";
import { TextEditorHandle } from "@/saller/components/TextEditor";
import { useRouter } from "next/navigation";

type IdCard = {
   url: string;
   title: string;
};

export default function CompanyContext() {
   const industry = useRef<HTMLInputElement>(null);
   const desc = useRef<TextEditorHandle | null>(null);
   const logo = useRef<HTMLInputElement>(null);
   const [status, setStatus] = useState<string>("active");
   const c_name = useRef<HTMLInputElement>(null);
   const name = useRef<HTMLInputElement>(null);
   const type = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const contact = useRef<HTMLInputElement>(null);
   const [country, setCountry] = useState<null>(null);
   const [city, setCity] = useState<null>(null);
   const address = useRef<HTMLInputElement>(null);
   const [categoryTypeId, setCategoryTypeId] = useState<string>("");
   const formRef = useRef<HTMLFormElement>(null);
   const router = useRouter();
   // document update
   const [companyId, setCompanyId] = useState<number | null>(null);
   const [idCardBackImage, setIdCardBackImage] = useState<IdCard>({
      url: "",
      title: "",
   });
   const [idCardFrontImage, setIdCardFrontImage] = useState<IdCard>({
      url: "",
      title: "",
   });
   const [selectedCategoryTypeIds, setSelectedCategoryTypeIds] = useState<
      any[]
   >([]);
   const dispatch = useDispatch<AppDispatch>();

   const getCategoryTypes = useCallback((): void => {
      dispatch(get_category_types());
   }, [dispatch]);
   const getCountries = useCallback((): void => {
      dispatch(get_countries());
   }, [dispatch]);
   const getCities = useCallback((): void => {
      dispatch(get_cities());
   }, [dispatch]);

   function onHandleCategoryTypeSelect(id: number) {
      setSelectedCategoryTypeIds((prevCategoryTypeIds) => {
         if (prevCategoryTypeIds.includes(id)) {
            return prevCategoryTypeIds.filter((item) => item !== id);
         } else {
            return [...prevCategoryTypeIds, id];
         }
      });
   }

   const updateCompanyProfile = (): void => {
      const CountryCheck = country as any;
      const CityCheck = city as any;
      const Indestry = industry?.current ? industry?.current?.value : "";
      const Desc = desc?.current ? desc?.current?.getEditorValue() : "";
      const Logo = logo?.current?.files?.[0] || "";
      const Status = status ? status : "";
      const CName = c_name?.current ? c_name?.current?.value : "";
      const Type = categoryTypeId;
      const Email = email?.current ? email?.current?.value : "";
      const Contact = contact?.current ? contact?.current?.value : "";
      const CountryId =
         CountryCheck?.id !== undefined ? String(CountryCheck?.id) : "";
      const City = CityCheck?.id !== undefined ? CityCheck?.id : "";
      const Address = address?.current ? address?.current?.value : "";
      // const CategoryId = categoryId;
      const formData = new FormData();
      formData.append("industry", Indestry);
      formData.append("desc", Desc);
      formData.append("logo", Logo);
      formData.append("status", Status);
      formData.append("c_name", CName);
      formData.append("type", Type);
      if (selectedCategoryTypeIds?.length > 0) {
         formData.append("typeIds", JSON.stringify(selectedCategoryTypeIds));
      }
      formData.append("email", Email);
      formData.append("contact", Contact);
      formData.append("country_id", CountryId);
      formData.append("city_id", City);
      formData.append("address", Address);
      dispatch(update_company_profile({ formData, router }));
   };

   const onhandleIdCardFrontImageChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const file = event.target.files?.[0] as File;

      if (file) {
         const imageURL = URL.createObjectURL(file);
         setIdCardFrontImage({
            url: imageURL,
            title: "Id Card Front Side",
         });
         const formData = new FormData();
         formData.append("images", file);
         formData.append("title", "Id Card Front Side");
         dispatch(documents_update({ formData }));
      }
   };
   const onhandleIdCardBackImageChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const file = event.target.files?.[0] as File;

      if (file) {
         const imageURL = URL.createObjectURL(file);
         setIdCardBackImage({
            url: imageURL,
            title: "Id Card Back Side",
         });
         const formData = new FormData();
         formData.append("images", file);
         formData.append("title", "Id Card Back Side");
         dispatch(documents_update({ formData }));
      }
   };

   const documentUpdate = () => {
      const formData = new FormData();
      console.log(idCardFrontImage.title);
      formData.append("title", idCardFrontImage.title);
      formData.append("images", idCardFrontImage.url);
      dispatch(documents_update({ formData }));
   };

   return {
      getCategoryTypes,
      getCountries,
      getCities,
      industry,
      desc,
      logo,
      status,
      setStatus,
      c_name,
      name,
      type,
      email,
      contact,
      country,
      setCountry,
      city,
      setCity,
      address,
      categoryTypeId,
      setCategoryTypeId,
      formRef,
      updateCompanyProfile,
      idCardBackImage,
      setIdCardBackImage,
      idCardFrontImage,
      setIdCardFrontImage,
      documentUpdate,
      onhandleIdCardFrontImageChange,
      onhandleIdCardBackImageChange,
      companyId,
      setCompanyId,
      selectedCategoryTypeIds,
      setSelectedCategoryTypeIds,
      onHandleCategoryTypeSelect,
   };
}
