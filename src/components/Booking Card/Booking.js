import React from "react";
import "./Booking.css";

const Booking = ({
  image,
  ocena,
  recenzija,
  deskripcija,
  naziv,
  lokacija,
  km,
}) => {
  return (
    <div className="container">
      <img className="img" src={image} alt={"Slika hotela"} />
      <div className="hero">
        <h1 className="naslov">{naziv}</h1>
        <p className="under">{lokacija}</p>
        <p className="km">{km} </p>
        <p className="text">{deskripcija}</p>
      </div>
      <div className="buttons">
        <p className="dobar">
          Dobar<span className="ocena">{ocena}</span>
        </p>
        <p className="under2"> {recenzija} recenzije</p>
        <button className="button">Prikazi cene</button>
      </div>
    </div>
  );
};

export default Booking;
