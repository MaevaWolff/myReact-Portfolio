import React, { Component, useState } from "react";

import "./Main.scss";

// rooter

// components
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Loader from "../Loader/Loader";

function Main() {
  const [main, isVisible] = useState(false);

  setTimeout(() => {
    isVisible(!main);
  }, 3000);

  return (
    <main id="home" className={`${main ? "visible " : ""}`}>
      <Header></Header>
      <Hero></Hero>
    </main>
  );
}

export default Main;
