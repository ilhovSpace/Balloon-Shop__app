import React from "react";
import "./Card.scss";

export const Card = ({ card }) => {
  const { id, name, color, price, image } = card;
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={name + color + id}></img>
      </div>
      <div className="card__info">
        <p className="card__info_name">Balloon</p>
        <p className="card__info_color">Color: {color}</p>
        <p className="card__info_price">Price: {price} UAH</p>
      </div>
      <div className="card__action">
        <button className="card__action_add">Add to cart</button>
      </div>
    </div>
  );
};
