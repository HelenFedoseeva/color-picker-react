import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 5,
  }

  setActiveIdx = (index) => {
    this.setState({activeOptionIdx: index})
  }

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

           if (index === this.state.activeOptionIdx) {
             optionClasses.push("ColorPicker__active")
    }
    
    return optionClasses.join(' ')
           
  }

  render() {
    const {color} = this.props.options[this.state.activeOptionIdx];


     return (<div className="ColorPicker">
       <h2 className="ColorPicker__title">The HEX format of the color is: <span>{ color }</span></h2>
      <div className="colorPicker__container">
         {this.props.options.map(({ label, color }, index) => {
         
          return (
            <button
              key={label}
              className={ this.makeOptionClassName(index) }
              style={{
                background: color,
              }}
              onClick={()=> this.setActiveIdx(index)}
            ></button>
          );
         })}
         
      </div>
    </div>)
   }

  ;
};

export default ColorPicker;
