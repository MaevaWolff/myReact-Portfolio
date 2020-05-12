import React, { Component } from "react";

import "./Loader.scss";
import Typical from "react-typical";

class Loader extends Component {
  render() {
    return (
      <div className="loader visible">
        <svg
          width="894"
          height="250"
          viewBox="0 0 894 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M156.65,23.99c8.85,7.1,14.57,16.7,17.17,28.8h-27.15c-2-4.9-5.08-8.75-9.23-11.55
              c-4.15-2.8-9.08-4.2-14.77-4.2c-7.5,0-13.55,2.75-18.15,8.25c-4.6,5.5-6.9,12.85-6.9,22.05c0,9.2,2.3,16.53,6.9,21.98
              c4.6,5.45,10.65,8.17,18.15,8.17c5.7,0,10.62-1.4,14.77-4.2c4.15-2.8,7.22-6.6,9.23-11.4h27.15c-2.6,12-8.33,21.58-17.17,28.72
              c-8.85,7.15-20.03,10.73-33.53,10.73c-10.3,0-19.35-2.27-27.15-6.82c-7.8-4.55-13.83-10.92-18.07-19.13
              c-4.25-8.2-6.38-17.55-6.38-28.05s2.12-19.85,6.38-28.05c4.25-8.2,10.27-14.57,18.07-19.13c7.8-4.55,16.85-6.83,27.15-6.83
              C136.62,13.34,147.8,16.89,156.65,23.99z"
          />
          <path
            d="M242.67,120.44l-22.95-40.05h-5.85v40.05h-25.65V14.39h43.8c8.4,0,15.5,1.45,21.3,4.35
             c5.8,2.9,10.15,6.88,13.05,11.93c2.9,5.05,4.35,10.83,4.35,17.32c0,7.7-2.13,14.25-6.38,19.65c-4.25,5.4-10.43,9.1-18.52,11.1
             l25.2,41.7H242.67z M213.87,62.84h15.9c5.1,0,8.85-1.13,11.25-3.38s3.6-5.57,3.6-9.98c0-4.2-1.23-7.5-3.67-9.9
             c-2.45-2.4-6.18-3.6-11.18-3.6h-15.9V62.84z"
          />
          <path d="M309.27,34.79v22.2h35.85v19.35h-35.85v23.55h40.35v20.55h-66V14.39h66v20.4H309.27z" />
          <path
            d="M429.87,101.09h-39.75l-6.6,19.35h-27l38.85-105.3h29.55l38.85,105.3h-27.3L429.87,101.09z M423.27,81.59
             l-13.2-39l-13.35,39H423.27z"
          />
          <path d="M549.87,14.39v20.4h-28.8v85.65h-25.8V34.79h-28.5v-20.4H549.87z" />
          <path d="M586.31,14.39v106.05h-25.65V14.39H586.31z" />
          <path d="M623.81,14.39l25.95,79.8l25.95-79.8h27.45l-36.9,106.05h-33.15L596.36,14.39H623.81z" />
          <path d="M738.71,34.79v22.2h35.85v19.35h-35.85v23.55h40.35v20.55h-66V14.39h66v20.4H738.71z" />
          <path
            d="M103.4,219.87c-4.45,8.05-10.85,14.33-19.2,18.83c-8.35,4.5-18.18,6.75-29.48,6.75H14.67V139.39h40.05
             c11.4,0,21.25,2.2,29.55,6.6c8.3,4.4,14.67,10.6,19.13,18.6c4.45,8,6.67,17.2,6.67,27.6C110.07,202.59,107.85,211.82,103.4,219.87z
              M75.8,214.54c5.55-5.3,8.32-12.75,8.32-22.35s-2.77-17.05-8.32-22.35c-5.55-5.3-13.33-7.95-23.33-7.95H40.32v60.6h12.15
             C62.47,222.49,70.25,219.84,75.8,214.54z"
          />
          <path d="M150.27,159.79v22.2h35.85v19.35h-35.85v23.55h40.35v20.55h-66V139.39h66v20.4H150.27z" />
          <path d="M224.97,139.39l25.95,79.8l25.95-79.8h27.45l-36.9,106.05h-33.15l-36.75-106.05H224.97z" />
          <path d="M339.87,159.79v22.2h35.85v19.35h-35.85v23.55h40.35v20.55h-66V139.39h66v20.4H339.87z" />
          <path d="M420.42,225.79h34.2v19.65h-59.85V139.39h25.65V225.79z" />
          <path
            d="M544.09,144.72c8.15,4.65,14.57,11.1,19.27,19.35c4.7,8.25,7.05,17.58,7.05,27.98
             c0,10.4-2.38,19.75-7.13,28.05c-4.75,8.3-11.2,14.77-19.35,19.42c-8.15,4.65-17.18,6.97-27.08,6.97c-9.9,0-18.93-2.32-27.07-6.97
             c-8.15-4.65-14.6-11.12-19.35-19.42c-4.75-8.3-7.13-17.65-7.13-28.05c0-10.4,2.37-19.73,7.13-27.98
             c4.75-8.25,11.2-14.7,19.35-19.35c8.15-4.65,17.17-6.98,27.07-6.98C526.86,137.74,535.94,140.07,544.09,144.72z M496.84,169.77
             c-4.95,5.45-7.42,12.88-7.42,22.27c0,9.3,2.47,16.7,7.42,22.2c4.95,5.5,11.63,8.25,20.02,8.25c8.3,0,14.95-2.75,19.95-8.25
             c5-5.5,7.5-12.9,7.5-22.2c0-9.3-2.48-16.7-7.43-22.2c-4.95-5.5-11.63-8.25-20.03-8.25C508.47,161.59,501.79,164.32,496.84,169.77z"
          />
          <path
            d="M610.46,208.24v37.2h-25.65V139.39h41.55c12.6,0,22.2,3.13,28.8,9.38c6.6,6.25,9.9,14.68,9.9,25.27
             c0,6.6-1.48,12.48-4.43,17.63c-2.95,5.15-7.33,9.2-13.13,12.15c-5.8,2.95-12.85,4.42-21.15,4.42H610.46z M638.96,174.04
             c0-9.3-5.15-13.95-15.45-13.95h-13.05v27.6h13.05C633.81,187.69,638.96,183.14,638.96,174.04z"
          />
          <path d="M703.31,159.79v22.2h35.85v19.35h-35.85v23.55h40.35v20.55h-66V139.39h66v20.4H703.31z" />
          <path
            d="M812.66,245.44l-22.95-40.05h-5.85v40.05h-25.65V139.39h43.8c8.4,0,15.5,1.45,21.3,4.35
             c5.8,2.9,10.15,6.88,13.05,11.93c2.9,5.05,4.35,10.83,4.35,17.32c0,7.7-2.13,14.25-6.38,19.65c-4.25,5.4-10.42,9.1-18.52,11.1
             l25.2,41.7H812.66z M783.86,187.84h15.9c5.1,0,8.85-1.13,11.25-3.38c2.4-2.25,3.6-5.57,3.6-9.98c0-4.2-1.23-7.5-3.67-9.9
             c-2.45-2.4-6.18-3.6-11.17-3.6h-15.9V187.84z"
          />
        </svg>

        <Typical
          steps={["Maëva WOLFF - Portfolio 2020", 2000]}
          wrapper="p"
          className="loader__typing"
        />
      </div>
    );
  }
}

export default Loader;
