import React from "react";
import "./Title.css";
import { Increment } from "./Increments/Increment";

// const Title = ({ name, age, clickHandler }) => {
//   return (
//     <>
//       <h3 onClick={clickHandler}></h3>;
//     </>
//   );
// };

// export default Title;

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

const Title = () => {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
};
export default Title;
