import React from "react";
import { useState } from "react";
import { sculptureList } from "./Data";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let sculpture = sculptureList[index];

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   return (
//     <>
//       <button onClick={() => setIndex((prev) => prev + 1)}>next</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length} )
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? `hide` : "show"}detals
//       </button>
//       {showMore && <p>{sculpture.name}</p>}
//       <img src={sculpture.url} alt="photo" /> <br></br>
//       <p>{sculpture.description}</p>
//     </>
//   );
// }

const NextClick = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sclupture = sculptureList[index];
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <>
      <button
        disabled={index === 11}
        onClick={() => setIndex((prev) => prev + 1)}
      >
        next
      </button>
      <h1>{sclupture.name}</h1>
      <span>{sclupture.artist}</span>({index + 1} of {sculptureList.length})
      <button onClick={handleMoreClick}>
        {showMore ? `hide` : `show`} detals
      </button>
      {showMore && <p>{sclupture.description}</p>}
      <img src={sclupture.url} alt="photo" />
    </>
  );
};
export default NextClick;
