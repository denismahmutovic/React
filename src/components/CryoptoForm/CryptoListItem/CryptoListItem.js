import React from "react";
import "./CryptoListItem.css";

const CryptoListItem = ({
  name,
  value,
  deleteCrypto,
  tabela,
  showMore,
  showAll,
}) => {
  return (
    <div className="border">
      <div className="podela">
        <p>{name}</p>
        <p>$ {value}</p>
        <p className="tabela">{tabela}↓2.41%</p>
        <img
          className="grafikon"
          src={"https://static.coinstats.app/sparks/frax_1w.png"}
          alt="11"
        />
        <button
          onMouseEnter={showMore}
          className="btn"
          onClick={() => showMore()}
        >
          {!showAll ? "Show More" : "Show less"}
        </button>
        <button className="btn" onClick={deleteCrypto}>
          X
        </button>
      </div>
      {showAll && (
        <div className="">
          <p className="showMore">
            Cijena {name} je pala za 6,52% u posljednjih 7 dana. Cijena je
            porasla za 0,93% u posljednja 24 sata. U samo proteklih sat vremena
            cijena je porasla za 0,07%. Trenutna cena je {value}
          </p>
        </div>
      )}
    </div>
  );
};

// return (
//     <div className="border">
//       <div className="podela">
//         <p> {name}</p>
//         <p className="bela"> ${value} </p>

//         <button
//           className="btn-show-more"
//           <button className="btn2" onClick={() => showMore()}
//           <button
//         >
//           {!showMore ? "Show More" : "Show less"}
//         </button>
//         {showMore && (
//           <div>
//             <p className="flex">jedan {name}</p>
//           </div>
//         )}
//         <p className="tabela">{tabela}↓2.41%</p>
//         <img
//           className="grafikon"
//           src={"https://static.coinstats.app/sparks/frax_1w.png"}
//           alt="11"
//         />
//         <button className="btn-delete" onClick={deleteCrypto}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };
export default CryptoListItem;
