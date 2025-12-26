import Button from "@/components/Button";
import Img from "@/components/Image";
import React, { useEffect, useState } from "react";
import { CrosSvgIcon } from "@/saller/components/SvgIcons";

type Props = {
   file: any;
   index: number;
   onHandleRemoveImage: (index: number) => void;
};

export default function ChatBodyEffectImagePreview({
   file,
   index,
   onHandleRemoveImage,
}: Props) {
   const [imageUrl, setImageUrl] = useState<string | null>(null);

   useEffect(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
         setImageUrl(String(reader.result));
      };
      reader.readAsDataURL(file);
   }, [file]);
   return (
      <div className=" relative">
         {imageUrl ? (
            <Img
               src={imageUrl}
               alt="product image"
               width={150}
               height={150}
               className="rounded-2xl w-full h-full"
            />
         ) : null}
         <Button
            type="button"
            className="bg-red-500 hover:bg-red-700 hover:text-white/90 rounded-xl p-1 absolute right-1 top-1"
            onClick={() => onHandleRemoveImage(index)}
         >
            <div className="w-3.5 h-3.5">
               <CrosSvgIcon />
            </div>
         </Button>
      </div>
   );
}
