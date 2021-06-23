import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Details from "../details/Details";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/details" exact component={Details} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
