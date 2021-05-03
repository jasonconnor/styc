import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'

export default function DialogComponent() {
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
                <Grid item>
                    Dialog Component Works!
                </Grid>
            </Grid>
        </React.Fragment>
    );
}