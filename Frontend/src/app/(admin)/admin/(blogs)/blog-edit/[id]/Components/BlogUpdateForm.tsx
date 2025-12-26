"use client";
import React, { Fragment, useEffect, useRef } from "react";
import {
   PlusSvgIcon,
   ArrowUpSvgIcon,
   BuyerComplaintsSvgIcon,
} from "@admin/components/SvgIcons";
import BlogContext from "@/admin/blogs/featrues/BlogContext";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getBlog } from "@/admin/blogs/featrues/BlogAction";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@admin/components/grid"));
const AdminCard = dynamic(() => import("@admin/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const TextEditor = dynamic(() => import("@admin/components/TextEditor"));
const SelectArea = dynamic(() => import("@admin/components/select"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const ImageInput = dynamic(() => import("@admin/components/ImageInput"));
const TagsInputWrapper = dynamic(() => import("@admin/components/TagsInput"));
const Button = dynamic(() => import("@/components/Button"));

type Blog = {
   title: string;
   sub_title: string;
   type: string;
   desc: string;
   tags: string[];
   status: string;
   images: string;
};

const options = [
   {
      name: "Active",
      bgColor: "bg-[#90ff38]",
      value: 1,
   },
   {
      name: "Unactive",
      bgColor: "bg-red-300",
      value: 2,
   },
];

const icon = (
   <div className="w-6 h-6">
      <BuyerComplaintsSvgIcon />
   </div>
);

type Props = {
   params: {
      id: string;
   };
};

export default function BlogUpdateform({ params }: Props) {
   const { id } = params;
   const {
      title,
      sub_title,
      type,
      desc,
      setTags,
      tags,
      setStatus,
      status,
      setImage,
      image,
      updateBlog,
   } = BlogContext();
   const imageRef = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getBlog({ id, setImage, setStatus, setTags }));
   }, [dispatch]);

   const { blog, error, loading } = useSelector(
      (state: AdminState) => state.admin.blog
   );
   const errors = error as Blog;
   const Blog = blog as Blog;
   // console.log(Blog);
   return (
      <Fragment>
         <PageHeader icon={icon} title="Blog Edit" searchBox={false} />

         <Grid cols={12} gap={7}>
            <div className="1xl2:col-span-8 xl:col-span-7 col-span-12 3xs:mb-0 mb-7">
               <AdminCard>
                  <div className="pb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                        Title
                     </div>
                     <Input
                        type="text"
                        inputRef={title}
                        className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[30px] w-full shadow-admin-card border-none focus:ring-0 px-5"
                        placeholder="Title"
                        defaultValue={Blog?.title}
                     />
                     {errors?.title && (
                        <small className="text-red-500 text-[10px] font-semibold">
                           {errors.title}
                        </small>
                     )}
                  </div>
                  <div className="pb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                        Sub Title
                     </div>
                     <Input
                        type="text"
                        inputRef={sub_title}
                        className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[30px] w-full shadow-admin-card border-none focus:ring-0 px-5"
                        placeholder="Sub Title"
                        defaultValue={Blog?.sub_title}
                     />
                     {errors?.sub_title && (
                        <small className="text-red-500 text-[10px] font-semibold">
                           {errors.sub_title}
                        </small>
                     )}
                  </div>
                  <div className="pb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                        Type
                     </div>
                     <Input
                        type="text"
                        inputRef={type}
                        className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[30px] w-full shadow-admin-card border-none focus:ring-0 px-5"
                        placeholder="Type"
                        defaultValue={Blog?.type}
                     />
                     {errors?.type && (
                        <small className="text-red-500 text-[10px] font-semibold">
                           {errors.type}
                        </small>
                     )}
                  </div>
                  <div className="pb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                        Description
                     </div>
                     <TextEditor
                        ref={desc}
                        initialValue={Blog?.desc}
                        placeholder=""
                     />

                     {errors?.desc && (
                        <small className="text-red-500 text-[10px] font-semibold">
                           {errors.desc}
                        </small>
                     )}
                  </div>
                  <div className="pb-3">
                     <ImageInput
                        label="Media"
                        imageRef={imageRef}
                        image={image}
                        setImage={setImage}
                     />
                     {errors?.images && (
                        <small className="text-red-500 text-[10px] font-semibold">
                           {errors.images}
                        </small>
                     )}
                  </div>
               </AdminCard>
            </div>
            <div className="1xl2:col-span-4 xl:col-span-5 col-span-12">
               <AdminCard className="mb-7">
                  <SelectArea
                     label="Status"
                     selectedOption={status === "active" ? 1 : 2}
                     options={options}
                     onHandleSelectValue={(value: string) => {
                        if (Number(value) === 1) {
                           setStatus("Active");
                        } else {
                           setStatus("Inactive");
                        }
                     }} // You should pass a function
                  />

                  {errors?.status && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {errors.status}
                     </small>
                  )}
               </AdminCard>
               <AdminCard className="mb-7">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                     Tags
                  </div>
                  <TagsInputWrapper tags={tags} setTags={setTags} />

                  {errors?.tags && (
                     <small className="text-red-500 text-[10px] font-semibold">
                        {errors.tags}
                     </small>
                  )}
               </AdminCard>

               <div className="flex flex-row justify-end pt-5">
                  <Button
                     type="button"
                     className={` ${
                        loading === true
                           ? "bg-[#f0f0f0d9] text-[#c4c4c4] "
                           : "bg-[#f0f0f0] text-[#515151]"
                     } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] px-7 h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
                     onClick={() => updateBlog(String(id))}
                  >
                     Update
                  </Button>
               </div>
               {/* <AdminCard>
                  <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-8 px-3 flex justify-between items-center shadow-admin-card mb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
                        Navigation
                     </div>

                     <div className="w-6 h-6">
                        <ArrowUpSvgIcon />
                     </div>
                  </div>

                  <Grid cols={2} gap={3} className="mb-2">
                     <div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                           Title
                        </div>

                        <Input
                           type="text"
                           className="bg-[#f5f5f5] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border-none focus:ring-0 rounded-lg w-full h-[30px] px-5 shadow-admin-input"
                           placeholder="Type here"
                        />
                     </div>
                     <div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                           Url
                        </div>

                        <Input
                           type="text"
                           className="bg-[#f5f5f5] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border-none focus:ring-0 rounded-lg w-full h-[30px] px-5 shadow-admin-input"
                           placeholder="URL"
                        />
                     </div>
                  </Grid>

                  <Grid cols={2} gap={3} className="mb-2">
                     <div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                           Title
                        </div>

                        <Input
                           type="text"
                           className="bg-[#f5f5f5] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border-none focus:ring-0 rounded-lg w-full h-[30px] px-5 shadow-admin-input"
                           placeholder="Type here"
                        />
                     </div>
                     <div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                           Url
                        </div>

                        <Input
                           type="text"
                           className="bg-[#f5f5f5] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border-none focus:ring-0 rounded-lg w-full h-[30px] px-5 shadow-admin-input"
                           placeholder="URL"
                        />
                     </div>
                  </Grid>

                  <div className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[108px] h-[29px] flex justify-center items-center gap-x-1 mb-3">
                     <div className="w-2.5 h-2.5">
                        <PlusSvgIcon />
                     </div>
                     <span>Add New Link</span>
                  </div>

                  <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-8 px-3 flex justify-between items-center shadow-admin-card mb-3">
                     <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
                        Social Link
                     </div>

                     <div className="w-6 h-6">
                        <ArrowUpSvgIcon />
                     </div>
                  </div>

                  <div className="pt-3 pb-5">
                     <Grid
                        cols={7}
                        gap={5}
                        className="!grid 11xl:!grid-cols-7 8xl:!grid-cols-6 4xl:!grid-cols-5 xl:!grid-cols-4 lg:!grid-cols-7 3md:!grid-cols-5 md:!grid-cols-4 3sm:!grid-cols-7 2sm:!grid-cols-6 4xs:!grid-cols-5 3xs:!grid-cols-4 xs:!grid-cols-3 !grid-cols-2"
                     >
                        <Img
                           src="/assets/images/facebook-img.png"
                           alt="Social Image"
                           width={150}
                           height={150}
                           className="w-full h-auto"
                        />
                        <div className="bg-[#f5f5f5] border-none rounded-md w-full h-auto shadow-admin-add flex items-center justify-center">
                           <div className="w-4 h-4 text-[#515151]">
                              <PlusSvgIcon />
                           </div>
                        </div>
                     </Grid>
                  </div>

                  <div className="bg-[#f5f5f5] rounded-[10px] w-full h-[39px] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium flex justify-center items-center mb-2">
                     Edit Blog page
                  </div>

                  <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-[10px] w-full h-[39px] flex justify-center items-center">
                     Save &amp; Add Blog
                  </div>
               </AdminCard> */}
            </div>
         </Grid>
      </Fragment>
   );
}
