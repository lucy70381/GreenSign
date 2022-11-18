import { createContext } from "react";

interface SignElementContext {
  isSign: boolean;
  currentColor: string;
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const SignContext = createContext<SignElementContext>(
  {} as SignElementContext
);

export default SignContext;
