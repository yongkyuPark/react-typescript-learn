import React, { MouseEventHandler } from 'react';

interface SearchButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;