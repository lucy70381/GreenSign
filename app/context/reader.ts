import { createContext } from "react";

export type Options = {
  imgData: string;
  pdfData: Uint8Array;
  page: number;
  scale: number;
};

interface ReaderElementContext {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
  numPages: number;
}

const ReaderContext = createContext<ReaderElementContext>({} as ReaderElementContext);

export default ReaderContext;
