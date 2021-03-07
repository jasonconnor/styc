import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LoginForm from './components/Forms/LoginForm';

export default function Root() {
  return (
    <div>

      <Router> 
        {/* HEADER */}
        <Header />

        {/* ROUTES */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={LoginForm} />
        </Switch>

        {/* FOOTER */}
        <Footer />

      </Router>

    </div>
  );
}