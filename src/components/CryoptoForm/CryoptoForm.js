import React from "react";
import { useState } from "react";
import CryptoList from "./CryptoListItem/CryoptoList/CryptoList";
import CryptoListItem from "./CryptoListItem/CryptoListItem";
import "./CryoptoForm.css";
const Lista = [
  { id: 0, name: " Bitcoin", value: "21,400.99" },
  { id: 1, name: " Ethereum", value: "1,624.20" },
  { id: 2, name: "Tether", value: "1.00" },
  { id: 3, name: "USD", value: "1.00" },
  { id: 4, name: "BNB", value: "297.80" },
  { id: 5, name: "Binance", value: "1.00" },
  { id: 6, name: "XRP", value: "0.337385" },
  { id: 7, name: "Cardano", value: "0.454453" },
  { id: 8, name: "Solana", value: "34.93" },
  { id: 9, name: "Dai", value: "0.999960" },
];

const CryoptoForm = () => {
  const [array, SetArray] = useState(Lista);
  const [showMore, setShowMore] = useState();
  const [nameValue, setnameValue] = useState({
    name: "",
    value: "",
  });

  const BtnAdd = (e) => {
    e.preventDefault();

    SetArray((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2, 7),
        name: nameValue.name,
        value: nameValue.value,
      },
    ]);
  };

  const deletebtn = (id) => {
    const newList = array.filter((value) => value.id !== id);
    SetArray(newList);
  };

  return (
    <div className="glavni">
      <img className="logo" src="https://i.postimg.cc/rmbTYwF4/logo.png" />
      <form className="form">
        <label htmlFor="CryptoName"></label>
        <input
          type="text"
          name="CryptoName"
          placeholder="Crypto Name"
          value={nameValue.name}
          onChange={(e) =>
            setnameValue((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="CryptoValue"></label>
        <input
          type="number"
          name="CryptoValue"
          placeholder="Crypto Value"
          value={nameValue.value}
          //
          onChange={(e) =>
            setnameValue((prev) => ({
              ...prev,
              value: e.target.value,
            }))
          }
        ></input>

        <button className="btn" onClick={BtnAdd}>
          ADD
        </button>
      </form>

      {array.map((value) => (
        <CryptoListItem
          key={value.id}
          name={value.name}
          value={value.value}
          showMore={() =>
            setShowMore((prev) => {
              if (prev === value.id) {
                return null;
              } else {
                return value.id;
              }
            })
          }
          showAll={showMore === value.id}
          deleteCrypto={() => deletebtn(value.id)}
        />
      ))}
    </div>
  );
};

export default CryoptoForm;
