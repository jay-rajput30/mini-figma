import "./styles.css";
import { useState } from "react";
import SampleDisplay from "./components/SampleDisplay";

export default function App() {
  let [figmaStyle, setfigmaStyle] = useState({
    size: 8,
    heading: "Oswald",
    text: "Roboto"
  });

  //click handler for setting style
  const clickHandler = (e) => {
    e.preventDefauult();

    const handleHeading = (e) => {
      console.log(e);
    };
  };
  return (
    <div className="container">
      <h1>Mini Figma</h1>
      <div class="figma">
        <form className="figma-form">
          <div className="form-field">
            <label for="size-selector">select font size: </label>
            <select className="size-selector" name="size-selector">
              <option>8 px</option>
              <option>16 px</option>
              <option>24 px</option>
              <option>32 px</option>
            </select>
          </div>
          <div className="form-field">
            <label for="heading-selector">select heading font: </label>
            <select
              onSelect={handleHeading}
              className="heading-selector"
              name="heading-selector"
            >
              {/* <option></option> */}
              <option>Oswald</option>
              <option>Merriweather</option>
              <option>Nunito Sans</option>
            </select>
          </div>
          <div className="form-field">
            <label for="text-selector">select text font: </label>
            <select className="text-selector" name="text-selector">
              <option>Roboto</option>
              <option>Poppins</option>
              <option>Open Sans</option>
            </select>
          </div>
          <button className="set-btn" onClick={clickHandler}>
            set
          </button>
          <SampleDisplay />
        </form>
      </div>
    </div>
  );
}
