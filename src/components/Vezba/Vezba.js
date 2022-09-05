// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const BASE_URL = "https://api.quotable.io";
// export const Vezba = () => {
//   const [author, setAuthors] = useState([]);
//   const [Paganation, setPagination] = useState({});
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   function getAuthors(page) {
//     setLoading(true);
//     try {
//       axios
//         .get(`${BASE_URL}/authors?sortBy=quoteCont&page=${page}&limit=15`)
//         .then((res) => {
//           console.log(res.data);
//           setPagination({
//             page: res.data.page,
//             lastPage: res.data.totalPages,
//           });
//           setAuthors(res.data.results);
//         });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     getAuthors(page);
//   }, [page]);
//   return (
//     <div>
//       <button onClick={() => setPage((prev) => prev + 1)}>next</button>
//       page {Paganation.page} / {Paganation.lastPage}
//       {!loading ? (
//         <div>
//           {author.map((el) => (
//             <div>
//               <p>{el.name}</p>
//               <p>{el.bio}</p>
//               <h3>{el.discription}</h3>
//               <p>dd</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

const BASE_URL = "https://api.quotable.io";

export default function Vezba() {
  const [image, setImage] = useState([]);
  function getQuote() {
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCount`)
      .then((res) => setImage(res.data.results));
  }
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="card-container">
      <Button variant="contained">Hello World</Button>;
      {image.map((el) => (
        <div>
          <p>{el.id}</p>
          <p>{el.name}</p>
          <img src="{el.image}" />

          <hr />
        </div>
      ))}
    </div>
  );
}
