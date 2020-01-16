import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Layout from "./views/Layout";
import PageNotFound from "./views/NotFound";
import Home from "./views/Home";
import Play from "./views/Play";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/play" component={Play} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);
