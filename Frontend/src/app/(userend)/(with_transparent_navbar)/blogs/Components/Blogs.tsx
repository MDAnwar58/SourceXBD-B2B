"use client";
import { RootState } from "@/app/store";
import { useWordsShorting } from "@/components/react/react-shorting";
import { LocalUrl } from "@/components/react/localhost";
import BlogContext from "../features/BlogContext";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { SvgProductFavoriteBtnIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
import {
   useDateWithMonthFormatExtra,
   useDffFormat,
} from "@/components/react/date";
const LoadMore = dynamic(() => import("./LoadMore"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   type: string;
   image: any;
   create_at: string;
};

type BlogData = {
   data: Blog[];
   totalBlogLength: number;
};

export default function Blogs() {
   const localUrl = LocalUrl();
   const { getBlogs, limit } = BlogContext();

   useEffect(() => {
      getBlogs(Number(limit));
   }, [limit]);

   const { blog_data } = useSelector((state: RootState) => state.userend.blog);
   const blogData: BlogData[] = blog_data;
   const { data = [], totalBlogLength = 0 } = blogData as any;
   const blogs: Blog[] = data;
   const blogLength = blogs && blogs.length;

   return (
      <Fragment>
         <div className="grid 6lg:grid-cols-2 grid-cols-1 gap-x-9 gap-y-12">
            {blogs &&
               blogs.length > 0 &&
               blogs.map((blog: Blog, index: number) => {
                  const subTitle = useWordsShorting({
                     text: blog.sub_title,
                     maxWords: 7,
                  });
                  let imageUrl = "";
                  if (blog?.image) {
                     const storeImagePath = blog?.image;
                     const forwardSlash = "/";
                     const storeImageUrl = forwardSlash.concat(storeImagePath);
                     imageUrl = localUrl.concat(storeImageUrl);
                  }
                  let date = "";
                  if (blog?.create_at) {
                     date = useDateWithMonthFormatExtra(blog?.create_at);
                  }
                  let daysAgo = "";
                  if (blog?.create_at) {
                     daysAgo = useDffFormat(blog?.create_at);
                  }
                  return (
                     <div
                        key={index}
                        className="bg-[#ffffff] rounded-[20px] w-full p-7 flex sm:flex-row flex-col gap-x-7"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <div className=" relative xl:w-[50%] lg:w-[30%] 2md:w-[40%] md:w-[45%] sm:w-[50%]">
                           {blog?.image ? (
                              <Img
                                 src={imageUrl}
                                 alt="blog 1"
                                 width={600}
                                 height={600}
                                 className="rounded-[10px] w-full sm:h-[281px] 4xs:h-[351px] 3xs:h-[301px] xs:h-[251px] xs3:h-[231px] xs5:h-[211px] h-[201px]"
                              />
                           ) : (
                              <Img
                                 src={imageUrl}
                                 alt="blog 1"
                                 width={600}
                                 height={600}
                                 className="rounded-[10px] w-full sm:h-[281px] 4xs:h-[351px] 3xs:h-[301px] xs:h-[251px] xs3:h-[231px] xs5:h-[211px] h-[201px]"
                              />
                           )}
                           <Button
                              type="button"
                              className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                           >
                              <SvgProductFavoriteBtnIcon
                                 width={24}
                                 height={24}
                                 color="black"
                              />
                           </Button>
                        </div>
                        <div
                           className={`sm:pt-2.5 ${blog?.type ? "pt-5" : ""} xl:w-[50%] lg:w-[70%] 2md:w-[60%] md:w-[65%] sm:w-[50%]`}
                        >
                           {blog?.type && (
                              <span
                                 className="bg-[#92aae8] uppercase rounded py-[0.65rem] px-5 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(146, 170, 232, 1),2px 2px 10px 0px rgba(146, 170, 232, 1)",
                                 }}
                              >
                                 {blog?.type}
                              </span>
                           )}
                           <div
                              className={`text-[#000000] font-['Raleway-Bold',_sans-serif] text-[32px] font-bold ${blog?.type ? "pt-4" : "pt-3"}`}
                           >
                              {blog?.title}
                           </div>
                           <div className="text-[#838383] font-['Arial-Regular',_sans-serif] text-base font-normal pt-1">
                              {subTitle}
                           </div>
                           <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-base font-bold py-4">
                              {date}/12 min Read
                           </div>
                           <NavLink href={`/blog/${blog?.slug}`}>
                              <span
                                 className="rounded-[14px] px-7 py-3 text-[#ffffff] font-['Inter-Bold',_sans-serif] text-xs font-bold"
                                 style={{
                                    background:
                                       "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(77, 121, 198, 1) 100%)",
                                 }}
                              >
                                 Read More
                              </span>
                           </NavLink>
                        </div>
                     </div>
                  );
               })}
            {/* <div
            className="bg-[#ffffff] rounded-[20px] w-full p-7 grid grid-cols-9 gap-x-7 items-center"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="col-span-4 relative">
               <Img
                  src="/assets/images/blog1.png"
                  alt="blog 1"
                  width={600}
                  height={600}
                  className="rounded-[10px] w-full h-full"
               />
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
               >
                  <SvgProductFavoriteBtnIcon
                     width={24}
                     height={24}
                     color="black"
                  />
               </Button>
            </div>
            <div className="col-span-5">
               <span
                  className="bg-[#92aae8] rounded py-[0.65rem] px-5 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(146, 170, 232, 1),2px 2px 10px 0px rgba(146, 170, 232, 1)",
                  }}
               >
                  STANDARD
               </span>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-[32px] font-bold pt-4">
                  Lorem ipsum
               </div>
               <div className="text-[#838383] font-['Arial-Regular',_sans-serif] text-base font-normal pt-1">
                  Lorem ipsum dolor sit amet consectetur. Leo habitant nisi
                  rhoncus massa gravida netus ullamcorper ligula.
               </div>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-base font-bold py-4">
                  jun 29,2024/12 min Read
               </div>
               <span
                  className="rounded-[14px] px-7 py-3 text-[#ffffff] font-['Inter-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(77, 121, 198, 1) 100%)",
                  }}
               >
                  Read More
               </span>
            </div>
         </div>
         <div
            className="bg-[#ffffff] rounded-[20px] w-full p-7 grid grid-cols-9 gap-x-7 items-center"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="col-span-4 relative">
               <Img
                  src="/assets/images/blog1.png"
                  alt="blog 1"
                  width={600}
                  height={600}
                  className="rounded-[10px] w-full h-full"
               />
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
               >
                  <SvgProductFavoriteBtnIcon
                     width={24}
                     height={24}
                     color="black"
                  />
               </Button>
            </div>
            <div className="col-span-5">
               <span
                  className="bg-[#92aae8] rounded py-[0.65rem] px-5 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(146, 170, 232, 1),2px 2px 10px 0px rgba(146, 170, 232, 1)",
                  }}
               >
                  STANDARD
               </span>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-[32px] font-bold pt-4">
                  Lorem ipsum
               </div>
               <div className="text-[#838383] font-['Arial-Regular',_sans-serif] text-base font-normal pt-1">
                  Lorem ipsum dolor sit amet consectetur. Leo habitant nisi
                  rhoncus massa gravida netus ullamcorper ligula.
               </div>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-base font-bold py-4">
                  jun 29,2024/12 min Read
               </div>
               <span
                  className="rounded-[14px] px-7 py-3 text-[#ffffff] font-['Inter-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(77, 121, 198, 1) 100%)",
                  }}
               >
                  Read More
               </span>
            </div>
         </div>
         <div
            className="bg-[#ffffff] rounded-[20px] w-full p-7 grid grid-cols-9 gap-x-7 items-center"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="col-span-4 relative">
               <Img
                  src="/assets/images/blog1.png"
                  alt="blog 1"
                  width={600}
                  height={600}
                  className="rounded-[10px] w-full h-full"
               />
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
               >
                  <SvgProductFavoriteBtnIcon
                     width={24}
                     height={24}
                     color="black"
                  />
               </Button>
            </div>
            <div className="col-span-5">
               <span
                  className="bg-[#92aae8] rounded py-[0.65rem] px-5 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(146, 170, 232, 1),2px 2px 10px 0px rgba(146, 170, 232, 1)",
                  }}
               >
                  STANDARD
               </span>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-[32px] font-bold pt-4">
                  Lorem ipsum
               </div>
               <div className="text-[#838383] font-['Arial-Regular',_sans-serif] text-base font-normal pt-1">
                  Lorem ipsum dolor sit amet consectetur. Leo habitant nisi
                  rhoncus massa gravida netus ullamcorper ligula.
               </div>
               <div className="text-[#000000] font-['Raleway-Bold',_sans-serif] text-base font-bold py-4">
                  jun 29,2024/12 min Read
               </div>
               <span
                  className="rounded-[14px] px-7 py-3 text-[#ffffff] font-['Inter-Bold',_sans-serif] text-xs font-bold"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(77, 121, 198, 1) 100%)",
                  }}
               >
                  Read More
               </span>
            </div>
         </div> */}
         </div>
         {blogLength > 0 && (
            <LoadMore
               blogLength={blogLength}
               totalBlogLength={totalBlogLength}
            />
         )}
      </Fragment>
   );
}
