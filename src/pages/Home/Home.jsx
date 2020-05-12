import React, { Component } from "react";

// components
import Main from "../../components/Main/Main";
import Loader from "../../components/Loader/Loader";

class Home extends Component {
  render() {
    return (
      <div>
        <Loader></Loader>
        <Main></Main>
      </div>
    );
  }
}

export default Home;
