import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root:{
    // position: 'absolute', -- Temporary Change
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export default function Home() {
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
          <Button><Link to='/login'>Login</Link></Button>
        </Grid>
      </Grid>
    </Grid>
  )
}