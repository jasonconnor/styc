import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import { useGameStats } from 'contexts/GameContext';


export default function StatsComponent() {
    const gameStats = useGameStats();

    const useStyles = makeStyles(theme => ({
        paneStats: {
            height: 'calc(100% - 1.5em)',
            '& h1': {textAlign: 'center'},
        },
        paneFooter: {
            height: '1.5em',
            textAlign: 'center',
        },
    }));
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item
                className={classes.paneStats}
                xs={12}>
                <h1>Statistics</h1>
                <div>Enemies Executed: <span>{gameStats.enemiesDefeated}</span></div>
                <div>Potion Potency: <span>{gameStats.potionPotency}</span></div>
                <div>Gold Gathered: <span>{gameStats.gold}</span></div>
            </Grid>
            <Grid item 
                className={classes.paneFooter}
                xs={12}>
                <span>
                    2021 styc men - <a href='https://github.com/jasonconnor/styc' target="_blank">STYC GitHub Reposity</a>
                </span>
            </Grid>
        </React.Fragment>
    );
}