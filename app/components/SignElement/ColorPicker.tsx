import type { MouseEvent } from "react";
import { useContext, useCallback } from "react";
import SignContext from "~/context/sign";

const ColorPicker = () => {
  const { isSign } = useContext(SignContext);

  const { currentColor, setCurrentColor } = useContext(SignContext);
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const { color } = (e.target as HTMLButtonElement).dataset;
      color && setCurrentColor(color);
    },
    [setCurrentColor]
  );

  return (
    <div className={`${isSign ? 'flex' : 'invisible'} gap-x-4`}>
      {["#000000", "#0014C7", "#CA0000"].map((color) => (
        <button
          key={color}
          data-color={color}
          style={{ backgroundColor: color }}
          onClick={handleClick}
          className={`h-9 w-9 rounded-full ${
            currentColor === color &&
            "ring-2 ring-black ring-offset-[3px] ring-offset-white"
          }`}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
