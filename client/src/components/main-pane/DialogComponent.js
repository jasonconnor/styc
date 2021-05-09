import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import GameSrv from 'services/GameService';

export default function DialogComponent() {
    const [enemies, setEnemies] = useState([{Name: "Loading Enemies"}]);

    useEffect(_ => {
        GameSrv.GetEnemies().then(enem => setEnemies(enem));
    }, [])

    // ~ MUI ~
    const useStyles = makeStyles(theme => ({
        root: {
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item
                xs={12}
                container
                className={classes.root}>
                {enemies.map((enemy, key) => {
                    return (
                    <Grid item key={"enemy" + key}>
                        {enemy.Name}: {enemy.HP}
                    </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
}