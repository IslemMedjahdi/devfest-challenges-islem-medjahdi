import React from "react";
import { SHAPES } from "../constants/shapes";

const Header = ({ shapeClickHandler, onImageChange, exportHandler }) => {
  return (
    <div className="h-14 bg-stone-900 px-8 py-2 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-x-4">
        {SHAPES.map((shape, index) => (
          <div
            className="cursor-pointer"
            onClick={() => shapeClickHandler(shape.title)}
            key={index}
          >
            <label htmlFor={shape.title}>
              {shape.title === "image" && (
                <input
                  id={shape.title}
                  type={"file"}
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={onImageChange}
                />
              )}
              <shape.Icon className="h-5 cursor-pointer w-5 text-white" />
            </label>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={exportHandler}
          className="text-white bg-green-600 px-4 py-1 rounded-md text-sm font-medium"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
