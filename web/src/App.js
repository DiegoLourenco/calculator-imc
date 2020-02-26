import React from "react";
import "./App.css";

import Routes from "./routes";

export default function App() {
  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}
