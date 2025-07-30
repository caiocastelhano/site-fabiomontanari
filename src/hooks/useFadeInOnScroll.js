import { useEffect, useRef, useState } from 'react';

export function useFadeInOnScroll(threshold = 0.8) {
  const ref = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasBeenVisible]);

  return [ref, hasBeenVisible];
}
