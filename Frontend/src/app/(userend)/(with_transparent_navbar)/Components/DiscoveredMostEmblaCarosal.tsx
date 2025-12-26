"use client";
import React, { useState, useEffect, useCallback, Fragment } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DiscoveredMostThumbs } from "./DiscoveredMostEmblaCarosalThumbsButton";
import "../embla.css";
import { DotButton, useDotButton } from "./DiscoveredMostEmblaCarosalDots";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const Img = dynamic(() => import("@/components/Image"));

type Product = {
   id: string;
   name: string;
   slug: string;
   image: string;
};

type PropType = {
   slides: Product[];
   options?: EmblaOptionsType;
};

const DiscoveredMostEmblaCarosal: React.FC<PropType> = (props) => {
   const localUrl = LocalUrl();
   const { slides, options } = props;
   const [selectedIndex, setSelectedIndex] = useState<number>(0);
   const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options || {}) as [
      React.RefObject<HTMLDivElement>,
      EmblaCarouselType | null,
   ];
   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: "keepSnaps",
      dragFree: true,
   }) as [React.RefObject<HTMLDivElement>, EmblaCarouselType | null];
   const { scrollSnaps, onDotButtonClick } = useDotButton(
      emblaMainApi,
      selectedIndex,
      setSelectedIndex
   );

   const onThumbClick = useCallback(
      (index: number) => {
         if (!emblaMainApi || !emblaThumbsApi) return;
         emblaMainApi.scrollTo(index);

         // Set a short timeout to allow Embla to complete scrolling before updating selected index
         setTimeout(() => setSelectedIndex(index), 50);
      },
      [emblaMainApi, emblaThumbsApi]
   );

   const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return;

      // Immediately get the selected scroll snap index and update selectedIndex
      const snapIndex = emblaMainApi.selectedScrollSnap();
      setSelectedIndex(snapIndex);

      // Ensure the thumbnail carousel follows the main carousel's index
      emblaThumbsApi.scrollTo(snapIndex);
   }, [emblaMainApi, emblaThumbsApi]);

   useEffect(() => {
      if (!emblaMainApi) return;

      // Set the selected index on first render and add listeners for future updates
      onSelect();
      emblaMainApi.on("select", onSelect).on("reInit", onSelect);
   }, [emblaMainApi, onSelect]);

   return (
      <div className=" discovered_most_embla_carosal">
         <div className="embla">
            <div className="embla__viewport" ref={emblaMainRef}>
               <div className="embla__container">
                  {slides.map((product: Product, index: number) => {
                     const imagePath = localUrl + product?.image;
                     return (
                        <div className="embla__slide" key={index}>
                           <div className="embla__slide__number">
                              <div className="w-full relative">
                                 <Img
                                    src={imagePath.toString()}
                                    alt="..."
                                    width={500}
                                    height={356}
                                    className="4md:h-[316px] md:h-[265px] 2sm:h-[245px] sm:h-[235px] h-auto w-full"
                                 />
                                 <NavLink
                                    href={`/product-sale/${product.slug}`}
                                 >
                                    <span
                                       className=" capitalize bg-[#99b0ef] text-white text-xs flex justify-center items-center rounded-[13px] w-[92px] h-8 absolute top-3 left-3"
                                       style={{
                                          boxShadow:
                                             "-2px -2px 10px 0px rgba(153, 176, 239, 0.5),2px 2px 10px 0px rgba(153, 176, 239, 0.5)",
                                       }}
                                    >
                                       see more
                                    </span>
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className="embla-thumbs">
               <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                  <div className="embla-thumbs__container">
                     {slides.map((product: Product, index: number) => (
                        <Fragment key={index}>
                           <DiscoveredMostThumbs
                              selected={index === selectedIndex}
                              index={index}
                              onClick={() => onThumbClick(index)}
                              product={product}
                           />
                        </Fragment>
                     ))}
                  </div>
               </div>
            </div>

            <div className="embla__controls">
               <div className="embla__dots">
                  {slides.map((_, index) => (
                     <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={"embla__dot".concat(
                           index === selectedIndex
                              ? " embla__dot--selected"
                              : ""
                        )}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default DiscoveredMostEmblaCarosal;
