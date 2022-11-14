type PaginationProps = {
  currentPage: number;
  count: number;
};
const Pagination = ({ currentPage, count }: PaginationProps) => (
  <div className="rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]">
    <button className="h-[30px] w-[30px] rounded-12 bg-green">
      <img className="m-auto" src="./icons/arrow-left.svg" alt="arrow-left" />
    </button>
    <div>{`${currentPage} / ${count}`}</div>
    <button className="h-[30px] w-[30px] rounded-12 bg-green">
      <img className="m-auto" src="./icons/arrow-right.svg" alt="arrow-right" />
    </button>
  </div>
);

export default Pagination;
