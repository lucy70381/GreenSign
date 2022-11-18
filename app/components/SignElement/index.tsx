import React, { useMemo, useRef, useState } from "react";
import Canvas from "./Canvas";
import ColorPicker from "./ColorPicker";
import SignContext from "../../context/sign";
import Switch from "./Switch";
import CreateBtn from "./CreateBtn";
import ClearBtn from "./ClearBtn";

interface Props {
  children: React.ReactNode;
}

const SignElement = ({ children }: Props) => {
  const [isSign, setIsSign] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentColor, setCurrentColor] = useState("#000000");
  const value = useMemo(
    () => ({ isSign, currentColor, setIsSign, setCurrentColor, canvasRef }),
    [isSign, currentColor]
  );

  return <SignContext.Provider value={value}>{children}</SignContext.Provider>;
};

const Container = ({ children }: Props) => <>{children}</>;

SignElement.Container = Container;
SignElement.Switch = Switch;
SignElement.ColorPicker = ColorPicker;
SignElement.Canvas = Canvas;
SignElement.ClearBtn = ClearBtn;
SignElement.CreateBtn = CreateBtn;

export default SignElement;
