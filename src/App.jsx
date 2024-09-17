import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data/data.js";
import Card from "../components/card/Card.jsx";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <header className="pageHeader">
        <img src="./globe.png" />
        <span>my travel journal.</span>
      </header>
      <div style={{ padding: "45px 40px 28px" }}>{cards}</div>
    </div>
  );
}

export default App;
