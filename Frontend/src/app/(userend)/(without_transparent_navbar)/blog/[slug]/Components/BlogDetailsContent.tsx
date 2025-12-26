import Img from "@/components/Image";
import React, { Fragment } from "react";

type Props = {
   blog: any;
};

export default function BlogDetailsContent({ blog }: Props) {
   return (
      <Fragment>
         <div className="text-left pt-10 pb-7 text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-2xl font-normal">
            {blog?.desc}
         </div>
         {/* <div className="text-left pt-10 pb-7 text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-2xl font-normal">
            <span className=" text-blue-500 text-4xl font-bold">L</span>
            orem ipsum dolor sit amet consectetur. Scelerisque ipsum at odio
            lacus nulla ullamcorper gravida at lorem. Tempus mauris massa semper
            vitae. Nulla a porta turpis cursus. Vestibulum fermentum eget risus
            id quis. Non sit massa massa cras dolor varius maecenas. Ultrices
            dictum lectus nullam tempus. Cursus magna sodales sit libero.
            Adipiscing convallis lorem malesuada et duis. Pretium tempus nisl
            pharetra amet ultrices aenean in.
         </div>
         <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-10">
            Vestibulum fermentum eget risus id quis. Non sit massa massa cras
            dolor varius maecenas. Ultrices dictum lectus nullam tempus. Cursus
            magna sodales sit libero. Adipiscing convallis lorem malesuada et
            duis. Pretium tempus nisl pharetra amet ultrices aenean in.
         </div>

         <div className="blog-images grid md:grid-cols-2 grid-cols-1 gap-7">
            <Img
               src="/assets/images/blog-details1.png"
               alt="blog details image 1"
               width={400}
               height={400}
               className="w-full h-auto"
            />
            <Img
               src="/assets/images/blog-details2.png"
               alt="blog details image 1"
               width={400}
               height={400}
               className="w-full h-auto"
            />
         </div>

         <div className="text-left pt-7 pb-14 text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-2xl font-normal">
            <span className=" text-green-400 text-4xl font-bold">V</span>
            estibulum fermentum eget risus id quis. Non sit massa massa cras
            dolor varius maecenas. Ultrices dictum lectus nullam tempus. Cursus
            magna sodales sit libero. Adipiscing convallis lorem malesuada et
            duis. Pretium tempus nisl pharetra amet ultrices aenean in.
         </div> */}
      </Fragment>
   );
}
