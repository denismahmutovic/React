import React from "react";
import "./Card.css";

export const Card = ({ image, name, occcupation, verification }) => {
  return (
    <div className="card">
      <img src={image} alt="Slika" height={200} width={200} />
      <div className="container">
        <b>{name}</b>
        <h4>
          {name} {verification && "✔"}
        </h4>
        <p>{occcupation}</p>
      </div>
    </div>
  );
};
