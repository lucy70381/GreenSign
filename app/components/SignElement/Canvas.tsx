import React, { ChangeEvent } from "react";
import { useContext, useEffect } from "react";
import SignContext from "~/context/sign";

enum MOUSE {
  DOWN = "mousedown",
  MOVE = "mousemove",
}

enum TOUCH {
  START = "touchstart",
  MOVE = "touchmove",
}

let drawing = false;

const handleMouseEvent = (event: React.MouseEvent | React.TouchEvent) => {
  const { type } = event;
  if ((type === MOUSE.MOVE || type === TOUCH.MOVE) && !drawing) return;
  let clientX, clientY;
  if (event.nativeEvent instanceof MouseEvent) {
    ({ clientX, clientY } = event as React.MouseEvent);
  } else {
    ({ clientX, clientY } = event.nativeEvent.touches[0]);
  }

  const canvas = event.currentTarget as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const { left, top } = canvas.getBoundingClientRect();
    const dx = clientX - left;
    const dy = clientY - top;

    switch (type) {
      case MOUSE.DOWN:
      case TOUCH.START:
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(dx, dy);
        break;
      case MOUSE.MOVE:
      case TOUCH.MOVE:
        ctx.lineTo(dx, dy);
        ctx.stroke();
        break;
    }
  }
};

const Canvas = () => {
  const { currentColor, canvasRef, isSign } = useContext(SignContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current?.getContext("2d");

    if (canvas && ctx) {
      // Make it visually fill the positioned parent
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      // set the internal size to match
      const { offsetWidth, offsetHeight } = canvas;
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      ctx.lineWidth = 2;
      ctx.lineCap = "round"; // 繪制圓形的結束線帽
      ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
      ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒

      ctx.font = "30px Comic Sans MS";
      ctx.textAlign = "center";
      ctx.fillText("在此書寫你的簽名", offsetWidth / 2, offsetHeight / 2);
    }
  }, [canvasRef]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = currentColor; // 線條顏色
      ctx.shadowColor = currentColor; // 邊緣顏色
    }
  }, [canvasRef, currentColor]);

  const handleUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const canvas = canvasRef.current;
    const file = e.currentTarget.files?.[0] as File;
    if (file?.type === "image/png") {
      const img = new Image();
      img.onload = async (e) => {
        if (canvas) {
          const { width, height } = img;
          const ratio = width / height;
          const { offsetWidth } = canvas;
          const canvasHeight = offsetWidth / ratio;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, offsetWidth, canvasHeight);
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <>
      <div className="h-56 w-full">
        <canvas
          ref={canvasRef}
          onResize={() => {}}
          className="rounded-26 bg-white"
          placeholder="在此書寫你的簽名"
          onMouseUp={() => (drawing = false)}
          onMouseDown={handleMouseEvent}
          onMouseMove={handleMouseEvent}
          onTouchEnd={() => (drawing = false)}
          onTouchStart={handleMouseEvent}
          onTouchMove={handleMouseEvent}
        />
      </div>
      <div className={isSign ? "hidden" : ""}>
        請選擇檔案
        <input type="file" accept="image/png, application/pdf" onChange={handleUploadImg} />
      </div>
    </>
  );
};

export default Canvas;
