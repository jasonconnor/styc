import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeComponent from "components/home/HomeComponent";

export default function Root() {
  return (
    <div>
      {/* ROUTER */}
      <Router>

        {/* ROUTES */}
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
          </Switch>
        
        </Router>
    </div>
  );
}
