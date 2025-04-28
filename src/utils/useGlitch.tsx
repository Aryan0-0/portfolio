import { useCallback } from 'react';

const useGlitch = () => {
  // Apply a glitch effect to an element temporarily
  const applyGlitch = useCallback((element: HTMLElement, duration = 300) => {
    element.classList.add('glitch');
    setTimeout(() => {
      element.classList.remove('glitch');
    }, duration);
  }, []);

  // Add random glitches to random elements periodically
  const startRandomGlitches = useCallback((selector: string, interval = 10000) => {
    const randomGlitch = () => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements[randomIndex] as HTMLElement;
        applyGlitch(randomElement);
      }
    };

    const intervalId = setInterval(randomGlitch, interval);
    return () => clearInterval(intervalId);
  }, [applyGlitch]);

  return { applyGlitch, startRandomGlitches };
};

export default useGlitch;