import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import Green from '@material-ui/core/colors/green'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: Green[200],
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Grid container justify="center" className={classes.root}>
          <span>&copy; 2021 styc men</span>
      </Grid>
  )
}