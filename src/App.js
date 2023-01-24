import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "indigo", color: "#3F51B5" },
  { label: "pink", color: "#E91E63" },
];

const App = () => {
  return (
    <>
      <h1>Color Picker</h1>
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default App;
