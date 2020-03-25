import React from "react";
import "./App.css";
import WebinarDefault from "./User/pages/main pages/WebinarDefault";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./User/pages/static pages/About";
import PeopleTap from "./User/pages/main pages/PeopleTap";
import AccountDefault from "./User/pages/authentication/AccountDefault";

const App: React.Fc= ()=> {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/people" exact component={PeopleTap} />
            <Route path="/account" exact component={AccountDefault} />
            <Route path="/" exact component={WebinarDefault} />
          </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;
