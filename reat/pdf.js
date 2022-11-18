var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-5LX254QC.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/reader/index.tsx
var reader_exports = {};
__export(reader_exports, {
  default: () => Index
});

// app/components/ReaderElement/index.tsx
var import_react8 = require("react");

// app/context/reader.ts
var import_react3 = require("react"), ReaderContext = (0, import_react3.createContext)({}), reader_default = ReaderContext;

// app/hooks/usePDFData.ts
var import_react4 = require("react"), import_react_pdf = require("react-pdf");
import_react_pdf.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf.pdfjs.version}/pdf.worker.js`;
var usePDFData = (canvasRef, { pdfData, imgData, page, scale }) => {
  let [loading, setLoading] = (0, import_react4.useState)(!0), numPages = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    let renderPDF = async () => {
      setLoading(!0);
      try {
        let pdf = await import_react_pdf.pdfjs.getDocument({ data: pdfData }).promise;
        numPages.current = pdf.numPages;
        let pageData = await pdf.getPage(page), viewport = pageData.getViewport({ scale }), canvas = canvasRef.current;
        if (canvas) {
          let ctx = canvas.getContext("2d");
          canvas.height = viewport.height, canvas.width = viewport.width, canvas.style.height = scale * 100 + "%", canvas.style.width = scale * 100 + "%";
          let renderContext = {
            canvasContext: ctx,
            viewport
          };
          await pageData.render(renderContext).promise;
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(!1);
    }, renderImage = () => {
      setLoading(!0);
      let canvas = canvasRef.current;
      if (canvas) {
        let ctx = canvas.getContext("2d"), image = new Image();
        image.src = imgData, image.onload = () => {
          canvas.height = image.height, canvas.width = image.width, canvas.style.height = scale * 100 + "%", canvas.style.width = scale * 100 + "%", ctx.drawImage(image, 0, 0);
        };
      }
      setLoading(!1);
    };
    pdfData.length > 0 ? renderPDF() : imgData.length > 0 && renderImage();
  }, [canvasRef, imgData, page, pdfData, scale]), {
    loading,
    numPages: numPages.current ?? 1
  };
}, usePDFData_default = usePDFData;

// app/components/ReaderElement/Pagination.tsx
var import_react5 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Pagination = () => {
  let { options, setOptions, numPages } = (0, import_react5.useContext)(reader_default), handlePrev = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      page: prevOptions.page - 1
    }));
  }, handleNext = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      page: prevOptions.page + 1
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "h-[30px] w-[30px] rounded-12 bg-green disabled:opacity-60",
        onClick: handlePrev,
        disabled: options.page === 1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "m-auto",
          src: "./icons/arrow-left.svg",
          alt: "arrow-left"
        }, void 0, !1, {
          fileName: "app/components/ReaderElement/Pagination.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Pagination.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          options.page,
          " / ",
          numPages
        ]
      }, void 0, !0, {
        fileName: "app/components/ReaderElement/Pagination.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "h-[30px] w-[30px] rounded-12 bg-green disabled:opacity-60",
        onClick: handleNext,
        disabled: options.page >= numPages,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "m-auto",
          src: "./icons/arrow-right.svg",
          alt: "arrow-right"
        }, void 0, !1, {
          fileName: "app/components/ReaderElement/Pagination.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Pagination.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ReaderElement/Pagination.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, Pagination_default = Pagination;

// app/components/ReaderElement/Render.tsx
var import_react6 = require("react"), import_react_pdf2 = require("react-pdf");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
import_react_pdf2.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf2.pdfjs.version}/pdf.worker.js`;
var Render = () => {
  let { canvasRef } = (0, import_react6.useContext)(reader_default), [imgSrc, setImgSrc] = (0, import_react6.useState)("");
  return (0, import_react6.useEffect)(() => {
    let canvas = canvasRef.current;
    canvas && (canvas.style.width = "100%", canvas.style.height = "auto");
  }, [canvasRef]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-h-full max-w-full overflow-scroll",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", {
          ref: canvasRef,
          className: "bg-white"
        }, void 0, !1, {
          fileName: "app/components/ReaderElement/Render.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Render.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => {
          let canvas = canvasRef.current;
          if (canvas) {
            let dataURL = canvas.toDataURL();
            setImgSrc(dataURL);
          }
        },
        children: "\u8F49\u5716"
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Render.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        className: "h-20 w-20",
        src: imgSrc,
        alt: "imagePdf"
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Render.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ReaderElement/Render.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, Render_default = Render;

// app/components/ReaderElement/Zoom.tsx
var import_react7 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Zoom = () => {
  let { options, setOptions } = (0, import_react7.useContext)(reader_default), handleZoomIn = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      scale: prevOptions.scale + 0.1
    }));
  }, handleZoomOut = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      scale: prevOptions.scale - 0.1
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "rounded flex w-[200px] items-center justify-between rounded-16 bg-white py-3 px-4 shadow-[1px_4px_6px_rgba(0,0,0,0.11)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "h-[30px] w-[30px] bg-zoom-in bg-no-repeat",
        onClick: handleZoomIn
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Zoom.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          (options.scale * 100).toFixed(0),
          "%"
        ]
      }, void 0, !0, {
        fileName: "app/components/ReaderElement/Zoom.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        className: "h-[30px] w-[30px] bg-zoom-out bg-no-repeat disabled:opacity-60",
        onClick: handleZoomOut,
        disabled: options.scale <= 0.2
      }, void 0, !1, {
        fileName: "app/components/ReaderElement/Zoom.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ReaderElement/Zoom.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, Zoom_default = Zoom;

// app/components/ReaderElement/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ReaderElement = ({ children }) => {
  let canvasRef = (0, import_react8.useRef)(null), [options, setOptions] = (0, import_react8.useState)({
    imgData: "",
    pdfData: new Uint8Array(),
    scale: 1,
    page: 1
  }), { loading, numPages } = usePDFData_default(canvasRef, options);
  (0, import_react8.useEffect)(() => {
    let pdfJson = localStorage.getItem("pdfData"), imgData = localStorage.getItem("imgData");
    if (pdfJson) {
      let pdfData = JSON.parse(pdfJson);
      setOptions((prevOptions) => ({
        ...prevOptions,
        pdfData
      }));
    } else
      imgData && setOptions((prevOptions) => ({
        ...prevOptions,
        imgData
      }));
  }, []);
  let value = (0, import_react8.useMemo)(
    () => ({ canvasRef, options, setOptions, numPages }),
    [numPages, options]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(reader_default.Provider, {
    value,
    children
  }, void 0, !1, {
    fileName: "app/components/ReaderElement/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};
ReaderElement.Pagination = Pagination_default;
ReaderElement.Zoom = Zoom_default;
ReaderElement.Render = Render_default;
var ReaderElement_default = ReaderElement;

// app/routes/reader/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReaderElement_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReaderElement_default.Pagination, {}, void 0, !1, {
            fileName: "app/routes/reader/index.tsx",
            lineNumber: 8,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReaderElement_default.Zoom, {}, void 0, !1, {
            fileName: "app/routes/reader/index.tsx",
            lineNumber: 9,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReaderElement_default.Render, {}, void 0, !1, {
            fileName: "app/routes/reader/index.tsx",
            lineNumber: 10,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/reader/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/reader/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/reader/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/sign/index.tsx
var sign_exports = {};
__export(sign_exports, {
  default: () => Sign
});

// app/components/SignElement/index.tsx
var import_react16 = require("react");

// app/components/SignElement/Canvas.tsx
var import_react10 = require("react");

// app/context/sign.ts
var import_react9 = require("react"), SignContext = (0, import_react9.createContext)(
  {}
), sign_default = SignContext;

// app/components/SignElement/Canvas.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var drawing = !1, handleMouseEvent = (event) => {
  let { type } = event;
  if ((type === "mousemove" /* MOVE */ || type === "touchmove" /* MOVE */) && !drawing)
    return;
  let clientX, clientY;
  event.nativeEvent instanceof MouseEvent ? { clientX, clientY } = event : { clientX, clientY } = event.nativeEvent.touches[0];
  let canvas = event.currentTarget, ctx = canvas.getContext("2d");
  if (ctx) {
    let { left, top } = canvas.getBoundingClientRect(), dx = clientX - left, dy = clientY - top;
    switch (type) {
      case "mousedown" /* DOWN */:
      case "touchstart" /* START */:
        drawing = !0, ctx.beginPath(), ctx.moveTo(dx, dy);
        break;
      case "mousemove" /* MOVE */:
      case "touchmove" /* MOVE */:
        ctx.lineTo(dx, dy), ctx.stroke();
        break;
    }
  }
}, Canvas = () => {
  let { currentColor, canvasRef, isSign } = (0, import_react10.useContext)(sign_default);
  return (0, import_react10.useEffect)(() => {
    var _a;
    let canvas = canvasRef.current, ctx = (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (canvas && ctx) {
      canvas.style.width = "100%", canvas.style.height = "100%";
      let { offsetWidth, offsetHeight } = canvas;
      canvas.width = offsetWidth, canvas.height = offsetHeight, ctx.lineWidth = 2, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.shadowBlur = 1, ctx.font = "30px Comic Sans MS", ctx.textAlign = "center", ctx.fillText("\u5728\u6B64\u66F8\u5BEB\u4F60\u7684\u7C3D\u540D", offsetWidth / 2, offsetHeight / 2);
    }
  }, [canvasRef]), (0, import_react10.useEffect)(() => {
    var _a;
    let ctx = (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
    ctx && (ctx.strokeStyle = currentColor, ctx.shadowColor = currentColor);
  }, [canvasRef, currentColor]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-56 w-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", {
          ref: canvasRef,
          onResize: () => {
          },
          className: "rounded-26 bg-white",
          placeholder: "\u5728\u6B64\u66F8\u5BEB\u4F60\u7684\u7C3D\u540D",
          onMouseUp: () => drawing = !1,
          onMouseDown: handleMouseEvent,
          onMouseMove: handleMouseEvent,
          onTouchEnd: () => drawing = !1,
          onTouchStart: handleMouseEvent,
          onTouchMove: handleMouseEvent
        }, void 0, !1, {
          fileName: "app/components/SignElement/Canvas.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/SignElement/Canvas.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: isSign ? "hidden" : "",
        children: [
          "\u8ACB\u9078\u64C7\u6A94\u6848",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "file",
            accept: "image/png, application/pdf",
            onChange: (e) => {
              var _a;
              let canvas = canvasRef.current, file = (_a = e.currentTarget.files) == null ? void 0 : _a[0];
              if ((file == null ? void 0 : file.type) === "image/png") {
                let img = new Image();
                img.onload = async (e2) => {
                  if (canvas) {
                    let { width, height } = img, ratio = width / height, { offsetWidth } = canvas, canvasHeight = offsetWidth / ratio, ctx = canvas.getContext("2d");
                    ctx == null || ctx.drawImage(img, 0, 0, offsetWidth, canvasHeight);
                  }
                }, img.src = URL.createObjectURL(file);
              }
            }
          }, void 0, !1, {
            fileName: "app/components/SignElement/Canvas.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/SignElement/Canvas.tsx",
        lineNumber: 122,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/SignElement/Canvas.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}, Canvas_default = Canvas;

// app/components/SignElement/ColorPicker.tsx
var import_react11 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ColorPicker = () => {
  let { isSign } = (0, import_react11.useContext)(sign_default), { currentColor, setCurrentColor } = (0, import_react11.useContext)(sign_default), handleClick = (0, import_react11.useCallback)(
    (e) => {
      let { color } = e.target.dataset;
      color && setCurrentColor(color);
    },
    [setCurrentColor]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${isSign ? "flex" : "invisible"} gap-x-4`,
    children: ["#000000", "#0014C7", "#CA0000"].map((color) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      "data-color": color,
      style: { backgroundColor: color },
      onClick: handleClick,
      className: `h-9 w-9 rounded-full ${currentColor === color && "ring-2 ring-black ring-offset-[3px] ring-offset-white"}`
    }, color, !1, {
      fileName: "app/components/SignElement/ColorPicker.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/SignElement/ColorPicker.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}, ColorPicker_default = ColorPicker;

// app/components/SignElement/Switch.tsx
var import_react12 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Switch = () => {
  let { isSign, setIsSign } = (0, import_react12.useContext)(sign_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-auto flex h-10 w-60 rounded-14 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
    children: [
      { name: "\u624B\u5BEB\u7C3D\u540D", value: !0 },
      { name: "\u532F\u5165\u7C3D\u540D\u6A94", value: !1 }
    ].map(({ name, value }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      className: `w-1/2 rounded-14 bg-white text-green ${isSign === value && "gradient text-white "}`,
      onClick: () => setIsSign(value),
      children: name
    }, name, !1, {
      fileName: "app/components/SignElement/Switch.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/SignElement/Switch.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, Switch_default = Switch;

// app/components/SignElement/CreateBtn.tsx
var import_react13 = require("@remix-run/react"), import_react14 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CreateBtn = () => {
  let navigate = (0, import_react13.useNavigate)(), { canvasRef } = (0, import_react14.useContext)(sign_default), handleClick = (0, import_react14.useCallback)(() => {
    var _a;
    let signature = (_a = canvasRef.current) == null ? void 0 : _a.toDataURL();
    localStorage.setItem("signature", signature || ""), navigate("/reader");
  }, [canvasRef, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    className: "gradient w-1/2 rounded-16 p-2.5 text-white",
    onClick: handleClick,
    children: "\u5EFA\u7ACB\u7C3D\u540D"
  }, void 0, !1, {
    fileName: "app/components/SignElement/CreateBtn.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, CreateBtn_default = CreateBtn;

// app/components/SignElement/ClearBtn.tsx
var import_react15 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ClearBtn = () => {
  let { canvasRef } = (0, import_react15.useContext)(sign_default), handleClick = (0, import_react15.useCallback)(() => {
    var _a;
    let ctx = (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (ctx && canvasRef.current) {
      let { width, height } = canvasRef.current;
      ctx.clearRect(0, 0, width, height);
    }
  }, [canvasRef]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    className: "w-1/2 rounded-16 border-green bg-white p-2.5 text-green",
    onClick: handleClick,
    children: "\u6E05\u9664"
  }, void 0, !1, {
    fileName: "app/components/SignElement/ClearBtn.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, ClearBtn_default = ClearBtn;

// app/components/SignElement/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SignElement = ({ children }) => {
  let [isSign, setIsSign] = (0, import_react16.useState)(!0), canvasRef = (0, import_react16.useRef)(null), [currentColor, setCurrentColor] = (0, import_react16.useState)("#000000"), value = (0, import_react16.useMemo)(
    () => ({ isSign, currentColor, setIsSign, setCurrentColor, canvasRef }),
    [isSign, currentColor]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sign_default.Provider, {
    value,
    children
  }, void 0, !1, {
    fileName: "app/components/SignElement/index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}, Container = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children
}, void 0, !1, {
  fileName: "app/components/SignElement/index.tsx",
  lineNumber: 25,
  columnNumber: 44
}, this);
SignElement.Container = Container;
SignElement.Switch = Switch_default;
SignElement.ColorPicker = ColorPicker_default;
SignElement.Canvas = Canvas_default;
SignElement.ClearBtn = ClearBtn_default;
SignElement.CreateBtn = CreateBtn_default;
var SignElement_default = SignElement;

// app/routes/sign/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Sign() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.Container, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.Switch, {}, void 0, !1, {
              fileName: "app/routes/sign/index.tsx",
              lineNumber: 9,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.ColorPicker, {}, void 0, !1, {
              fileName: "app/routes/sign/index.tsx",
              lineNumber: 10,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.Canvas, {}, void 0, !1, {
              fileName: "app/routes/sign/index.tsx",
              lineNumber: 11,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.ClearBtn, {}, void 0, !1, {
              fileName: "app/routes/sign/index.tsx",
              lineNumber: 12,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignElement_default.CreateBtn, {}, void 0, !1, {
              fileName: "app/routes/sign/index.tsx",
              lineNumber: 13,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/sign/index.tsx",
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/sign/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/sign/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/sign/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
var import_react17 = require("@remix-run/react"), import_react18 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index2() {
  let navigate = (0, import_react17.useNavigate)(), [dragging, setDragging] = import_react18.default.useState(!1), inputRef = (0, import_react18.useRef)(null);
  (0, import_react18.useEffect)(() => {
    localStorage.removeItem("pdfData"), localStorage.removeItem("imgData");
  }, []);
  let handleUpload = (e) => {
    var _a, _b;
    let file;
    e.nativeEvent instanceof DragEvent ? (e.nativeEvent.preventDefault(), file = (_a = e.nativeEvent.dataTransfer) == null ? void 0 : _a.files[0], setDragging(!1)) : file = (_b = e.currentTarget.files) == null ? void 0 : _b[0];
    let fileReader = new FileReader();
    if (fileReader.onload = async (e2) => {
      let data = new Uint8Array(fileReader.result);
      data && (file == null ? void 0 : file.type) === "application/pdf" && localStorage.setItem("pdfData", JSON.stringify(Array.from(data)));
    }, fileReader.readAsArrayBuffer(file), (file == null ? void 0 : file.type) === "image/png") {
      let imgData = URL.createObjectURL(file);
      localStorage.setItem("imgData", imgData);
    }
    navigate("/sign");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `rounded-26 border border-dashed border-gray p-2.5 pt-5 pb-20 ${dragging && "opacity-50"}`,
        onDragEnter: () => setDragging(!0),
        onDragLeave: () => setDragging(!1),
        onDrop: handleUpload,
        onDragOver: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "mx-auto mb-5 h-28 w-32",
            src: "./images/file.svg",
            alt: "file"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            ref: inputRef,
            type: "file",
            accept: ".pdf, .png",
            className: "mx-auto hidden",
            onChange: handleUpload
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "gradient mx-auto block h-[60px] w-52 rounded-16 text-white",
            onClick: () => {
              var _a;
              return (_a = inputRef.current) == null ? void 0 : _a.click();
            },
            children: "\u9078\u64C7\u6A94\u6848"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center text-sm text-green",
            children: "(\u9650 10MB \u5167\u7684 PDF \u6216 PNG\u6A94)"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "495f6ff7", entry: { module: "/build/entry.client-6B4GAMBT.js", imports: ["/build/_shared/chunk-D25PWGJB.js", "/build/_shared/chunk-R4OLBDS5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F7JJ7PRV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-G26TWFPN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reader/index": { id: "routes/reader/index", parentId: "root", path: "reader", index: !0, caseSensitive: void 0, module: "/build/routes/reader/index-6GSOGLAC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign/index": { id: "routes/sign/index", parentId: "root", path: "sign", index: !0, caseSensitive: void 0, module: "/build/routes/sign/index-AJ43EE5R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-495F6FF7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/reader/index": {
    id: "routes/reader/index",
    parentId: "root",
    path: "reader",
    index: !0,
    caseSensitive: void 0,
    module: reader_exports
  },
  "routes/sign/index": {
    id: "routes/sign/index",
    parentId: "root",
    path: "sign",
    index: !0,
    caseSensitive: void 0,
    module: sign_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=pdf.js.map
