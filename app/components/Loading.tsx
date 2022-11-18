import Lottie from "lottie-react";
import animationData from "../../public/json/GNsign_loading.json";

type LoadingProps = {
  text: string;
};

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="my-auto grid place-content-center place-items-center">
      <Lottie animationData={animationData} className="h-36 w-36" loop />
      <p>簽名優化中...</p>
    </div>
  );
};

export default Loading;
