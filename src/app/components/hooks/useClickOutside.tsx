import { useEffect } from "react";

// Este hook detecta cliques fora de um elemento e dispara uma função.

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void,
  active = true
) {
  return useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onClickOutside, active]);
}
