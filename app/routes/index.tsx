import { useNavigate } from "@remix-run/react";
import React, { useEffect, useRef } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [dragging, setDragging] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.removeItem("pdfData");
    localStorage.removeItem("imgData");
  }, []);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    let file: File;
    if (e.nativeEvent instanceof DragEvent) {
      e.nativeEvent.preventDefault();
      file = e.nativeEvent.dataTransfer?.files[0] as File;
      setDragging(false);
    } else {
      file = (e.currentTarget as HTMLInputElement).files?.[0] as File;
    }

    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const data = new Uint8Array(fileReader.result as ArrayBuffer);
      if (data) {
        if (file?.type === "application/pdf") {
          localStorage.setItem("pdfData", JSON.stringify(Array.from(data)));
        }
      }
    };
    fileReader.readAsArrayBuffer(file);
    if (file?.type === "image/png") {
      const imgData = URL.createObjectURL(file);
      localStorage.setItem("imgData", imgData);
    }
    navigate("/sign");
  };

  return (
    <main>
      <div className="container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2">
        <div
          className={`rounded-26 border border-dashed border-gray p-2.5 pt-5 pb-20 ${
            dragging && "opacity-50"
          }`}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDrop={handleUpload}
          onDragOver={(e) => e.preventDefault()}
        >
          <img
            className="mx-auto mb-5 h-28 w-32"
            src="./images/file.svg"
            alt="file"
          />
          <input
            ref={inputRef}
            type="file"
            accept=".pdf, .png"
            className="mx-auto hidden"
            onChange={handleUpload}
          />
          <button
            className="gradient mx-auto block h-[60px] w-52 rounded-16 text-white"
            onClick={() => inputRef.current?.click()}
          >
            選擇檔案
          </button>
          <p className="text-center text-sm text-green">
            (限 10MB 內的 PDF 或 PNG檔)
          </p>
        </div>
      </div>
    </main>
  );
}
