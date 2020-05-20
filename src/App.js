import React from "react";
import AppRouter from "./router/AppRouter";
import { Navigation } from "./components/UI";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
