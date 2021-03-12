import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginForm from './components/Forms/LoginForm';

function Root() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
      </Router>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Root();
