import React, { FC, MouseEvent } from 'react';

interface ColorSwitchProps {
  onChangeColor: () => void;
}

const ColorSwitch: FC<ColorSwitchProps> = ({ onChangeColor }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChangeColor();
  };

  return (
    <button onClick={handleClick}>
      Change color
    </button>
  );
};

export default ColorSwitch;