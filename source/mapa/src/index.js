import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import imagen from "./images/Map.JPG";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Mapa() {
  function Imagen() {
    return (
      <div>
        <img src={imagen} alt="Descripción de la imagen" />
      </div>
    );
  }

  function RadioButtons() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value="1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="options"
            value="2"
            checked={selectedOption === "2"}
            onChange={handleOptionChange}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="options"
            value="3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          3
        </label>
      </div>
    );
  }
  return(
    <div>
      <Imagen/>
      <RadioButtons/>
    </div>
  );
}

root.render(<Mapa />);
