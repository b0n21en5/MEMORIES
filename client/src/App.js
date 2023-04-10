import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  <BrowserRouter>
    <Container maxidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/auth" exact Component={Auth} />
      </Switch>
      <Home />
    </Container>
  </BrowserRouter>;
};

export default App;
