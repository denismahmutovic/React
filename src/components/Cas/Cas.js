import React from "react";
import { useState, useEffect } from "react";

const Cas = () => {
  const lista = [{ title: "", body: "" }];
  const [array, SetArray] = useState(lista);
  const [resourcrType, setResourceType] = useState("");
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?fbclid=IwAR0M7oB8YRbtvjmQmidNoUPVG9fZ--O_BOFvApPyMrYOOOMn2mTtVjz8m8k/`
    )
      .then((response) => response.json())
      .then((json) => SetArray(json));
  }, []);
  return (
    <div>
      {/* <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button> */}
      <h1>{resourcrType}</h1>
      <h1>titl</h1>
      {array.map((value) => {
        <Cas
          key={value.id}
          name={value.title}
          onChange={(e) =>
            SetArray((prev) => ({ ...prev, title: e.target.value }))
          }
        ></Cas>;
        // return <p>{JSON.stringify(value.title)}</p>;
      })}
      {array.map((value) => {
        <Cas
          key={value.id}
          name={value.body}
          onChange={(e) =>
            SetArray((prev) => ({ ...prev, title: e.target.value }))
          }
        ></Cas>;
        return (
          <h3>
            <p>TITLE: {value.title}</p>
            Description:
            {value.body}
          </h3>
        );
      })}

      {/* {items.map((item) => {
        return <pre>{JSON.stringify(item.title)}</pre>;
      })} */}
    </div>
  );
  // [] component mid mount
}; // componedidmonte (spremna za rad)
// };                                                      sitedefeket pozicanje servera

export default Cas;

// getPost da uzmemo podatke da sacucamo da mapramo  za PostItem title Descriptoon
