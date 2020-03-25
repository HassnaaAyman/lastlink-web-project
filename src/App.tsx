import React from "react";
import "./App.css";
import WebinarDefault from "./User/pages/profile/WebinarDefault";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./User/pages/profile/About";

const App: React.Fc<{}> = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App-Container">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={WebinarDefault} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
