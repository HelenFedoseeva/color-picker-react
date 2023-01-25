import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  }


  render() {
     return (<div className="ColorPicker">
      <h2 className="ColorPicker__title">The HEX format of the color is:</h2>
      <div className="colorPicker__container">
         {this.props.options.map(({ label, color }, index) => {
           const optionClasses = ["ColorPicker__option"];

           if (index === this.state.activeOptionIdx) {
             optionClasses.push("ColorPicker__active")
           }
           
          return (
            <button
              key={label}
              className={optionClasses.join(' ')}
              style={{
                background: color,
              }}
            ></button>
          );
        })}
      </div>
    </div>)
   }

  ;
};

export default ColorPicker;
