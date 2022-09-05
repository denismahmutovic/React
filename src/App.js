import React, { useState } from "react";
import "./App.css";
// import Booking from "./components/Booking Card/Booking";
// import { Card } from "./components/Card/Card";
// import Greting from "./components/Greeting/Greting";
// import Increment from "./components/Increments/Increment";
// import Title from "./components/Title";
// import SlideClick from "./components/SlideClick/NextClick";
// import Input from "./components/Input/Input";
// import Team from "./components/Team/Team";
// import CryoptoForm from "./components/CryoptoForm/CryoptoForm";
// import CryptoList from "./components/CryoptoForm/CryptoListItem/CryoptoList/CryptoList";
// import WeatherCard from "./components/WeatherCard/WeatherCard";
// import Cas from "./components/Cas/Cas";
// import PostList from "./components/PostsList/PostList";

import axios from "axios";

import Paganation from "./components/Paganation/Paganation";
import Vezba from "./components/Vezba/Vezba";
import { Material } from "./components/Material/Material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// const App = () => {
//   return (
//     <div className="card-container">
//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar.png"}
//         name="Joe Dop"
//         occcupation="Softer ingener"
//         verification
//       ></Card>

//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar2.png"}
//         name="Laura Mamati"
//         occcupation="Softer ingener"
//         verification={true}
//       />
//       <Card
//         image={
//           "https://cdn4.iconfinder.com/data/icons/people-2-5/36/164-512.png"
//         }
//         name="Laura Mamati"
//         occcupation="Softer ingener"
//         offvefication
//       />
//     </div>
//   );
// };

//       <Booking
//         image={
//           "https://t-cf.bstatic.com/xdata/images/hotel/square600/71426844.webp?k=fe5ffd67b7cbb2caeb054ec5c135bd81a0f7b038ec545874f1b007db9b1f2cc9&o=&s=1"
//         }
//         ocena="7,6"
//         ocenaLokacije=""
//         deskripcija="Objekat u programu
//         Smešten u Zemunu, na 5,9 km od centra Beograda, hotel Theater nudi elegantne i udobne sobe sa besplatnim bežičnim internetom, bar u foajeu i terasu."
//         naziv="Hotel Theater Garni"
//         lokacija="Zemun, Beograd • Prikaži na mapi "
//         recenzija={"160"}
//         km={"8.1 km od centra"}
//       ></Booking>
//       <Booking
//         image={
//           "https://t-cf.bstatic.com/xdata/images/hotel/square600/308827778.webp?k=d7c1a8449b415c87c5574cf17084a40731f73cb018f4c5de5f84daf357d0a614&o=&s=1"
//         }
//         ocena="8.7"
//         deskripcija="Objekat Gardenn je smešten u Beogradu, na 8 km od splavova. Nudi restoran, besplatan privatni parking, bar i vrt."
//         naziv="Gardenn"
//         lokacija="Palilula, Beograd •  Prikaži na mapi"
//         recenzija={"53"}
//         km="5.3 km od centra"
//       />
//       <Booking
//         image={
//           "https://t-cf.bstatic.com/xdata/images/hotel/square600/274699724.webp?k=1b9f6aeea68ad57bc06b1e705ef975008b64afa388c763db9321714c1f3665fb&o=&s=1"
//         }
//         deskripcija="Elegance je moderan poslovni hotel u blizini Pančevačkog mosta. Nalazi se na 8 km od centra Beograda i predstavlja sjajan izbor kako za poslovne putnike, tako i za turiste."
//         naziv="Hotel Elegance"
//         lokacija="Palilula, Beograd • Prikaži na mapi"
//         ocena={"8.6"}
//         recenzija="1 280"
//         km="5,3 km od centra"
//       />
//     </>
//   );
// };

// const App = () => {
//   return
// };

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// const Hotels = [
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     naziv: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     deskripcija:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 9.2,
//     location: 8.9,
//     km: 6.2,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     naziv: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     deskripcija:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 9.2,
//     location: 8.9,
//     km: 8.2,
//   },

//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     naziv: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     deskripcija:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     km: 9.2,
//     lokacija: 8.9,
//   },
// ];

// const App = () => {
//   const welRatedhotels = Hotels.filter((el) => el.recenzije > 7.5);
//   return (
//     <div className="card-container">
//       {welRatedhotels.map((hotel, index) => (
//         <Booking
//           key={index}
//           image={hotel.image}
//           naziv={hotel.naziv}
//           km={hotel.km}
//           lokacija={hotel.lokacija}
//           deskripcija={hotel.deskripcija}
//           recenzija={hotel.recenzije}
//         />
//       ))}
//     </div>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("playing")}
//       onUploadimage={() => alert("upload")}
//     />
//   );
// };

