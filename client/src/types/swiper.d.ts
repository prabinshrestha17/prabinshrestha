import type { SwiperContainer } from "swiper/element";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<SwiperContainer> & {
          init?: "true" | "false";
        },
        SwiperContainer
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
