import React from "react";
import "./CryptoListItem.css";
import { useState } from "react";

const CryptoListItem = ({ name, value, deleteCrypto, tabela }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="border">
      <div className="podela">
        <p> {name}</p>
        <p className="bela"> ${value} </p>

        <button
          className="btn-show-more"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {!showMore ? "Show More" : "Show less"}
        </button>
        {showMore && (
          <div>
            <p className="flex">
              Bitcoin price is $21,106.73 , down 1.93% in the last 24 hours, and
              the live market cap is $403.7B . It has a circulating supply
              volume of 19,128,931 BTC coins and a max. Supply volume of
              21,000,000 BTC alongside $403.7B 24h trading volume. The addresses
              and transactions of Bitcoin can be explored in
              https://www.oklink.com/btc?hmsr=CS_BTC and {name}
            </p>
          </div>
        )}
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
