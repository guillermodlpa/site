import { MutableRefObject, useEffect } from "react";
import useInViewport from "./useInViewport";

export default function useParallax(
  stableRef: MutableRefObject<HTMLElement>,
  transformedRef: MutableRefObject<HTMLElement>,
  factor = 10
) {
  const inViewport = useInViewport(stableRef);

  useEffect(() => {
    if (!inViewport) {
      return;
    }
    function handle() {
      if (!stableRef.current || !transformedRef.current) {
        return;
      }

      const viewportSize = window.innerHeight;
      const { top, height } = stableRef.current.getBoundingClientRect();
      const offset = top + height / 2 - viewportSize / 2;

      transformedRef.current.style.transform = `translateY(${Math.round(
        -offset / factor
      )}px)`;
    }
    window.addEventListener("scroll", handle);
    return function cleanUp() {
      window.removeEventListener("scroll", handle);
    };
  }, [inViewport, stableRef, transformedRef, factor]);
}
