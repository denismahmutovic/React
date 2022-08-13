import React from "react";
import "./Card.css";

export const Card = ({
  image,
  name,
  occcupation,
  verification,
  offvefication,
}) => {
  return (
    <div className="card">
      <img src={image} alt="Slika" height={300} width={300} />
      <div className="container">
        <b>{name}</b>
        <h4></h4>
        <h3 className="admin">{verification && "✔"}</h3>
        <p>
          {occcupation} {offvefication && "❌"}
        </p>
      </div>
    </div>
  );
};
