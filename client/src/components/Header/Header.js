import React from 'react';
import { useLocation } from 'react-router-dom'
import { Grid, makeStyles, Button } from '@material-ui/core'

export default function Home() {

  // ~ Background Color Change ~
  // This retrieves the route of our current page through useLocation().
  // Accessed by headerBackgroundColor()
  const location = useLocation();
  const route = location.pathname

  // Dictionary of our routes and corresponding background colors. 
  // Accessed by headerBackgroundColor()
  const routeDict = {
    '/' : 'rgba(0,0,0,0.2)',
    '/login' : 'white'
  }

  // This function takes in a route and returns its background color
  // value located in routeDict.
  // Accessed by Header.js
  const headerBackgroundColor = (route) => {
    // Here we check to see if the passed in route is a key in routeDict
    // If the route key exists, we return its value
    if (Object.keys(routeDict).includes(route)) {
      return routeDict[route]
    } else {
      // If the route key does not exist, then we return white
      return 'white'
    }
  }

  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    header: {
      position: 'absolute',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      // Here we use our function headerBackgroundColor() to get
      // our header background color based off of the current route (location.path).
      background: headerBackgroundColor(route)
    },
  }));
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between" className={classes.header}>
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