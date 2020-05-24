import React from "react";
import "./Card.scss";
import { useSpring, animated } from "react-spring";

export const Card = ({ card }) => {
  const { id, name, color, price, image } = card;
  const interp = (i) => (r) =>
    `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  return (
    <div className="card">
      <div className="card__image">
        <animated.div
          key={id}
          className="script-bf-box"
          style={{
            transform: radians.interpolate(
              interp(1 + Math.random() * (10 + 1 - 1))
            ),
          }}
        >
          <img src={image} alt={name + color + id}></img>
        </animated.div>
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
