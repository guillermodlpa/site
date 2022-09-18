import { MutableRefObject, useEffect, useState } from "react";

export default function useInViewport(ref: MutableRefObject<HTMLElement>) {
  const [inViewport, setInViewport] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        setInViewport(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.25,
    });
    observer.observe(ref.current);

    return function cleanUp() {
      observer.disconnect();
    };
  }, [ref]);
  return inViewport;
}
