import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
