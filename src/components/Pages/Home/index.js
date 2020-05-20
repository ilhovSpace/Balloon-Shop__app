import React from "react";
import { Card } from "./Card";

import "./Home.scss";

const data = [
  {
    id: 1,
    name: "Balloon",
    color: "Green",
    image: "http://ilhov.space/balloonshop/green.png",
    price: 3,
  },
  {
    id: 2,
    name: "Balloon",
    color: "Red",
    image: "http://ilhov.space/balloonshop/red.png",
    price: 4,
  },
  {
    id: 3,
    name: "Balloon",
    color: "Blue",
    image: "http://ilhov.space/balloonshop/blue.png",
    price: 2,
  },
  {
    id: 4,
    name: "Balloon",
    color: "Pink",
    image: "http://ilhov.space/balloonshop/pink.png",
    price: 3,
  },
  {
    id: 5,
    name: "Balloon",
    color: "Yellow",
    image: "http://ilhov.space/balloonshop/yellow.png",
    price: 2,
  },
  {
    id: 6,
    name: "Balloon",
    color: "Viotel",
    image: "http://ilhov.space/balloonshop/violet.png",
    price: 3,
  },
];

export const Home = () => {
  return (
    <div className="home__block">
      {data.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  );
};
