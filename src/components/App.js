import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Navigation />
        <Route path="/" exact={true} component={Main} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
      <Route />
      <Main />
    </div>
  );
};

export default App;
