import { useNavigate } from "@remix-run/react";
import { useCallback, useContext } from "react";
import SignContext from "~/context/sign";

const CreateBtn = () => {
  const navigate = useNavigate();
  const { canvasRef } = useContext(SignContext);

  const handleClick = useCallback(() => {
    const signature = canvasRef.current?.toDataURL();
    localStorage.setItem("signature", signature || "");
    navigate("/reader");
  }, [canvasRef, navigate]);

  return (
    <button
      className="gradient w-1/2 rounded-16 p-2.5 text-white"
      onClick={handleClick}
    >
      建立簽名
    </button>
  );
};

export default CreateBtn;
