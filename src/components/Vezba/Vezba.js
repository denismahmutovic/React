import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.quotable.io";
export const Vezba = () => {
  const [author, setAuthors] = useState([]);
  const [Paganation, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  function getAuthors(page) {
    setLoading(true);
    try {
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
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAuthors(page);
  }, [page]);
  return (
    <div>
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      page {Paganation.page} / {Paganation.lastPage}
      {!loading ? (
        <div>
          {author.map((el) => (
            <div>
              <p>{el.name}</p>
              <p>{el.bio}</p>
              <h3>{el.discription}</h3>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
