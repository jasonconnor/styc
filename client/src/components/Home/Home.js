import { makeStyles } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 120px)',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>Home page stuff</div>
  )
}