// function Toolbar({ onPlayMovie, onUploadimage }) {
//   return (
//     <div>
//       <button onClick={onPlayMovie}>onPlayMovie</button>
//       <button onClick={onUploadimage}>onUpload image</button>
//     </div>
//   );
// }

// export default App;

// function Button({ onClick, children }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// const Toolbar = () => {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         alert("You clicked on the toolbar!");
//       }}
//     >
//       <Button onClick={() => alert("Playing!")}>Play Movie</Button>
//       <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// };
// export default Toolbar;

// const App = () => {
//   // const [count, setCount] = React.useState(0);
//   // const handleClick = () => {
//   //   alert("Ova se funkcija nalazi u App.js");
//   // };
//   // return (
//   //   <div className="card-container">
//   //     {" "}
//   //     {/* <button onClick={() => SayHello("John")}>Click me </button>
//   //     {count} */}
//   //     {/* <button onClick={handleClick}>click</button> */}
//   //     {/* <Greting name={"denis"} />
//   //     <Greting name={"Aldin"} />
//   //     <Title />
//   //     <Increment /> */}
//   //     <SlideClick />
//   //   </div>
//   // );
// };
// export default App;

// export default function App() {
// const [name, setName] = React.useState("");
// const [email, setEmail] = React.useState("");
// const [hobi, setHobi] = React.useState("");
// const [password, setPassword] = useState("");

// export default function App() {
//   return (
//     <div>
//       <Input />
//     </div>
//   );
// }

// const DATA = [
//   "prva ucionica",
//   "druga ucionica",
//   "Treca ucionica",
//   "Cettvra ucuonica",
//   ".....",
//   "stota ucionica",
// ];

// const App = () => {
//   const [array, SetArray] = React.useState(DATA);
//   const generateNewWord = () => Math.random().toString(36).slice(2, 7);

//   /// KOPIJA NIZA

//   const reverseArray = () => {
//     const _array = [...array];
//     const reversed = _array.reverse();
//     SetArray(reversed);
//   };

//   return (
//     <div className="card-container">

//       <button onClick={() => SetArray((prev) => [generateNewWord(), ...prev])}>
//         Dodaj random recenicu
//       </button>
//       <button onClick={reverseArray}>Reserve Recenica</button>
//       <ul>
//         {array.map((el) => (
//           <li key={el}>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;

// const favoriteTeams = [
//   { id: 0, name: "Aresenal", points: 6 },
//   { id: 1, name: "Man City", points: 6 },
//   { id: 2, name: "Man United", points: 2 },
//   { id: 3, name: "Liverpol", points: 9 },
//   { id: 4, name: "Real", points: 5 },
// ];

// const App = () => {
//   const [teams, setTeams] = React.useState(favoriteTeams);
// const deleteTeam = (id) => {
//   const newTeams = teams.filter((team) => team.id != id);
//   setTeams(newTeams);
// };

//   return (
//     <div className="Team-cart">
//       <button
//         onClick={() =>
//           setTeams((prev) => [
//             ...prev,
//             { id: Math.random(), name: "novi", points: "" },
//           ])
//         }
//       >
//     dodaj novi tim
//   </button>
//   {teams.map((team) => (
//     <div key={team.id}>
//       <Team
//         name={team.name}
//         points={team.points}
//         onDeleteTeam={() => deleteTeam(team.id)}
//       />
//     </div>
//   ))}
// </div>
//   );
// };
// export default App;

// export default function App() {
//   // return <CryoptoForm></CryoptoForm>;
//   return <Fetch />;
// }

// const BASE_URL = "https://api.quotable.io";

// export default function App() {
//   const [authors, setAuthors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pagination, setPagination] = useState({});
//   const [page, setPage] = useState(1);

//   function getAuthors(page) {
//     setLoading(true);
//     try {
//       axios
//         .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
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
//     <div className="card-container">
//       Page {pagination.page} / {pagination.lastPage}
//       <button onClick={() => setPage((prev) => prev + 1)}>Next page </button>
//       {!loading ? (
//         <div>
//           {authors.map((author) => (
//             <div key={author._id}>
//               <h4>{author.name}</h4>
//               <h5>{author.description}</h5>
//               <p>{author.bio}</p>
//               <p>Quoute count: {author.quoteCount}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
//paginacija

function App() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="outlined" color="secondary">
          Hello World
        </Button>
        <Button disabled>Disabled</Button>
      </Box>
    </div>
  );
}
export default App;
