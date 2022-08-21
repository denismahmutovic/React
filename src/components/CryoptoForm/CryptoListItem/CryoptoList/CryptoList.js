import React from "react";
import "./CryptoList.css";

const CryptoList = ({ name, value, deleteCrypto }) => {
  return (
    <div className="crypto-list">
      <p>{name}</p>
      <p>$ {value}</p>
      <button className="btn" onClick={deleteCrypto}>
        X
      </button>
    </div>
  );
};

export default CryptoList;
