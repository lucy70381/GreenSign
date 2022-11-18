import { useContext, useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import PDFContext from "~/context/reader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Render = () => {
  const { canvasRef } = useContext(PDFContext);
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.width = "100%";
      canvas.style.height = "auto";
    }
  }, [canvasRef]);

  const handleConvertToImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL();
      setImgSrc(dataURL);
    }
  };

  return (
    <div>
      <div className="max-h-full max-w-full overflow-scroll">
        <canvas ref={canvasRef} className="bg-white" />
      </div>
      <button onClick={handleConvertToImage}>轉圖</button>
      <img className="h-20 w-20" src={imgSrc} alt="imagePdf" />
    </div>
  );
};

export default Render;
