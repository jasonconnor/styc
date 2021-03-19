import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Grid, makeStyles, Button } from '@material-ui/core'
import routeDict from './RouteDict'

export default function Header() {
  // Get current route
  const route = useLocation().pathname;

  // Returns the header color based on current route
  const getHeaderColor = () => {    
    // If the route key exists
    if (Object.keys(routeDict).includes(route)) {
      return routeDict[route]
    } else { // route key does not exist
      return 'white'
    }
  }

  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    header: {
      position: 'absolute',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      background: getHeaderColor()
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