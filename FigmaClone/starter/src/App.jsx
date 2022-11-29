import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [strokeColor, setStrokeColor] = useState("#000");
  const [position, setPosition] = useState({ x: 0, y: 0, h: 0, w: 0 });
  const [opacity, setOpacity] = useState(0);
  return (
    <div>
      <Header setShape={setSelectedShape} />
      <Main
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

export default App;
