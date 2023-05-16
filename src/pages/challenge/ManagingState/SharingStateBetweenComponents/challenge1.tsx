import React, { useState, ChangeEvent } from 'react';

interface InputProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
  
const SyncedInputs = () => {
    const [text, setText] = useState('');

    function handleChange(e : ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <>
        <Input
            label="First input"
            value={text}
            onChange={handleChange}
        />
        <Input
            label="Second input"
            value={text}
            onChange={handleChange}
        />
        </>
    );
}

const Input = ({ label, value, onChange } : InputProps) => {
    return (
        <label>
          {label}
          {' '}
          <input
            value={value}
            onChange={onChange}
          />
        </label>
    );
}

export default SyncedInputs;
