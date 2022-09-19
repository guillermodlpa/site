import { useEffect, useState } from "react";

export default function useScrollThreshold(threshold: number) {
  const [thresholdPassed, setThresholdPassed] = useState(false);
  useEffect(() => {
    function handle() {
      const newThresholdPassed = window.scrollY >= threshold;
      if (newThresholdPassed !== thresholdPassed) {
        setThresholdPassed(newThresholdPassed);
      }
    }
    window.addEventListener("scroll", handle);
    handle();
    return function cleanUp() {
      window.removeEventListener("scroll", handle);
    };
  }, [threshold, thresholdPassed]);
  return thresholdPassed;
}
