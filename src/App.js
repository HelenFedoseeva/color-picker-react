import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Layout from "./components/Layout/Layout";

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
      <Layout>
        <h1>Choose a color</h1>
        <ColorPicker options={colorPickerOptions} />
      </Layout>
    </>
  );
};

export default App;
