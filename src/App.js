import React, { Fragment } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <div id="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
