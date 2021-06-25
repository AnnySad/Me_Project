import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routes from './components/Routes.';
import Header from './components/Header';

function App() {
  return (
      <div className="App">
        {/*в gh-pages лучше работает HashRouter*/}

        <h1>1111</h1>
        <HashRouter>

          <Header/>

          <Routes/>

        </HashRouter>
    </div>
  );
}

export default App;
