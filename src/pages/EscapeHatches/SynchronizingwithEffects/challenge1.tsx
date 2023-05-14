import React, { useEffect, useRef, ChangeEvent } from 'react';

interface MyInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ value, onChange } : MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}
