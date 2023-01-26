import React from "react";
import ColorPicker from "./components/ColorPicker";
import Layout from "./components/Layout";

const colorPickerOption1 = [
  { label: "Platinum", color: "#E6E3E4" },
  { label: "Beau blue", color: "#BDD4F1" },
  { label: "Pale taupe", color: "#BAA287" },
  { label: "Html/css-grey", color: "#7C8584" },
  { label: "Dark jungle green", color: "#121B28" },
];

const colorPickerOption2 = [
  { label: "Flash white", color: "#ECF5F6" },
  { label: "Columbia blue", color: "#C9DEE5" },
  { label: "CornFlower", color: "#91D5E7" },
  { label: "Moss green", color: "#BBDFAC" },
  { label: "Rifle green", color: "#474642" },
];

const colorPickerOption3 = [
  { label: "Philippine silver", color: "#B1B1BA" },
  { label: "Blueberry", color: "#478BF1" },
  { label: "Majorelle blue", color: "#6747F1" },
  { label: "Maize", color: "#FFCC47" },
  { label: "Chinese orange", color: "#F27048" },
];

const colorPickerOption4 = [
  { label: "Teal Deer", color: "#9AFBB9" },
  { label: "Magic Mint", color: "#A0FAD5" },
  { label: "Shiny Shamrock", color: "#6BA87D" },
  { label: "Gray Asparagus", color: "#4A5847" },
  { label: "Forest green", color: "#055329" },
];

const colorPickerOption5 = [
  { label: "Pale violet", color: "#BBA2F7" },
  { label: "Malachite green", color: "#71D68E" },
  { label: "Midnight green", color: "#014550" },
  { label: "Outer space", color: "#3B4E55" },
  { label: "Dark gunmetal", color: "#102830" },
];

const colorPickerOption6 = [
  { label: "Dutch White", color: "#F0DBB9" },
  { label: "Maize (Crayola)", color: "#EDCB50" },
  { label: "Mandarin", color: "#EF7C4C" },
  { label: "Green(RYB)", color: "#7DB02D" },
  { label: "Sea green", color: "#2B8B5D" },
];

const colorPickerOption7 = [
  { label: "Light Salmon Pink", color: "#FD9C9C" },
  { label: "Pastel Grey", color: "#CADFC5" },
  { label: "Jordy Blue", color: "#9399FE" },
  { label: "Rocket Metallic", color: "#8B7885" },
  { label: "Mystic", color: "#D6527C" },
];

const colorPickerOption8 = [
  { label: "Dark Vanilla", color: "#D3B59D" },
  { label: "Beaver", color: "#A08477" },
  { label: "Crayola", color: "#D6A076" },
  { label: "Dark Coral", color: "#C35E39" },
  { label: "Pine Tree", color: "#2D2B27" },
];
const colorOptionsDarkMode = [
  { label: "Fancy pink", color: "#C651CD" },
  { label: "Violet", color: "#8739F9" },
  { label: "Dark grey", color: "#363636" },
  { label: "Bold grey", color: "#1B1B1B" },
];

const App = () => {
  return (
    <>
      <Layout>
        <h1>Color pallete for your next design</h1>
        <p>Choose the best color-design for your application</p>
        <div className="pallete-container">
          <ColorPicker options={colorOptionsDarkMode} title={"Dark mode"} />
          <ColorPicker options={colorPickerOption1} title={"Design option 1"} />
          <ColorPicker options={colorPickerOption2} title={"Design option 2"} />
          <ColorPicker options={colorPickerOption3} title={"Design option 3"} />
          <ColorPicker options={colorPickerOption4} title={"Design option 4"} />
          <ColorPicker options={colorPickerOption5} title={"Design option 5"} />
          <ColorPicker options={colorPickerOption6} title={"Design option 6"} />
          <ColorPicker options={colorPickerOption7} title={"Design option 7"} />
          <ColorPicker options={colorPickerOption8} title={"Design option 8"} />
        </div>
      </Layout>
    </>
  );
};

export default App;
