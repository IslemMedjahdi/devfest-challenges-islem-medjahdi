import React from "react";
import { SHAPES } from "../constants/shapes";

const Header = ({ setShape }) => {
  return (
    <div className="h-14 bg-stone-900 px-8 py-2 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-x-4">
        {SHAPES.map((shape, index) => (
          <div
            className="cursor-pointer"
            onClick={() => setShape(shape.title)}
            key={index}
          >
            <shape.Icon className="h-5 w-5 text-white" />
          </div>
        ))}
      </div>
      <div>
        <button className="text-white bg-green-600 px-4 py-1 rounded-md text-sm font-medium">
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
