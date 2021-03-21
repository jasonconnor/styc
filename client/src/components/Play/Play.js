import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'
/* Harness:
import Play from 'components/play/Play';

<Route exact path='/play' component={Play} />
*/

/**
 * Play page component.
 */
export default function Play() {
  
  // ~ MUI ~
  const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: blueGrey[100],
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
        <Grid item>
            <label>Play page stuff</label>
        </Grid>
    </Grid>
  )
}