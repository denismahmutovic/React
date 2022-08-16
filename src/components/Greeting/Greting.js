import React from "react";
import Title from "../Title";
// const Greting = ({ name, children, fontSize, hadlePerentClick }) => {
//   const SayWelcome = (name) => {
//     alert(`welcome ${name}`);
//   };

//   return (
//     <>
//       {children}

//       <h3
//         style={{
//           color: "red",
//           fontSize: fontSize,
//           textDecoration: "underline",
//         }}
//         onClick={() => SayWelcome(name)}
//       >
//         Hello,{name}
//       </h3>
//       <p>how are you</p>
//       <button onClick={hadlePerentClick}>Child components</button>
//     </>
//   );
// };
// export default Greting;

// Pritiskom na text da iskoci Alert sa imenon

const Greeting = ({ name, handleParentClick }) => {
  const SayWelcome = (name) => {
    alert(`hello${name}`);
  };

  return (
    <>
      <h4 onClick={() => SayWelcome(name)}>Hello{name} </h4> <br></br>
    </>
  );
};
export default Greeting;
