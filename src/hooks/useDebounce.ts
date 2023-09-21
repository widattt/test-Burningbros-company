import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Thiết lập một timeout để chờ đợi delay milliseconds
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Xoá timeout cũ nếu giá trị thay đổi trong quá trình delay
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;