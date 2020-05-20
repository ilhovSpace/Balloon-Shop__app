import React, { useState, useEffect } from "react";
import { CartItem } from "./CartItem";

import "./Cart.scss";

const data = [
  {
    id: 1,
    count: 3,
    name: "Balloon",
    color: "Green",
    image: "http://ilhov.space/balloonshop/green.png",
    price: 3,
  },
  {
    id: 2,
    count: 2,
    name: "Balloon",
    color: "Red",
    image: "http://ilhov.space/balloonshop/red.png",
    price: 4,
  },
  {
    id: 3,
    count: 7,
    name: "Balloon",
    color: "Blue",
    image: "http://ilhov.space/balloonshop/blue.png",
    price: 2,
  },
  {
    id: 4,
    count: 3,
    name: "Balloon",
    color: "Pink",
    image: "http://ilhov.space/balloonshop/pink.png",
    price: 3,
  },
  {
    id: 5,
    count: 5,
    name: "Balloon",
    color: "Yellow",
    image: "http://ilhov.space/balloonshop/yellow.png",
    price: 2,
  },
];

export const Cart = () => {
  const [cart, setCart] = useState([...data]);
  const [total, setTotal] = useState(0);

  const handleClick = (type, id) => {
    if (type === "minus") {
      setCart(
        cart.map((item) => {
          if (item.id === id && item.count > 1) {
            item.count -= 1;
          }
          return item;
        })
      );
    }
    if (type === "plus") {
      setCart(
        cart.map((item) => {
          if (item.id === id && item.count < 200) {
            item.count += 1;
          }
          return item;
        })
      );
    }
    if (type === "delete") {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, cv) => acc + cv.count * cv.price, 0));
  }, [cart]);
  return (
    <>
      {!cart.length ? (
        <div className="cart">Nothing yet</div>
      ) : (
        <>
          <div className="cart">
            <div className="cart__list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} action={handleClick} />
              ))}
            </div>
          </div>
          <div className="cart__total">
            <p>Total Price: {total} UAH</p>
          </div>
        </>
      )}
    </>
  );
};
