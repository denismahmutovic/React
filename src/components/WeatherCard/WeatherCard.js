import React, { useState } from "react";

import "./WeatherCard.css";

const WeatherCard = () => {
  const [weather, setWeather] = useState(20);

  const [desk, setDesk] = useState("");

  const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 55) - 10;
    setWeather(randomNumber);
    let backgroundColor = "";

    if (randomNumber < 4) {
      backgroundColor = "#00CCFF";
      setDesk("Smrzavanje!");
    } else if (randomNumber > 23) {
      backgroundColor = "#FF0000";
      setDesk("Ne izlazi na sunce");
    } else {
      backgroundColor = "#ffc0cb";
      setDesk("");
    }
    document.getElementsByTagName("body")[0].style.backgroundColor =
      backgroundColor;
  };

  return (
    <>
      <div className="container">
        <p className="number">{weather}°</p>

        <button
          className="btn"
          onClick={() => changeColor(() => setWeather(-20, 40))}
        >
          Change temp
        </button>
      </div>
      <div className="desk">{desk}</div>
    </>
  );
};

export default WeatherCard;
