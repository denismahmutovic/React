import React from "react";

const Increment = () => {
  const [count, setCount] = React.useState(0);
  // const minus = () => {
  //   setCount((prev) => prev - 1);
  // };

  // const handleClick = () => {
  //   setCount((prev) => prev + 1);
  // };
  return (
    <>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Plus +</button>
      <button
        disabled={count === 0}
        onClick={() => setCount((prev) => prev - 1)}
      >
        minus -
      </button>
    </>
  );
};
export default Increment;

// state props ///

// import React from "react";

// export const Increment = ({ ll }) => {
//   return (
//     <>
//       <p onClick={ll}></p>
//     </>
//   );
// };
