import React from "react";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./CartItem.scss";

export const CartItem = ({ item, action }) => {
  const { id, color, price, count } = item;

  return (
    <div className="cart-item">
      <p>Color: {color}</p>
      <p>
        {count} x <span className="price">{price} UAH</span>
      </p>
      <div className="cart-item__action">
        <button className="minus" onClick={() => action("minus", id)}>
          <MinusCircleOutlined />
        </button>
        <button className="plus" onClick={() => action("plus", id)}>
          <PlusCircleOutlined />
        </button>
        <button className="delete" onClick={() => action("delete", id)}>
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};
