type ZoomProps = {
  currentRatio: number;
};
const Zoom = ({ currentRatio }: ZoomProps) => (
  <div className="rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]">
    <button className="h-[30px] w-[30px] bg-zoom-in bg-no-repeat" />
    <div>{currentRatio}%</div>
    <button className="h-[30px] w-[30px] bg-zoom-out bg-no-repeat" />
  </div>
);

export default Zoom;
