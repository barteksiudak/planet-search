import { useEffect, useState } from 'react';

const DELAY = 300;

export default function useDebounce(value: string): string {
  const [currentValue, setCurrentValue] = useState<string>(value);

  useEffect(() => {
    const handleDelay = setTimeout(() => {
      setCurrentValue(value);
    }, DELAY);

    return () => {
      clearTimeout(handleDelay);
    };
  }, [value]);

  return currentValue;
}
