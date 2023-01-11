import { useEffect } from 'react';

export const useKeyboardEvent = (eventType: string, callback: () => void) => {
  useEffect(() => {
    const handleEvent = (e: KeyboardEvent) => {
      if (e.key === eventType) {
        callback();
      }
    };

    window.addEventListener('keydown', handleEvent);

    return () => {
      window.removeEventListener('keydown', handleEvent);
    };
  }, [eventType, callback]);
};
