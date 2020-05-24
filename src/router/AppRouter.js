import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, Cart } from "../components/Pages/";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default AppRouter;
