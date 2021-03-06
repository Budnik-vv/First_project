import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Menu from "./components/menu";

import AboutPage from "./pages/About";
import HistoryPage from "./pages/History";
import NewsPage from "./pages/News";


function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/history">
            <HistoryPage/>
          </Route>
          <Route path="/news">
            <NewsPage/>
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
