import React from "react";
import { Route, Router } from "react-router-dom";
import Terminos from "../components/terminos.html";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/terminos" component={Terminos}></Route>;
      </Router>
    );
  }
}

export default App;
