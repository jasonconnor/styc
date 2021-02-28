import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';

function Root() {
  return (
    <div>

        {/* HEADER */}
        <Header />

        {/* ROUTES */}
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>

        {/* FOOTER */}
        <Footer />

    </div>
  );
}

export default Root;

