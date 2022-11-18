import { useContext } from "react";
import PDFContext from "~/context/reader";

const Pagination = () => {
  const { options, setOptions, numPages } = useContext(PDFContext);

  const handlePrev = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      page: prevOptions.page - 1,
    }));
  };

  const handleNext = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      page: prevOptions.page + 1,
    }));
  };

  return (
    <div className="rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]">
      <button
        className="h-[30px] w-[30px] rounded-12 bg-green disabled:opacity-60"
        onClick={handlePrev}
        disabled={options.page === 1}
      >
        <img className="m-auto" src="./icons/arrow-left.svg" alt="arrow-left" />
      </button>
      <div>
        {options.page}
        {" / "}
        {numPages}
      </div>
      <button
        className="h-[30px] w-[30px] rounded-12 bg-green disabled:opacity-60"
        onClick={handleNext}
        disabled={options.page >= numPages}
      >
        <img
          className="m-auto"
          src="./icons/arrow-right.svg"
          alt="arrow-right"
        />
      </button>
    </div>
  );
};

export default Pagination;
