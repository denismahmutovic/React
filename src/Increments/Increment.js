import React from "react";

const Increment = () => {
  const [count, setCount] = React.useState(0);
  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      {count}
      <button onClick={handleClick}>Plus</button>
      <button onClick={minus} disabled={count === 0}>
        Minus
      </button>
    </>
  );
};
export default Increment;
