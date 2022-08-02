import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Stats from "./components/Stats";

const App = () => {
  return (
    <main className="container">
      <Balance />
      <Stats />
    </main>
  );
};

export default App;
