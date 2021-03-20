import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { HeaderRouteDict } from 'models/route-dictionary/RouteDict';

/* Harness: 
import Header from "components/shared/header/Header";

<Header />
*/

/**
 * Header Page Component
 */
export default function Header() {
  // Get current route
  const route = useLocation().pathname;

  /**
   * Get the specified background color depending on path.
   * @returns string - css background-color, (default) 'white'
   */
  const getHeaderBackgroundColor = () => {   
    return Object.keys(HeaderRouteDict).includes(route)
      // If the current path is defined in the dictionary
      ? HeaderRouteDict[route].BGColor
      // path is not defined in the route dictionary
      : 'white';
  }

  /**
   * Get the specified position value depending on path.
   * @returns string - css position, (default) 'inherit'
   */
   const getHeaderPosition = () => {
    return Object.keys(HeaderRouteDict).includes(route)
      //if the current path is defined in the dictionary  
      ? HeaderRouteDict[route].Position
      // path is not defined in the route dictionary
      : 'inherit';
  }

  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    header: {
      position: getHeaderPosition(),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      background: getHeaderBackgroundColor()
    },

    link: {
      textDecoration: 'none', 
      fontWeight: 'bold', 
      color:'black',
    },
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