import React from "react";
import { BACKGROUNDS } from "../constants/backgrounds";
import { STROKE_COLORS } from "../constants/stroke-colors";

const BarSide = ({
  setBackgroundColor,
  setStrokeColor,
  setPosition,
  position,
  opacity,
  setOpacity,
}) => {
  return (
    <div className="absolute top-14 h-[calc(100vh-3.5rem)] right-0 w-80 overflow-y-auto gap-y-8 border-t p-4 border-t-stone-700 flex flex-col items-center bg-stone-900">
      <div className="flex flex-col w-full">
        <p className="text-white font-medium text-xs">Background</p>
        <div className="flex flex-wrap gap-4 mt-4">
          {BACKGROUNDS.map((bg, index) => (
            <div
              onClick={() => setBackgroundColor(bg)}
              key={index}
              className="h-6 w-6 rounded-full cursor-pointer"
              style={{ backgroundColor: bg }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-white font-medium text-xs">Stroke</p>
        <div className="flex flex-wrap gap-4 mt-4">
          {STROKE_COLORS.map((st, index) => (
            <div
              onClick={() => setStrokeColor(st)}
              key={index}
              className="h-6 w-6 border-2 rounded-full cursor-pointer"
              style={{ borderColor: st }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-white font-medium text-xs">Position</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">X</span>
            <input
              readOnly
              type={"number"}
              value={position.x}
              className="w-full bg-stone-800 rounded text-white outline-none text-xs  px-1 py-1"
              onChange={(e) =>
                setPosition((prev) => ({ ...prev, x: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">Y</span>
            <input
              readOnly
              value={position.y}
              type={"number"}
              className="w-full bg-stone-800 rounded text-white outline-none text-xs px-1 py-1"
              onChange={(e) =>
                setPosition((prev) => ({ ...prev, y: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">W</span>
            <input
              readOnly
              value={position.w}
              type={"number"}
              className="w-full bg-stone-800 rounded text-white outline-none text-xs px-1 py-1"
              onChange={(e) =>
                setPosition((prev) => ({ ...prev, w: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">H</span>
            <input
              readOnly
              value={position.h}
              type={"number"}
              className="w-full bg-stone-800 rounded text-white outline-none text-xs px-1 py-1"
              onChange={(e) =>
                setPosition((prev) => ({ ...prev, h: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-white font-medium text-xs">Layer</p>
        <div className="flex items-center gap-x-2 mt-2">
          <span className="text-white text-xs">Opacity</span>
          <input
            type={"number"}
            value={opacity}
            className="bg-stone-800 max-w-[7rem] grow rounded text-white outline-none text-xs  px-1 py-1"
            onChange={(e) => setOpacity(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BarSide;
