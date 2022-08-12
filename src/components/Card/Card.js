import React from "react";
import "./Card.css";

export const Card = ({ image, name, occcupation }) => {
  return (
    <div className="card">
      <img src={image} alt="Slika" height={200} width={200} />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{occcupation}</p>
      </div>
    </div>
  );
};
