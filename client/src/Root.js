import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "components/shared/header/Header";
import Footer from "components/shared/footer/Footer";
import Home from "components/home/Home";
import Play from 'components/play/Play';
import LoginForm from 'components/login/login-form/LoginForm';
import RegistrationForm from 'components/registration/registration-form/RegistrationForm';

export default function Root() {
  return (
    <div>
      {/* ROUTER */}
      <Router>

        {/* HEADER */}
        <Header />

        {/* ROUTES */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/play' component={Play} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={RegistrationForm} />
          </Switch>

        {/* FOOTER */}
        <Footer />
        
      </Router>
    </div>
  );
}
