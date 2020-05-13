import React, { Component } from "react";

import "./Main.scss";

// rooter

// components
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Loader from "../Loader/Loader";

class Main extends Component {
  render() {
    return (
      <main id="home">
        <Header></Header>
        <Hero></Hero>
      </main>
    );
  }
}

export default Main;
