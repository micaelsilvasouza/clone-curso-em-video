import { useEffect } from "react";

// Este hook vai cuidar de travar/destravar o scroll da página com base em um boolean.

export function useLockBodyScroll(lock: boolean) {
  return useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // sempre destrava ao desmontar
    };
  }, [lock]);
}
