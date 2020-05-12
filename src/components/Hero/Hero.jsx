import React, { Component } from "react";
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h2 className="hero__subtitle">
          <em id="color">//</em> welcome in my portfolio <span>🐉</span>
        </h2>
        <p className="hero__title">
          MY NAME IS{" "}
          <em id="me" id="color">
            MAEVA WOLFF
          </em>
          <br />I AM A <em id="color">DEVELOPER? DESIGNER?</em>
          <br /> MY ASTRO SIGN IS <em id="color">ARIES</em>
        </p>
        <p className="hero__bonus">(AND I LOVE DRAGONS...)</p>
      </section>
    );
  }
}

export default Hero;
