import { useEffect, useRef } from "react";
import { trackSectionInView } from "@/components/analytics";

export const useSectionTracking = (
  sectionName: string,
  threshold: number = 0.5
) => {
  const ref = useRef<HTMLElement>(null);
  const hasBeenSeen = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasBeenSeen.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenSeen.current) {
            hasBeenSeen.current = true;
            trackSectionInView(sectionName);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger when 50px into viewport
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, threshold]);

  return ref;
};
