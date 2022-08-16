import React from "react";
import "./Title.css";
import { Increment } from "./Increments/Increment";

const Title = ({ name, age, clickHandler }) => {
  return (
    <>
      <h3 onClick={clickHandler}></h3>; /
    </>
  );
};

export default Title;
