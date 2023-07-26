import React, { createContext, useContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children, props }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  }, [cursorPos, mobileViewActive]);

  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      with: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
      {...props}
    >
      {children}
    </CursorContext.Provider>
  );
};

function useCursor() {
  const context = useContext(CursorContext);
  if (typeof context === "undefined")
    throw new Error("useContext must be used within a Provider");
  return context;
}

export { CursorProvider, useCursor };
