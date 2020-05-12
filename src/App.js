import React from "react";
import "./App.css";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/works"} component={Works}></Route>
          <Route exact path={"/about"} component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
