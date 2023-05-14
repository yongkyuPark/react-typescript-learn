import React, { forwardRef, Ref } from 'react';

export default forwardRef(
  function SearchInput(props, ref: Ref<HTMLInputElement>) {
    return (
      <input
        ref={ref}
        placeholder="Looking for something?"
      />
    );
  }
);