import React from "react";
import "./App.css";
import DataTablePage from "./components/DataTablePage.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-3">Employee Directory</h1>
          <p className="lead">Human Resources</p>
        </div>
        <nav className="navbar navbar-light bg-light text-center">
          <h3>Employee Search</h3>
        </nav>
        <DataTablePage />
      </div>
    );
  }
}

export default App;
