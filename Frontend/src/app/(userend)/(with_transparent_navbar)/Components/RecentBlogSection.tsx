"use client";
import React, { useEffect } from "react";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { getRecentBlogs } from "../features/HomeAction";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const Img = dynamic(() => import("@/components/Image"), { ssr: false });

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   images: any;
};

export default function RecentBlogSection() {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getRecentBlogs());
   }, [dispatch]);

   const { recentBlogs } = useSelector(
      (state: RootState) => state.userend.home
   );

   const blogs: Blog[] = recentBlogs;
   return (
      <div className="recent-blogs-section container pt-20">
         <div className="flex justify-between items-center pb-10">
            <div
               className="text-left font-['Raleway-ExtraBold',_sans-serif] text-3xl font-extrabold"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Recent Blogs
            </div>

            <NavLink href="/blogs" className="xs:block hidden">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>

         <div className="3xs:grid grid-cols-11 gap-x-10 gap-y-5">
            <div className="3md:col-span-6 col-span-11 3xs:mb-0 mb-7">
               {blogs.length > 0 &&
                  blogs.map((blog: Blog, index: number) => {
                     let imageUrl = "";
                     if (blog?.images.length > 0) {
                        const storePath = blog.images.map(
                           (item: any) => item.image
                        );
                        const image = storePath.toString();
                        const forwardSlash = "/";
                        const storeImageUrl = forwardSlash.concat(image);
                        imageUrl = localUrl.concat(storeImageUrl);
                     }
                     if (index === 0) {
                        return (
                           <div key={index} className="relative">
                              {blog?.images.length > 0 ? (
                                 <Img
                                    src={imageUrl}
                                    alt="..."
                                    width={600}
                                    height={561}
                                    className=" xs:rounded-[30px] rounded-[21px] 3md:h-auto sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px] w-full"
                                 />
                              ) : (
                                 <Img
                                    src="assets/images/demo.png"
                                    alt="..."
                                    width={600}
                                    height={561}
                                    className=" xs:rounded-[30px] rounded-[21px] 3md:h-auto sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px] w-full"
                                 />
                              )}
                              <div
                                 className="bg-[rgba(47,47,47,0.50)] xs:rounded-[30px] rounded-[21px] w-full h-full absolute top-0 left-0 xl:p-10 6md:p-7 md:p-5 2sm:p-10 xs:p-7 p-5 flex items-end"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 <div>
                                    <div className="text-[#ffffff] text-left font-['Raleway-ExtraBold',_sans-serif] 6md:text-[32px] md:text-[27px] 6xs:text-[32px] xs:text-[27px] text-[23px] font-extrabold">
                                       {blog?.title}
                                    </div>
                                    <div className="text-[#e7e7e7] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal xs3:mt-1 mt-0">
                                       {blog?.sub_title}
                                    </div>
                                    <NavLink href={`/blog/${blog?.slug}`}>
                                       <div
                                          className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-md w-[93px] h-8 flex justify-center items-center lg:mt-10 6md:mt-7 md:mt-5 2sm:mt-10 6xs:mt-7 xs3:mt-5 mt-3"
                                          style={{
                                             background:
                                                "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(84, 118, 180, 1) 100%)",
                                          }}
                                       >
                                          Read More
                                       </div>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  })}
            </div>
            <div className=" 3md:col-span-5 col-span-11 h-full 3md:space-y-3 space-y-7">
               <div className="3md:h-[244px] h-auto w-full">
                  {blogs.length > 0 &&
                     blogs.map((blog: Blog, index: number) => {
                        let imageUrl = "";
                        if (blog?.images.length > 0) {
                           const storePath = blog.images.map(
                              (item: any) => item.image
                           );
                           const image = storePath.toString();
                           const forwardSlash = "/";
                           const storeImageUrl = forwardSlash.concat(image);
                           imageUrl = localUrl.concat(storeImageUrl);
                        }
                        if (index === 1) {
                           return (
                              <div
                                 key={index}
                                 className="h-full row-span-11 w-full relative"
                              >
                                 {blog?.images.length > 0 ? (
                                    <Img
                                       src={imageUrl}
                                       alt="..."
                                       width={600}
                                       height={600}
                                       className="xs:rounded-[30px] rounded-[21px] 3md:h-full sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px] w-full"
                                    />
                                 ) : (
                                    <Img
                                       src="/assets/images/demo.png"
                                       alt="..."
                                       width={600}
                                       height={600}
                                       className="xs:rounded-[30px] rounded-[21px] 3md:h-full sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px] w-full"
                                    />
                                 )}
                                 <div
                                    className="bg-[rgba(47,47,47,0.50)] rounded-[30px] w-full h-full absolute top-0 left-0 3xl:p-10 lg:p-7 5md:p-5 md:p-4 2sm:p-10 xs:p-7 p-5 flex items-end"
                                    style={{
                                       boxShadow:
                                          "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                    }}
                                 >
                                    <div>
                                       <div className="text-[#ffffff] text-left font-['Raleway-ExtraBold',_sans-serif] 3xl:text-[32px] lg:text-[27px] 6xs:text-[23px] xs:text-[27px] text-[23px] font-extrabold">
                                          {blog?.title}
                                       </div>
                                       <div className="text-[#e7e7e7] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-1">
                                          {blog?.sub_title}
                                       </div>
                                       <NavLink href={`/blog/${blog?.slug}`}>
                                          <div
                                             className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-md w-[93px] h-8 flex justify-center items-center 3xl:mt-10 lg:mt-5  3md:mt-3 md:mt-1 2sm:mt-10 6xs:mt-7 xs3:mt-5 mt-3"
                                             style={{
                                                background:
                                                   "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(84, 118, 180, 1) 100%)",
                                             }}
                                          >
                                             Read More
                                          </div>
                                       </NavLink>
                                    </div>
                                 </div>
                              </div>
                           );
                        }
                     })}
               </div>
               <div className="3md:h-[187px] h-auto w-full">
                  {blogs.length > 0 &&
                     blogs.map((blog: Blog, index: number) => {
                        let imageUrl = "";
                        if (blog?.images.length > 0) {
                           const storePath = blog.images.map(
                              (item: any) => item.image
                           );
                           const image = storePath.toString();
                           const forwardSlash = "/";
                           const storeImageUrl = forwardSlash.concat(image);
                           imageUrl = localUrl.concat(storeImageUrl);
                        }
                        if (index === 2) {
                           return (
                              <div
                                 key={index}
                                 className="3md:h-full w-full relative"
                              >
                                 {blog?.images.length > 0 ? (
                                    <Img
                                       src={imageUrl}
                                       alt="..."
                                       width={500}
                                       height={500}
                                       className="xs:rounded-[30px] rounded-[21px] w-full 3md:h-full sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px]"
                                    />
                                 ) : (
                                    <Img
                                       src="/assets/images/demo.png"
                                       alt="..."
                                       width={500}
                                       height={500}
                                       className="xs:rounded-[30px] rounded-[21px] w-full 3md:h-full sm:h-[445px] 6xs:h-[395px] 3xs:h-[345px] xs:h-[295px] xs3:h-[245px] h-[205px]"
                                    />
                                 )}
                                 <div
                                    className="bg-[rgba(47,47,47,0.50)] rounded-[30px] h-full w-full absolute top-0 left-0  flex flex-col justify-end"
                                    style={{
                                       boxShadow:
                                          "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                    }}
                                 >
                                    <div className="3xl:px-10 lg:!px-7 5md:px-5 md:px-4 2sm:px-10 xs:px-7 px-5 md:!pb-5 2sm:p-10 xs:p-7 p-5">
                                       <div className="text-[#ffffff] text-left font-['Raleway-ExtraBold',_sans-serif] 3xl:text-[32px] lg:text-[27px] 5md::text-[17px]  6xs:text-[17px] xs:text-[27px] text-[23px] font-extrabold">
                                          {blog?.title}
                                       </div>
                                       <div className="text-[#e7e7e7] text-left font-['Arial-Regular',_sans-serif] 5ms:text-xs text-[10px] font-normal 5md:mt-1 ">
                                          {blog?.sub_title}
                                       </div>

                                       <NavLink href={`/blog/${blog?.slug}`}>
                                          <div
                                             className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-md w-[93px] h-8 flex justify-center items-center lg:mt-5  3md:mt-3 md:mt-1 2sm:mt-10 6xs:mt-7 xs3:mt-5 mt-3"
                                             style={{
                                                background:
                                                   "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                                             }}
                                          >
                                             Read More
                                          </div>
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

         <div className="xs:hidden flex justify-center pt-5">
            <NavLink href="/blogs">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-end">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6 ps-3">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>
      </div>
   );
}
