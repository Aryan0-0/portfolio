import { useState, useEffect } from 'react';

const useCursor = (initialVisible = true, blinkRate = 500) => {
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, blinkRate);

    return () => clearInterval(interval);
  }, [blinkRate]);

  const cursor = visible ? '_' : '';
  
  return { cursor, visible };
};

export default useCursor;