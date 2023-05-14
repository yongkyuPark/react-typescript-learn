import React, { useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

const Page: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            inputRef.current?.focus();
          }}
        />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
};

export default Page;