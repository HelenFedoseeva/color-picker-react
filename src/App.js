import React from "react";
import ColorPicker from "./components/ColorPicker";
import Layout from "./components/Layout";

const colorPickerOption1 = [
  { label: "platinum", color: "#E6E3E4" },
  { label: "beau-blue", color: "#BDD4F1" },
  { label: "pale-taupe", color: "#BAA287" },
  { label: "html/css-grey", color: "#7C8584" },
  { label: "dark-jungle-green", color: "#121B28" },
];

const colorPickerOption2 = [
  { label: "flash-white", color: "#ECF5F6" },
  { label: "columbia-blue", color: "#C9DEE5" },
  { label: "cornFlower", color: "#91D5E7" },
  { label: "moss-green", color: "#BBDFAC" },
  { label: "rifle-green", color: "#474642" },
];

const colorPickerOption3 = [
  { label: "philippine-silver", color: "#B1B1BA" },
  { label: "blueberry", color: "#478BF1" },
  { label: "majorelle-blue", color: "#6747F1" },
  { label: "maize", color: "#FFCC47" },
  { label: "chinese-orange", color: "#F27048" },
];

const colorPickerOption4 = [
  { label: "teal-deer", color: "#9AFBB9" },
  { label: "magic-mint", color: "#A0FAD5" },
  { label: "shiny-shamrock", color: "#6BA87D" },
  { label: "gray-asparagus", color: "#4A5847" },
  { label: "forest-green", color: "#055329" },
];

const colorPickerOption5 = [
  { label: "pale-violet", color: "#BBA2F7" },
  { label: "malachite-green", color: "#71D68E" },
  { label: "midnight-green", color: "#014550" },
  { label: "outer-space", color: "#3B4E55" },
  { label: "dark-gunmetal", color: "#102830" },
];

const colorOptionsDarkMode = [
  { label: "fancy-pink", color: "#C651CD" },
  { label: "violet", color: "#8739F9" },
  { label: "dark-grey", color: "#363636" },
  { label: "bold-grey", color: "#1B1B1B" },
];

const App = () => {
  return (
    <>
      <Layout>
        <h1>Color pallete</h1>
        <p>Choose the best color-design for your application</p>
        <div className="pallete-container">
          <ColorPicker
            options={colorPickerOption1}
            title={"Expensive design option 1"}
          />
          <ColorPicker
            options={colorPickerOption2}
            title={"Expensive design option 2"}
          />
          <ColorPicker
            options={colorPickerOption3}
            title={"Expensive design option 3"}
          />
          <ColorPicker
            options={colorPickerOption4}
            title={"Expensive design option 4"}
          />
          <ColorPicker
            options={colorPickerOption5}
            title={"Expensive design option 5"}
          />
          <ColorPicker options={colorOptionsDarkMode} title={"Dark mode"} />
        </div>
      </Layout>
    </>
  );
};

export default App;
