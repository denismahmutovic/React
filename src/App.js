import React from "react";
import "./App.css";
import Booking from "./components/Booking Card/Booking";
import { Card } from "./components/Card/Card";

const App = () => {
  return (
    // <div className="card-container">
    //   <Card
    //     image={"https://www.w3schools.com/howto/img_avatar.png"}
    //     name="Joe Dop"
    //     occcupation="Softer ingener"
    //   ></Card>

    //   <Card
    //     image={"https://www.w3schools.com/howto/img_avatar2.png"}
    //     name="Laura Mamati"
    //     occcupation="Softer ingener"
    //   />
    //   <Card
    //     image={
    //       "https://cdn4.iconfinder.com/data/icons/people-2-5/36/164-512.png"
    //     }
    //     name="Laura Mamati"
    //     occcupation="Softer ingener"
    //   />
    <>
      <Booking
        image={
          "https://t-cf.bstatic.com/xdata/images/hotel/square600/71426844.webp?k=fe5ffd67b7cbb2caeb054ec5c135bd81a0f7b038ec545874f1b007db9b1f2cc9&o=&s=1"
        }
        ocena="7,6"
        ocenaLokacije=""
        deskripcija="Objekat u programu 
        Smešten u Zemunu, na 5,9 km od centra Beograda, hotel Theater nudi elegantne i udobne sobe sa besplatnim bežičnim internetom, bar u foajeu i terasu."
        naziv="Hotel Theater Garni"
        lokacija="Zemun, Beograd • Prikaži na mapi "
        recenzija={"160"}
        km={"8.1 km od centra"}
      ></Booking>
      <Booking
        image={
          "https://t-cf.bstatic.com/xdata/images/hotel/square600/308827778.webp?k=d7c1a8449b415c87c5574cf17084a40731f73cb018f4c5de5f84daf357d0a614&o=&s=1"
        }
        ocena="8.7"
        deskripcija="Objekat Gardenn je smešten u Beogradu, na 8 km od splavova. Nudi restoran, besplatan privatni parking, bar i vrt."
        naziv="Gardenn"
        lokacija="Palilula, Beograd •  Prikaži na mapi"
        recenzija={"53"}
        km="5.3 km od centra"
      />
      <Booking
        image={
          "https://t-cf.bstatic.com/xdata/images/hotel/square600/274699724.webp?k=1b9f6aeea68ad57bc06b1e705ef975008b64afa388c763db9321714c1f3665fb&o=&s=1"
        }
        deskripcija="Elegance je moderan poslovni hotel u blizini Pančevačkog mosta. Nalazi se na 8 km od centra Beograda i predstavlja sjajan izbor kako za poslovne putnike, tako i za turiste."
        naziv="Hotel Elegance"
        lokacija="Palilula, Beograd • Prikaži na mapi"
        ocena={"8.6"}
        recenzija="1 280"
        km="5,3 km od centra"
      />
    </>
  );
};

export default App;
