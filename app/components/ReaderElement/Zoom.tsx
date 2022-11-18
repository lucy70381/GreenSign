import { useContext } from "react";
import PDFContext from "~/context/reader";

const Zoom = () => {
  const { options, setOptions } = useContext(PDFContext);

  const handleZoomIn = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      scale: prevOptions.scale + 0.1,
    }));
  };

  const handleZoomOut = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      scale: prevOptions.scale - 0.1,
    }));
  };

  return (
    <div className="rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]">
      <button
        className="h-[30px] w-[30px] bg-zoom-in bg-no-repeat"
        onClick={handleZoomIn}
      />
      <div>{(options.scale * 100).toFixed(0)}%</div>
      <button
        className="h-[30px] w-[30px] bg-zoom-out bg-no-repeat disabled:opacity-60"
        onClick={handleZoomOut}
        disabled={options.scale <= 0.2}
      />
    </div>
  );
};

export default Zoom;
