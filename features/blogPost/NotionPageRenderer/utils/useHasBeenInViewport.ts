import { type MutableRefObject, useEffect, useState } from "react";

export default function useHasBeenInViewport(ref: MutableRefObject<HTMLElement>) {
  const [inViewport, setInViewport] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const callback: IntersectionObserverCallback = (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInViewport(true);
        }
      }
    };
    const observer = new IntersectionObserver(callback, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0,
    });
    observer.observe(ref.current);

    return function cleanUp() {
      observer.disconnect();
    };
  }, [ref]);
  return inViewport;
}
