import { Box, Button, Grid, LinearProgress, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { playerMainCooldown } from '../Helpers/CombatSystem'

const Combat = () => {
  const game = useSelector(state => state.game)
  const enemy = game.CurrentEnemy
  const player = game.PlayerStats

  const [isMeleeAttackDisabled, setIsMeleeAttackDisabled] = useState(false)
  const [isMagicAttackDisabled, setIsMagicAttackDisabled] = useState(false)

  const handleMeleeClicked = () => {
    setIsMeleeAttackDisabled(true)

    playerMainCooldown = setTimeout(() => {
      setIsMeleeAttackDisabled(false)
    }, player.ATK_Freq * 1000)
  }

  const handleMagicClicked = () => {
    setIsMagicAttackDisabled(true)

    playerMainCooldown = setTimeout(() => {
      setIsMagicAttackDisabled(false)
    }, player.MAG_Cooldown * 1000)
  }

  return (
    <Grid container
      spacing={3}
      id='combat-container'
      sx={{
        padding: '30px'
      }}
    >
      <Grid item xs={12}>
        <h1 className='article-title'>
          Local Hero Challenges {enemy && enemy.Name}, Brave Or Foolish?
        </h1>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{
          border: '1px solid black',
          padding: '0 20px 20px'
        }}>
          <h3 className='article-title'>Player Stats</h3>
          <Stack>
            {player &&
              <>
                <span>HP: {player.HP_Current}/{player.HP_Base}</span>
                <span>Atk Dmg: {player.ATK_Base}</span>
                <span>Atk Spd: {player.ATK_Freq}</span>
              </>
            }
          </Stack>
          <h3 className='article-title'>Enemy Stats</h3>
          <Stack>
            {enemy &&
              <>
                <span>HP: {enemy.HP_Current}/{enemy.HP_Base}</span>
                <span>Atk Dmg: {enemy.ATK_Base}</span>
                <span>Atk Spd: {enemy.ATK_Freq}</span>
              </>
            }
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={9}
        className='main-article-image-container'
      >
        <div className='article-image'></div>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{
          border: '1px solid black',
          padding: '0 20px 20px'
        }}>
          <h3 className='article-title'>Timers</h3>
          Add timers here
          <Stack>
            <LinearProgress color='black' variant='determinate' value={50} />
          </Stack>
          <h3 className='article-title'>Controls</h3>
          <Stack direction='row' spacing={2}>
            <Button variant='contained'
              onClick={handleMeleeClicked}
              disabled={isMeleeAttackDisabled}
            >
              Melee
            </Button>
            <Button variant='contained'
              onClick={handleMagicClicked}
              disabled={isMagicAttackDisabled}
            >
              Magic
            </Button>
            <Button variant='contained'
            >
              Run
            </Button>
            <Button variant='contained'
            >
              Item
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Combat