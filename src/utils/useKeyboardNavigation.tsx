import { useEffect } from 'react';

interface KeyboardMapping {
  [key: string]: () => void;
}

const useKeyboardNavigation = (mappings: KeyboardMapping) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const action = mappings[e.key];
      if (action) {
        action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mappings]);
};

export default useKeyboardNavigation;