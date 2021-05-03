import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeComponent from "components/home/HomeComponent";
import { GameStatsProvider } from "contexts/GameContext";

export default function Root() {
  return (
    <div>
      {/* ROUTER */}
      <Router>

        <GameStatsProvider>
        {/* ROUTES */}
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
          </Switch>
        </GameStatsProvider>
        
        </Router>
    </div>
  );
}
