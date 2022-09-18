import { useEffect, useState } from "react";

export default function usePreviousValue<T>(value: T): T {
  const [values, setValues] = useState<{
    previous: T;
    current: T;
  }>({
    previous: undefined,
    current: undefined,
  });
  useEffect(() => {
    setValues(({ current }) => ({
      previous: current,
      current: value,
    }));
  }, [value]);
  return values.previous;
}
