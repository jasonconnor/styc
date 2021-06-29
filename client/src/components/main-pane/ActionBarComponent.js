import React from 'react';
import { Button, ButtonGroup, Grid,  LinearProgress  } from '@material-ui/core'
import { connect } from 'react-redux';
import './ActionBarComponent.css'

class ActionBarComponent extends React.Component {
    killedEnemy = () => {
        this.props.dispatch({ type: "KilledEnemy" })
    }

    drinkPotion = () => {
        this.props.dispatch({ type:"DrinkPotion" })
    }

    getHit = () => {
        this.props.dispatch({ type:"GetHit" })
    }

    render() {
        return (
            <Grid item
                xs={12}
                container
                alignItems="center"
                justify="space-around"
                className='actionBarRoot'>
                <Grid item container justify="center" sm={12} md={5} py={3}>
                    <Grid item
                        xs={12}
                        container
                        justify="center">
                        <LinearProgress
                            variant="determinate"
                            value={this.props.health / this.props.healthMax * 100}
                            className='healthBar'
                            />
                    </Grid>
                    <Grid item
                        xs={12}
                        container
                        justify="center">
                        {this.props.health} / {this.props.healthMax}
                    </Grid>
                </Grid>
                <Grid item container justify="center" sm={12} md>
                    <ButtonGroup>
                        <Button size="large" variant="contained"
                            color="primary"
                            className='gameButton'
                            onClick={this.killedEnemy}>
                            🏹
                        </Button>
                        <Button size="large" variant="contained"
                            color="primary"
                            className='gameButton'
                            onClick={this.getHit}>
                            🏃‍♂️
                        </Button>
                        <Button size="large" variant="contained"
                            color="primary"
                            className='gameButton'
                            onClick={this.drinkPotion}>
                            💉
                        </Button>
                        <Button size="large" variant="outlined"
                            color="primary"
                            disabled
                            className='potionLabel'>
                            <div className='potionLabelUpper'>
                                Potions
                            </div>
                            <div className='potionLabelLower'>
                                x{14}
                            </div>
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item container justify="center" sm={12} md>
                    <ButtonGroup width="100%">
                        <Button variant="contained"
                            color="primary"
                            className='gameButton'>
                            🙍‍♂️
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className='gameButton'>
                            🥇
                        </Button>
                        <Button variant="contained"
                            color="primary"
                            className='gameButton'>
                            🔧
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    health: state.health,
    healthMax: state.healthMax
});

export default connect(mapStateToProps)(ActionBarComponent);