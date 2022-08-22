import React from "react";
import "./CryptoListItem.css";
// const [showMore, setshowMore] = React.useState(false);
const CryptoListItem = ({ name, value, deleteCrypto, tabela }) => {
  return (
    <div className="border">
      <div className="podela">
        <p> {name}</p>
        <p className="bela"> ${value} </p>
        {/* <button onClick={() => setshowMore((prev) => !prev)}>
          {!showMore ? "show More" : "show lesss"}
        </button> */}
        <p className="tabela">{tabela}↓2.41%</p>
        <img
          className="grafikon"
          src={"https://static.coinstats.app/sparks/frax_1w.png"}
          alt="11"
        />
        <button className="btn-delete" onClick={deleteCrypto}>
          X
        </button>
      </div>
    </div>
  );
};
export default CryptoListItem;
