import React, { Component } from "react";
import "./Main.scss";

// components
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

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
