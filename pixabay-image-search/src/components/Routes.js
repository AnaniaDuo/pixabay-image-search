import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SingleImage from "./SingleImage";
import About from "./About";

function Routes() {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/images/:id" component={SingleImage} />
        </Switch>
      </main>
    </Router>
  );
}

export default Routes;
