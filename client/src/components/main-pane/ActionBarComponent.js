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
            border: '5px solid grey',
            height: 'max-content'
        },
        healthBarContainer: {
            padding: '5px 0'
        },
        healthBar: {
            width: '80%',
            padding: '5px 0'
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
                <Grid item container justify="center" sm={12} md={5} py={3}>
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
                <Grid item container justify="center" sm={12} md>
                    <ButtonGroup>
                        <Button size="large" variant="contained"
                            color="primary"
                            className={classes.gameButton}
                            onClick={killedEnemy}>
                            🏹
                        </Button>
                        <Button size="large" variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            🏃‍♂️
                        </Button>
                        <Button size="large" variant="contained"
                            color="primary"
                            className={classes.gameButton}>
                            💉
                        </Button>
                        <Button size="large" variant="outlined"
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
                <Grid item container justify="center" sm={12} md>
                    <ButtonGroup width="100%">
                        <Button variant="contained"
                            color="primary"
                            className={classes.gameButton}
                            >
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