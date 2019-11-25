import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect } from "react-router-dom";

import EmployeeTable from "./EmployeeTable.js";
import Nav from "./Nav.js";
const rootEl = document.querySelector("#root");

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div id="main-container">
        <HashRouter>
          <h1>ACME pager</h1>
          <Redirect exact from="/" to="/0" />
          <Route component={Nav} />
          <Route component={EmployeeTable} />
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootEl);
