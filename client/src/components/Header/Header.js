import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root:{
    position: 'absolute',
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
          <Link to='/'><Button><h2>Slash til You Crash</h2></Button></Link>
        </Grid>
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        <Grid item>
          <Button><h4>Login</h4></Button>
        </Grid>
      </Grid>
    </Grid>
  )
}