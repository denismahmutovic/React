import React from "react";
import "./CryptoListItem.css";

const Border = ({ name, value, deleteCrypto }) => {
  return (
    <div className="border">
      <div className="podela">
        <p>{name}</p>
        <p>${value} </p>
        <p></p>
        <img
          className="grafikon"
          src={"https://static.coinstats.app/sparks/binance-usd_1w.png"}
          alt="11"
        />
        <button className="btn" onClick={deleteCrypto}>
          X
        </button>
      </div>
    </div>
  );
};
export default Border;
