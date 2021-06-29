import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Root from './Root';

// need to get from db
const initialState = {
  enemiesDefeated: 0,
  potionPotency: 4,
  gold: 0,
  health: 10,
  healthMax: 10
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "KilledEnemy":
      return {
        enemiesDefeated: state.enemiesDefeated + 1,
        potionPotency: Math.ceil(((state.potionPotency + 2) / (state.potionPotency) / 2.5) + state.potionPotency),
        gold: state.gold + 25,
        healthMax: state.healthMax + Math.floor((state.healthMax + 2) * .1),
        health: state.health,
      }
    case "DrinkPotion":
      return {
        enemiesDefeated: state.enemiesDefeated,
        potionPotency: state.potionPotency,
        gold: state.gold,
        healthMax: state.healthMax,
        health: Math.min(state.health + state.potionPotency, state.healthMax)
      }
    case "GetHit":
      return {
        enemiesDefeated: state.enemiesDefeated,
        potionPotency: state.potionPotency,
        gold: state.gold,
        healthMax: state.healthMax,
        health: Math.max(state.health - 3, 0)
      }
    default:
      return state
  }
}

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Allows for tracking store in devtools

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);