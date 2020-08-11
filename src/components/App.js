import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Main} />
        <Route path="/movie/:id" component={Detail} />
      </BrowserRouter>
    </div>
  );
};

export default App;
