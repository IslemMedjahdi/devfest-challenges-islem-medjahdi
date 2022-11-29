import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {
  FabricJSCanvas,
  useFabricJSEditor,
  FabricJSEditorHook,
} from "fabricjs-react";
import { fabric } from "fabric";

const App = () => {
  const { editor, onReady, selectedObjects } = useFabricJSEditor();
  const [selectedShape, setSelectedShape] = useState("square");
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [strokeColor, setStrokeColor] = useState("#000");
  const [position, setPosition] = useState({ x: 0, y: 0, h: 0, w: 0 });
  const [opacity, setOpacity] = useState(100);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    if (editor) {
      editor.canvas.setBackgroundColor("#fff");
      editor.canvas.on("mouse:move", () => {
        setObjects(selectedObjects);

        /*
        
        selectedObjects.forEach((obj) => {
          obj.canvas.on("mouse:move", (e) => {
            setPosition({
              h: obj.getScaledHeight(),
              w: obj.getScaledWidth(),
              x: obj.left,
              y: obj.top,
            });
          });
        }); */
        if (selectedObjects.length > 0) {
          setPosition({
            h: selectedObjects[0].getScaledHeight(),
            w: selectedObjects[0].getScaledWidth(),
            x: selectedObjects[0].left,
            y: selectedObjects[0].top,
          });
          setOpacity(selectedObjects[0].getObjectOpacity() * 100);
        }
      });
    }
  }, [editor]);

  const shapeClickHandler = (shape) => {
    if (shape === "square") {
      editor.addRectangle();
    } else if (shape === "circle") {
      editor.addCircle();
    } else if (shape === "line") {
      editor.addLine();
    } else if (shape === "triangle") {
      editor.canvas.add(
        new fabric.Triangle({
          fill: "#fff",
          stroke: "#000",
        })
      );
    } else if (shape === "text") {
      editor.addText("Your Text");
    } else if (shape === "image") {
    }
    setSelectedShape(shape);
  };

  const backgroundHandler = (bg) => {
    objects.forEach((obj) => {
      obj.setOptions({ fill: bg });
    });
    setBackgroundColor(bg);
  };

  const strokeHandler = (color) => {
    objects.forEach((obj) => {
      obj.setOptions({ stroke: color });
    });
    setStrokeColor(color);
  };

  const opacityHandler = (opacity) => {
    objects.forEach((obj) => {
      obj.setOptions({ opacity: opacity / 100 });
    });
    setOpacity(opacity);
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      fabric.Image.fromURL(
        URL.createObjectURL(e.target.files[0]),
        function (img) {
          editor.canvas.add(img);
        }
      );
    }
  };

  function downloadImage(url, name) {
    fetch(url)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // the filename you want
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("An error sorry"));
  }

  const exportHandler = () => {
    const href = editor.canvas.toDataURL({ format: "jpeg", quality: 0.8 });
    downloadImage(href, "canvas.jpeg");
  };
  return (
    <div>
      <Header
        shapeClickHandler={shapeClickHandler}
        onImageChange={onImageChange}
        exportHandler={exportHandler}
      />
      <Main
        setBackgroundColor={backgroundHandler}
        setStrokeColor={strokeHandler}
        setPosition={setPosition}
        position={position}
        opacity={opacity}
        setOpacity={opacityHandler}
      >
        <FabricJSCanvas className="h-full" onReady={onReady} />
      </Main>
    </div>
  );
};

export default App;
