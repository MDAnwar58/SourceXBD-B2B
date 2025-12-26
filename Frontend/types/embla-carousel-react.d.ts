declare module "embla-carousel-react" {
   import { EmblaOptionsType } from "embla-carousel";

   interface UseEmblaCarousel {
      (): [React.RefObject<HTMLDivElement>, EmblaOptionsType];
      (
         options: EmblaOptionsType
      ): [React.RefObject<HTMLDivElement>, EmblaOptionsType];
   }

   const useEmblaCarousel: UseEmblaCarousel;
   export default useEmblaCarousel;
}
