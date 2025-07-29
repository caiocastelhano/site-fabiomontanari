import { useEffect, useRef } from "react";

export function useMultiFadeInOnScroll(length = 1, threshold = 0.2) {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [length, threshold]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return setRef;
}
