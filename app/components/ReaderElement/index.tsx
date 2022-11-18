import { useEffect, useMemo, useRef, useState } from "react";
import type { Options } from "~/context/reader";
import ReaderContext from "~/context/reader";
import usePDFData from "~/hooks/usePDFData";
import Pagination from "./Pagination";
import Render from "./Render";
import Zoom from "./Zoom";

type Props = {
  children: React.ReactNode;
};

const ReaderElement = ({ children }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [options, setOptions] = useState<Options>({
    imgData: "",
    pdfData: new Uint8Array(),
    scale: 1,
    page: 1,
  });

  const { loading, numPages } = usePDFData(canvasRef, options);

  useEffect(() => {
    const pdfJson = localStorage.getItem("pdfData");
    const imgData = localStorage.getItem("imgData");

    if (pdfJson) {
      const pdfData = JSON.parse(pdfJson) as Uint8Array;
      setOptions((prevOptions) => ({
        ...prevOptions,
        pdfData,
      }));
    } else if (imgData) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        imgData,
      }));
    }
  }, []);

  const value = useMemo(
    () => ({ canvasRef, options, setOptions, numPages }),
    [numPages, options]
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
};

ReaderElement.Pagination = Pagination;
ReaderElement.Zoom = Zoom;
ReaderElement.Render = Render;

export default ReaderElement;
