import type { MouseEvent } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createContext, useContext, useMemo, useState } from "react";

interface SignElementContext {
  isSign: boolean;
  currentColor: string;
  setIsSign: (isSign: boolean) => void;
  setCurrentColor: (currentColor: string) => void;
}

const SignContext = createContext<SignElementContext>({} as SignElementContext);

type Props = {
  children: React.ReactNode;
};

const SignElement = ({ children }: Props) => {
  const [isSign, setIsSign] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const value = useMemo(
    () => ({ isSign, currentColor, setIsSign, setCurrentColor }),
    [isSign, currentColor]
  );

  return <SignContext.Provider value={value}>{children}</SignContext.Provider>;
};

const Container = ({ children }: Props) => <>{children}</>;

const Switch = () => {
  const { isSign, setIsSign } = useContext(SignContext);

  return (
    <div className="flex h-10 w-60 rounded-14 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      {[
        { name: "手寫簽名", value: true },
        { name: "匯入簽名檔", value: false },
      ].map(({ name, value }) => (
        <button
          key={name}
          className={`w-1/2 rounded-14 bg-white text-green ${
            isSign === value && "gradient text-white "
          }`}
          onClick={() => setIsSign(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

const ColorPicker = () => {
  const { currentColor, setCurrentColor } = useContext(SignContext);

  return (
    <div className="flex gap-x-4">
      {["#000000", "#0014C7", "#CA0000"].map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setCurrentColor(color)}
          className={`h-9 w-9  rounded-full ${
            currentColor === color &&
            "ring-2 ring-black ring-offset-[3px] ring-offset-white"
          }`}
        />
      ))}
    </div>
  );
};

const SignCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>();
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      ctx.current = context;
      ctx.current.lineWidth = 2;
      ctx.current.lineCap = "round"; // 繪制圓形的結束線帽
      ctx.current.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
      ctx.current.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
      ctx.current.shadowColor = "black"; // 邊緣顏色
    }
  }, []);

  const handleMouseDown = (event: MouseEvent) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    if (canvasRef.current && ctx.current) {
      const { top, left } = canvasRef.current.getBoundingClientRect();
      const dx = clientX - left;
      const dy = clientY - top;
      ctx.current.beginPath();
      ctx.current.moveTo(dx, dy);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!drawing) return;
    const { clientX, clientY } = event;
    if (canvasRef.current && ctx.current) {
      const { top, left } = canvasRef.current.getBoundingClientRect();
      const dx = clientX - left;
      const dy = clientY - top;
      ctx.current.lineTo(dx, dy);
      ctx.current.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="col-start-4 col-end-9 ml-20 bg-white before:content-['在此書寫你的簽名']"
      placeholder="在此書寫你的簽名"
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDrawing(false)}
      onMouseMove={handleMouseMove}
      // onTouchStart={() => setDrawing(true)}
      // onTouchEnd={() => setDrawing(false)}
    ></canvas>
  );
};

SignElement.Container = Container;
SignElement.Switch = Switch;
SignElement.ColorPicker = ColorPicker;
SignElement.SignCanvas = SignCanvas;

export default SignElement;
