import React from "react";

const Greting = ({ name, children, fontSize, handleClick }) => {
  const SayWelcome = (name) => {
    alert(`welcome ${name}`);
  };

  return (
    <>
      {children}

      {/* <h3
        style={{
          color: "red",
          fontSize: fontSize,
          textDecoration: "underline",
        }}
        onClick={() => SayWelcome(name)}
      >
        Hello,{name}
      </h3>
      <p>how are you</p> */}
      <button onClick={handleClick}>Child components</button>
    </>
  );
};
export default Greting;
