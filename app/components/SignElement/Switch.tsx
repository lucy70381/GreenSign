import { useContext } from "react";
import SignContext from "~/context/sign";

const Switch = () => {
  const { isSign, setIsSign } = useContext(SignContext);

  return (
    <div className="mx-auto flex h-10 w-60 rounded-14 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      {[
        { name: "手寫簽名", value: true },
        { name: "匯入簽名檔", value: false },
      ].map(({ name, value }) => (
        <button
          key={name}
          className={`w-1/2 rounded-14 bg-white text-green ${
            isSign === value && "gradient text-white "
          }`}
          onClick={() => setIsSign(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Switch;
