import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';

import './Navigation.scss'

export const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__top">
        <div className="nav__top__menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="nav__top__cart">
          <Link to="/cart">Cart <ShoppingCartOutlined /></Link>
          <span className="nav__top__cart_count">3</span>
        </div>
      </div>
      <div className="nav__center">
        <div className="nav__center__logo">Logo</div>
      </div>
      <div className="nav__bottom">
        <div></div>
      </div>
    </div>
  );
};
