import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import StatsComponent from 'components/right-pane/StatsComponent';
import MainPaneComponent from 'components/main-pane/MainPaneComponent';

/* Harness:
import Home from "components/home/Home";

<Route exact path='/' component={Home}/>
*/

/**
 * Home page component.
 */
export default function HomeComponent() {  
    // ~ MUI ~
    const useStyles = makeStyles(theme => ({
        root: {
            minHeight: '100vh',
        },
        leftPane: {
            height: '100%',
        },
        rightPane: {
            height: '100%',
            borderLeft: '5px solid grey',
        }
    }));

  const classes = useStyles();

  return (
      <Grid container
            className={classes.root}>
            <Grid item
                xs={9}>
                <Grid container
                    className={classes.leftPane}
                    alignContent="space-between">
                    <MainPaneComponent />
                </Grid>
            </Grid>
            <Grid item
              xs={3}>
              <Grid container
                    className={classes.rightPane}>
                    <StatsComponent />
              </Grid>
          </Grid>
      </Grid>
  )
}