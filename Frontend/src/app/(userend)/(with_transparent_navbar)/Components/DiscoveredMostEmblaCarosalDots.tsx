import React, {
   ComponentPropsWithRef,
   useCallback,
   useEffect,
   useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
   selectedIndex: number;
   scrollSnaps: number[];
   onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
   embla: EmblaCarouselType | null,
   selectedIndex: number,
   setSelectedIndex: any
) => {
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
   // const [selectedIndex, setSelectedIndex] = useState(0);

   const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
   }, [embla]);

   const onDotButtonClick = useCallback(
      (index: number) => {
         if (!embla) return;
         embla.scrollTo(index);
      },
      [embla]
   );

   useEffect(() => {
      if (!embla) return;
      setScrollSnaps(embla.scrollSnapList()); // Initialize scroll snaps
      embla.on("select", onSelect);
   }, [embla, onSelect]);

   return { scrollSnaps, selectedIndex, onDotButtonClick };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
   const { children, ...restProps } = props;

   return (
      <button type="button" {...restProps}>
         {children}
      </button>
   );
};
