import { useEffect, useRef } from 'react';

interface useIntersectionObserverArgs {
  onIntersection?: () => void;
}

export const useIntersectionObserver = ({ onIntersection }: useIntersectionObserverArgs) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && onIntersection) {
          onIntersection();
        }
      },
      {
        rootMargin: '0px',
      },
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef, onIntersection]);

  return {
    loadMoreRef,
  };
};
