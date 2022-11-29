import React from "react";
import BarSide from "./BarSide";

const Main = ({
  setBackgroundColor,
  setStrokeColor,
  setPosition,
  position,
  opacity,
  setOpacity,
}) => {
  return (
    <div className="grid grid-cols-12 h-[calc(100vh-3.5rem)] ">
      <div className="col-span-10" />
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
