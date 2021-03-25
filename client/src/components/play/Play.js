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
    
  },
  '1': {

  },
  '2': {

  }
}

/**
 * Play page component.
 */
export default function Play() {
  const [gameState, setGameState] = useState(0);
  
  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: blueGrey[100],
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={3} className={classes.root}>
      <Grid item>
        <label>Game State: {gameStateEnum[gameState]}</label>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={_ => setGameState(0)}>Game State 0</Button>
          <Button onClick={_ => setGameState(1)}>Game State 1</Button>
          <Button onClick={_ => setGameState(2)}>Game State 2</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        Some Words Here
      </Grid>
    </Grid>
  )
}