import React from "react";
import "./App.css";
import WebinarDefault from "./WebinarDefault";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./static pages/About";
import PeopleTap from "./PeopleTap";
import AccountDefault from "./User/pages/authentication/AccountDefault";

const App: React.FC = () => {
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
