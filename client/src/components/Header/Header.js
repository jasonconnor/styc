import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Grid, makeStyles, Button } from '@material-ui/core'
import routeDict from './RouteDict'

export default function Header() {
  // ~ Background Color Change ~
  // This retrieves the route of our current page through useLocation().
  // Accessed by headerBackgroundColor()
  const location = useLocation();
  const route = location.pathname

  // This function takes in a route and returns its background color
  // value located in routeDict.
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

    link: {
      textDecoration: 'none', 
      fontWeight: 'bold', 
      color:'black',
    }
  }));
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="space-between" className={classes.header}>
      <Grid container item xs={6} justify="flex-start">
        <Grid item>
          <Link to='/'><Button><h2>Slash til You Crash</h2></Button></Link>
        </Grid>
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        <Grid item>
          <Button>
            <Link to='/login' className={classes.link}>
              Login
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}