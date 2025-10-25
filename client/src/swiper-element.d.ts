// swiper-element.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    "swiper-container": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        init?: string | boolean;
        ref?: React.Ref<any>;
        // Allows for all custom Swiper attributes like slides-per-view, space-between, etc.
        [key: string]: any;
      },
      HTMLElement
    >;
    "swiper-slide": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        [key: string]: any;
      },
      HTMLElement
    >;
  }
}
