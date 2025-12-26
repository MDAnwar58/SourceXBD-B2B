"use client";
import { AppDispatch, RootState } from "@/app/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThreeBlogs } from "@/userend/with_transparent_navbar/blogs/features/BlogAction";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Image = {
   image: string;
};

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   desc: any;
   images: Image[];
   type: string;
};

export default function BlogTabContent() {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getThreeBlogs());
   }, [dispatch]);

   const { three_blogs } = useSelector(
      (state: RootState) => state.userend.blog
   );
   const threeBlogs = three_blogs as Blog[];

   return (
      <div className=" grid grid-cols-9 gap-7 pb-10">
         <div className=" 3md:col-span-5 col-span-9">
            {threeBlogs.length > 0 &&
               threeBlogs.map((blog: Blog, index: number) => {
                  if (index === 0) {
                     return (
                        <div
                           key={index}
                           className=" relative rounded-[30px] shadow-2xl"
                        >
                           <Img
                              src={
                                 localUrl +
                                 "/" +
                                 blog.images
                                    .map((item: Image) => item.image)
                                    .join(",")
                              }
                              alt={blog?.title}
                              width={700}
                              height={700}
                              className=" h-auto w-full rounded-[30px]"
                           />
                           <div className="bg-[rgba(47,47,47,0.50)] rounded-[30px] h-full w-full absolute top-0 left-0 flex items-end">
                              <div className="3xs:px-10 px-6 3xs:py-9 py-5">
                                 <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] xs:text-[32px] text-[22px] font-bold pb-[0.15rem]">
                                    {blog?.title}
                                 </div>
                                 <div className="text-[#ffffff] font-['Arial-Regular',_sans-serif] xs:text-xs text-[11px] font-normal 3xs:pb-6 pb-3">
                                    {blog?.sub_title}
                                 </div>
                                 <NavLink href={`/blog/${blog?.slug}`}>
                                    <span
                                       className="rounded-md px-5 py-2 text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xs font-bold"
                                       style={{
                                          background:
                                             "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(79, 120, 192, 1) 100%)",
                                       }}
                                    >
                                       Read More
                                    </span>
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                     );
                  }
               })}
         </div>
         <div className=" 3md:col-span-4 col-span-9 h-full">
            <div className=" h-full space-y-7">
               {threeBlogs.length > 0 &&
                  threeBlogs.map((blog: Blog, index: number) => {
                     if (index === 1) {
                        return (
                           <div
                              key={index}
                              className="1xl2:h-[259px] xl:h-[249px] 6lg:h-[223px] 3md:h-[213px] h-auto relative rounded-[30px] shadow-2xl"
                           >
                              <Img
                                 src={
                                    localUrl +
                                    "/" +
                                    blog.images
                                       .map((item: Image) => item.image)
                                       .join(",")
                                 }
                                 alt={blog?.title}
                                 width={700}
                                 height={700}
                                 className=" 3md:h-full h-auto w-full rounded-[30px]"
                              />
                              <div className="bg-[rgba(47,47,47,0.50)] rounded-[30px] h-full w-full absolute top-0 left-0 flex items-end">
                                 <div className="3md:px-7 3xs:px-10 px-6 3md:py-7 3xs:py-9 py-5">
                                    <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] 5lg:text-[32px] 3md:text-[22px] 3xs:text-[32px] text-[22px] font-bold pb-[0.15rem]">
                                       {blog?.title}
                                    </div>
                                    <div className="text-[#ffffff] font-['Arial-Regular',_sans-serif] 3xs:text-xs text-[11px] font-normal 3md:pb-4 3xs:pb-6 pb-3">
                                       {blog?.sub_title}
                                    </div>
                                    <NavLink href={`/blog/${blog?.slug}`}>
                                       <span
                                          className="rounded-md px-5 py-2 text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xs font-bold"
                                          style={{
                                             background:
                                                "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(79, 120, 192, 1) 100%)",
                                          }}
                                       >
                                          Read More
                                       </span>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  })}
               {threeBlogs.length > 0 &&
                  threeBlogs.map((blog: Blog, index: number) => {
                     if (index === 0) {
                        return (
                           <div
                              key={index}
                              className=" xl:h-[187px] 3md:h-[177px] h-auto relative rounded-[30px] shadow-2xl"
                           >
                              <Img
                                 src={
                                    localUrl +
                                    "/" +
                                    blog?.images
                                       .map((item: Image) => item.image)
                                       .join(",")
                                 }
                                 alt={blog?.title}
                                 width={700}
                                 height={700}
                                 className=" 3md:h-full h-auto w-full rounded-[30px]"
                              />
                              <div className="bg-[rgba(47,47,47,0.50)] rounded-[30px] h-full w-full absolute top-0 left-0 flex items-end">
                                 <div className="3md:px-7 3xs:px-10 px-6 3md:py-7 3xs:py-9 py-5">
                                    <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] 5lg:text-[32px] 3md:text-[22px] 3xs:text-[32px] text-[22px] font-bold pb-[0.15rem]">
                                       {blog?.title}
                                    </div>
                                    <div className="text-[#ffffff] font-['Arial-Regular',_sans-serif] 3xs:text-xs text-[11px] font-normal lg:pb-4 3md:pb-2 3xs:pb-6 pb-3">
                                       {blog?.sub_title}
                                    </div>
                                    <NavLink href={`/blog/${blog?.slug}`}>
                                       <span
                                          className="rounded-md px-5 py-2 text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xs font-bold"
                                          style={{
                                             background:
                                                "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(79, 120, 192, 1) 100%)",
                                          }}
                                       >
                                          Read More
                                       </span>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  })}
            </div>
         </div>
      </div>
   );
}
