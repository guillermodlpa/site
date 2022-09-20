import { useRouter } from "next/router";
import { useMemo } from "react";

export default function useActivePathname() {
  const { asPath, isReady } = useRouter();
  const activePathname = useMemo(() => {
    return isReady ? new URL(asPath, location.href).pathname : undefined;
  }, [isReady, asPath]);
  return activePathname;
}
