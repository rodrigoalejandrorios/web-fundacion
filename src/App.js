import React from "react";
import "./estilos.css";
import AppPublic from "./View/AppPublic";
import Login from "./View/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <AppPublic />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
