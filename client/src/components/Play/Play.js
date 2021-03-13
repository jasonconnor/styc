import { Grid, makeStyles } from '@material-ui/core'
import React from 'react';
import { blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
      minHeight: '100vh',
      backgroundColor: blueGrey[100],
  },
}));

export default function Play() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
        <Grid item>
            <label>Play page stuff</label>
        </Grid>
    </Grid>
  )
}