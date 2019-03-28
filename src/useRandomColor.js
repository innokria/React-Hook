import { useState } from "react";

export const useRandomColor = (colors, initialColor) => {
  const lenColors = colors.length;
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const index = Math.floor(Math.random() * lenColors);
    const pickedColor = colors[index];
    setColor(pickedColor);
  };

  return [color, changeColor];
};