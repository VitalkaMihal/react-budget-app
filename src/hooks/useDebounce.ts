import { Expense } from "context";
import { useEffect, useState } from "react";

export const useDebounce = (value: Expense[], delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setInterval(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};
