import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'

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