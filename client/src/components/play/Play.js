import React, { useState } from 'react';
import { Grid, makeStyles, ButtonGroup, Button } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'
/* Harness:
import Play from 'components/play/Play';

<Route exact path='/play' component={Play} />
*/

const gameStateEnum = {
  '0': "Main Menu",
  '1': "Combat",
  '2': "Post Combat"
}

const buttonMessages = {
  '0': {
    'A': 'Start Game'
  },
  '1': {
    'A': 'Attack',
    'D': 'Drink Potion',
    'F': 'Flee'
  },
  '2': {
    'A': 'Continue',
    'D': 'Buy Potion',
    'F': 'Quit'
  }
}

/**
 * Play page component.
 */
export default function Play() {
  let [gameLog, updateLog] = useState(["Beginning of Log"]);
  const [gameState, setGameState] = useState(0);
  
  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: blueGrey[100],
    },
  }));

  const classes = useStyles();

  const changeGameState = () => {
    let newState = (gameState + 1) % 3;
    addToLog(`change state to ${gameStateEnum[newState]}`);
    setGameState(newState);
  }

  const addToLog = (text) => {
    let timeStamp = new Date();
    gameLog.push(`${timeStamp.toTimeString().substring(0,8)}: Pressed ${text} button.`);

    updateLog(gameLog);
  }

  return (
    <Grid container justify="center" alignItems="center" spacing={3} className={classes.root}>
      <Grid item>
        <label>Game State: {gameStateEnum[gameState]}</label>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          {buttonMessages[gameState]?.A != null && <Button onClick={_ => addToLog(buttonMessages[gameState].A)}>{buttonMessages[gameState].A}</Button>}
          {buttonMessages[gameState]?.D != null && <Button onClick={_ => addToLog(buttonMessages[gameState].D)}>{buttonMessages[gameState].D}</Button>}
          {buttonMessages[gameState]?.F != null && <Button onClick={_ => addToLog(buttonMessages[gameState].F)}>{buttonMessages[gameState].F}</Button>}
          <Button onClick={_ => changeGameState()}>Change Game State</Button>
        </ButtonGroup>
      </Grid>
      {/* <Grid item>
        Some Words Here
      </Grid> */}
      <ul>
        {gameLog.map((textLine, i) => <li key={i}>{textLine}</li>)}
      </ul>
    </Grid>
  )
}