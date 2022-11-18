import { useCallback, useContext } from "react";
import SignContext from "~/context/sign";

const ClearBtn = () => {
  const { canvasRef } = useContext(SignContext);

  const handleClick = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && canvasRef.current) {
      const { width, height } = canvasRef.current;
      ctx.clearRect(0, 0, width, height);
    }
  }, [canvasRef]);

  return (
    <button
      className="w-1/2 rounded-16 border-green bg-white p-2.5 text-green"
      onClick={handleClick}
    >
      清除
    </button>
  );
};

export default ClearBtn;
