import React from "react";
import AppRouter from "./router/AppRouter";
import { Navigation } from "./components/UI";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navigation />
        <AppRouter></AppRouter>
      </div>
    </div>
  );
}

export default App;
