import React from "react";
import BarSide from "./BarSide";

const Main = ({
  setBackgroundColor,
  setStrokeColor,
  setPosition,
  position,
  opacity,
  setOpacity,
  children,
}) => {
  return (
    <div className="h-[calc(100vh-3.5rem)] ">
      <div className="w-full h-[calc(100vh-3.5rem)]">{children}</div>
      <BarSide
        setBackgroundColor={setBackgroundColor}
        setStrokeColor={setStrokeColor}
        setPosition={setPosition}
        position={position}
        opacity={opacity}
        setOpacity={setOpacity}
      />
    </div>
  );
};

export default Main;
