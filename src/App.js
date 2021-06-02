import "./App.css";
import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Overlay from "./Overlay";
import Sections from "./Sections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Slides from "./Slides";
import { Season1, Season2, Season3, Season4, Season5 } from "./Seasons/";

function App() {
  return (
    <div className="App">
      <Router>
        <Overlay />
        <MenuBar />
        <Switch>
          <Slides exact path="/" />
          <Season1 path="/season1" />
          <Season2 path="/season2" />
          <Season3 path="/season3" />
          <Season4 path="/season4" />
          <Season5 path="/season5" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
