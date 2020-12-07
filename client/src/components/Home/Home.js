import React from 'react'

import { makeStyles, Grid, Typography } from "@material-ui/core"



export default function Home() {
    const useStyles = makeStyles(theme => ({
        homeBody: {

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            margin: 15,

            background: 'white'
        }
    }));

    const classes = useStyles();

  return (
    <div className={classes.homeBody}>
        <h1>Home</h1>

    </div>
  )
}