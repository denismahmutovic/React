import React from "react";
import "./App.css";
import Booking from "./components/Booking Card/Booking";
import { Card } from "./components/Card/Card";

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

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

const Toolbar = () => {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
};
export default Toolbar;
