import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';
import Play from './components/Play/Play';

function Root() {
  return (
    <div>
      <Router>

        {/* HEADER */}
        <Header />

        {/* ROUTES */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/play' component={Play} />
          </Switch>

        {/* FOOTER */}
        <Footer />
        
        </Router>
    </div>
  );
}

export default Root;

