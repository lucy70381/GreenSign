import type React from "react";
import { useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import type { Options } from "~/context/reader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const usePDFData = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  { pdfData, imgData, page, scale }: Options
) => {
  const [loading, setLoading] = useState(true);
  const numPages = useRef<number | null>(null);

  useEffect(() => {
    const renderPDF = async () => {
      setLoading(true);
      try {
        const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
        numPages.current = pdf.numPages;
        const pageData = await pdf.getPage(page); // 取得該頁的資料
        const viewport = pageData.getViewport({ scale }); // 計算該頁的 viewport
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          canvas.height = viewport.height;  // 設定 canvas 內容 的高度
          canvas.width = viewport.width;  // 設定 canvas 內容 的寬度

          canvas.style.height = scale * 100 + "%";  // 設定 canvas 的高度
          canvas.style.width = scale * 100 + "%"; // 設定 canvas 的寬度

          const renderContext = {
            canvasContext: ctx,
            viewport,
          };
          await pageData.render(renderContext).promise; // 將該頁的資料渲染到 canvas 上
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    const renderImage = () => {
      setLoading(true);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const image = new Image();
        image.src = imgData;
        image.onload = () => {
          canvas.height = image.height;
          canvas.width = image.width;
          canvas.style.height = scale * 100 + "%";
          canvas.style.width = scale * 100 + "%";
          ctx.drawImage(image, 0, 0);
        };
      }
      setLoading(false);
    };

    if (pdfData.length > 0) renderPDF();
    else if (imgData.length > 0) renderImage();
  }, [canvasRef, imgData, page, pdfData, scale]);

  return {
    loading,
    numPages: numPages.current ?? 1,
  };
};

export default usePDFData;
