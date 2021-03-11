import React from 'react';
import { useLocation } from 'react-router-dom'
import { Grid, makeStyles, Button } from '@material-ui/core'
import headerBackgroundColor from './HeaderBgColor'


export default function Home() {
  // This retrieves the route of our current page through useLocation().
  // Accessed by headerBackgroundColor()
  const location = useLocation();
  const route = location.pathname

  // MUI
  const useStyles = makeStyles(theme => ({
    root:{
      position: 'absolute',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      // Here we use our imported function from HeaderBgColor.js to get
      // our header background color based off of the current route (location.path).
      background: headerBackgroundColor(route)
    },
  }));
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between" className={classes.root}>
      <Grid container item xs={6} justify="flex-start">
        <Grid item>
          <h2>Slash til You Crash</h2>
        </Grid>
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        <Grid item>
          <Button href={'/login'}>
            <h4>Login</h4>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}