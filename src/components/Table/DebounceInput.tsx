import React, { useEffect, useState } from "react";

interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState<string>(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // 0.5s after setting the value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebouncedInput;
