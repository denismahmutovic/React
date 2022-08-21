import React from "react";
import { useState } from "react";
import CryptoList from "./CryptoListItem/CryoptoList/CryptoList";
import Border from "./CryptoListItem/CryptoListItem";
import "./CryoptoForm.css";
const Lista = [
  { name: "Bitcoin", value: "21,400.99" },
  { name: "Ethereum", value: "1,624.20" },
];

const CryoptoForm = () => {
  const [array, SetArray] = useState(Lista);
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

  const deleteBtn = (id) => {
    const newCryptoList = array.filter((value) => value.id !== id);
    SetArray(newCryptoList);
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
      {/* {array.map((value) => (
        <CryptoList
          key={value.id}
          name={value.name}
          value={value.value}
          deleteCrypto={() => deleteCrypto(value.id)}
        />
      ))} */}
      {array.map((value) => (
        <Border
          key={value.id}
          name={value.name}
          value={value.value}
          deleteCrypto={() => deleteBtn(value.id)}
        />
      ))}
    </div>
  );
};

export default CryoptoForm;
