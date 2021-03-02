import React from 'react';
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/images/jumbobg.png'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
  },
  jumbo: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  section2: {
    minHeight: '50vh',
    backgroundColor: amber[200],
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Jumbotron */}
      <Grid container className={classes.jumbo}>
        <Grid container item justify="center" alignItems="center">
          <Link to='/play'>
            <Button size="large" variant="contained" color="primary">
              Play
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid container justify="center" alignItems="center" className={classes.section2}>
        <Grid item xs={8}>
          <Typography variant="h6">
            STYC is an endless-horde, hack-n-slash adventure game where you are trying to rip through as many enemies as you can before you fall in battle, leaving your village open to extinction.

            Two neighboring villages have been at peace for 1,000 years after the Great-300-Year, G3Y, war that ended the feud. However, unknown to those who reside in Hakiboro Village, the tribe of Junditar have been growing in numbers: passively waiting for the perfect time to strike! And on this beautiful day, as you are tending to your crops, you feel the ground start to tremble. You look up to see an onslaught of Junditarians charging towards your village. Then, the war trumpets sing as you tighten your grip on your farm tool and widen your stance. You and your farm mates are the only defensive line to this village so you must hold off as many Jundis as you can!

            You have friends to help you, so don’t feel like you must personally defeat every enemy coming your way. You can attempt to dodge them as they come rushing in, leaving them up to your companions as you try to defeat the next incoming threat!

            Worry not! If you pass, your name will go down in history as being the greatest of heroes who died defending this village against a plethora of enemies. Children of the future will read about how many you were able to stop before you fell! So let's see how many you can slash until you crash!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}