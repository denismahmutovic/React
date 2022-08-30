import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.quotable.io";

const Paganation = () => {
  const [authors, setAuthors] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  //   function getQuote(){
  //     axios
  //     .get(`${BASE_URL}/random`)
  //     .then((res)=> console.log(res.data))
  //   }

  function getAuthors(page) {
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCont&page=${page}&limit=15`)
      .then((res) => {
        console.log(res.data);
        setPagination({
          page: res.data.page,
          lastPage: res.data.totalPages,
        });
        setAuthors(res.data.results);
      });
  }

  useEffect(() => {
    getAuthors(page);
    console.log(getAuthors);
  }, [page]);
  return (
    <div className="card-name">
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      page {pagination.page} / {pagination.lastPage}
      {authors.length > 0 ? (
        authors.map((el) => (
          <div>
            <p>{el.id}</p>
            <p>{el.name}</p>
            <h3>{el.bio}</h3>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Paganation;
