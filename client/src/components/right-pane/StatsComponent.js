import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux'; 
import './StatsComponent.css';

class StatsComponent extends React.Component {
    render() {
        return (
            <div>
                <Grid item
                    className='paneStats'
                    xs={12}>
                    <h1>Statistics</h1>
                    <div>Enemies Executed: <span>{this.props.enemiesDefeated}</span></div>
                    <div>Potion Potency: <span>{this.props.potionPotency}</span></div>
                    <div>Gold Gathered: <span>{this.props.gold}</span></div>
                </Grid>
                <Grid item
                    className='paneFooter'
                    xs={12}>
                    <span>
                        2021 styc men - <a href='https://github.com/jasonconnor/styc' target="_blank">STYC GitHub Reposity</a>
                    </span>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    enemiesDefeated: state.enemiesDefeated,
    potionPotency: state.potionPotency,
    gold: state.gold,
});

export default connect(mapStateToProps)(StatsComponent);