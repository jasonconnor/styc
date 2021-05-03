import React from 'react';
import { Button, ButtonGroup, Grid, makeStyles, LinearProgress  } from '@material-ui/core'
import { useGameStats, useGameStatsUpdate } from 'contexts/GameContext';

export default function ActionBarComponent() {
    let gameStats = useGameStats();

    const killedEnemy = useGameStatsUpdate({
        enemiesDefeated: 1,
        gold: 20,
        health: 3,
        healthMax: 3,
        strength: 1,
        dexterity: 1,
        luck: 0.03,
    });

    // ~ MUI ~
    const useStyles = makeStyles(theme => ({
        root: {
            borderTop: '5px solid grey',
            height: 'max-content'
        },
        healthBar: {
            width: '80%'
        },
        gameButton: {
            fontSize: '1.5em',
        },
        potionLabel: {
            display: 'block',
        },
        potionLabelUpper: {
            fontSize: '.6em',
        },
        potionLabelLower: {
            fontSize: '1em',
            color: 'black',
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item
                xs={12}
                container
                alignItems="center"
                justify="space-around"
                className={classes.root}>
                <Grid item container xs={4}>
                    <Grid item
                        xs={12}
                        container
                        justify="center">
                        <LinearProgress
                            variant="determinate"
                            value={100}
                            className={classes.healthBar} />
                    </Grid>
                    <Grid item
                        xs={12}
                        container
                        justify="center">
                        {gameStats.health} / {gameStats.healthMax}
                    </Grid>
                </Grid>
                <Grid item container xs={4}>
                    <ButtonGroup>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}
                            onClick={killedEnemy}>
                            🏹
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            🏃‍♂️
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            💉
                        </Button>
                        <Button variant="outlined"
                            color="primary"
                            disabled
                            className={classes.potionLabel}>
                            <div className={classes.potionLabelUpper}>
                                Potions
                            </div>
                            <div className={classes.potionLabelLower}>
                                x{14}
                            </div>
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item container justify="flex-end" xs={4}>
                    <ButtonGroup>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            🙍‍♂️
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            🥇
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            🔧
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}