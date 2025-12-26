"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"; // Import EmblaCarouselType
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./ProductImagesSliderButton";
import "./slider.css";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

type PropType = {
   slides: any;
   options?: EmblaOptionsType;
};

const ProductImagesSlider: React.FC<PropType> = (props) => {
   const { slides, options } = props;
   const [selectedIndex, setSelectedIndex] = useState(0);

   // Use the correct type for emblaMainApi and emblaThumbsApi
   const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options || {}) as [
      React.RefObject<HTMLDivElement>,
      EmblaCarouselType | null,
   ];
   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: "keepSnaps",
      dragFree: true,
   }) as [React.RefObject<HTMLDivElement>, EmblaCarouselType | null];

   // Function to handle thumbnail clicks
   const onThumbClick = useCallback(
      (index: number) => {
         // Ensure emblaMainApi is initialized before calling scrollTo
         emblaMainApi?.scrollTo(index);
      },
      [emblaMainApi]
   );

   const onSelect = useCallback(() => {
      if (emblaMainApi && emblaThumbsApi) {
         const selectedSnap = emblaMainApi.selectedScrollSnap();
         setSelectedIndex(selectedSnap);

         // Check if scrollTo exists before calling it
         emblaThumbsApi.scrollTo(selectedSnap);
      }
   }, [emblaMainApi, emblaThumbsApi]);

   useEffect(() => {
      if (!emblaMainApi) return;
      onSelect();

      // Attach event handlers for select and reInit events
      emblaMainApi.on("select", onSelect).on("reInit", onSelect);
   }, [emblaMainApi, onSelect]);

   return (
      <div className="flex 5lg:flex-row flex-col gap-5">
         <div className="5lg:w-[85%] 5lg:order-last">
            <div className="embla">
               <div className="embla__viewport" ref={emblaMainRef}>
                  <div className="embla__container">
                     {slides &&
                        slides.length > 0 &&
                        slides.map((slider: any, index: number) => {
                           return (
                              <div className="embla__slide" key={index}>
                                 <div className="embla__slide__number">
                                    <Img
                                       src={slider?.image_url}
                                       alt={slider?.alt || ""}
                                       width={500}
                                       height={500}
                                       className="w-full rounded-[30px] xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[450px] 3xs:h-[400px] xs4:h-[300px] h-[250px]"
                                    />
                                 </div>
                              </div>
                           );
                        })}
                  </div>
               </div>
            </div>
         </div>
         <div className="5lg:w-[15%] side-slider">
            <div className="embla">
               <div className="embla-thumbs">
                  <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                     <div className="embla-thumbs__container">
                        {slides.map((slider: any, index: number) => (
                           <Thumb
                              key={index}
                              onClick={() => onThumbClick(index)}
                              selected={index === selectedIndex}
                              index={index}
                              slider={slider}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductImagesSlider;
