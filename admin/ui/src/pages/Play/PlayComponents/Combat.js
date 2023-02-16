import { 
  useEffect, 
  useState 
} from 'react'
import { useSelector } from 'react-redux'
import { 
  Box, 
  Button, 
  Grid, 
  LinearProgress, 
  Stack 
} from '@mui/material'
import { 
  clearEnemyAttackInterval, 
  executeAttack, 
  initializeEnemyAttackInterval,
} from '../Helpers/CombatSystem'

// Cooldown timeout timers
let playerMainCooldown = null
let playerMagicCooldown = null

/**
 * The game's combat state component.
 * @returns The Combat JSX Component.
 */
const Combat = () => {
  /** Redux */
  const game = useSelector(state => state.game)

  /** Local states */
  const [player, setPlayer] = useState(game.PlayerStats)
  const [enemy, setEnemy] = useState(game.CurrentEnemy)
  const [isMeleeAttackDisabled, setIsMeleeAttackDisabled] = useState(false)
  const [isMagicAttackDisabled, setIsMagicAttackDisabled] = useState(false)

  /** Use Effect */

  // Start the enemy's attack interval.
  useEffect(() => {
    initializeEnemyAttackInterval(
      enemy,
      player,
      setEnemy,
      setPlayer
    )
  }, [])

  // Stop attacks when the enemy or the player is slain.
  useEffect(() => {
    if (enemy.HP_Current === 0
      || player.HP_Current === 0
    ) {
      clearEnemyAttackInterval()

      clearTimeout(playerMainCooldown)
      playerMainCooldown = null

      clearTimeout(playerMagicCooldown)
      playerMagicCooldown = null

      if (!isMeleeAttackDisabled)
        setIsMeleeAttackDisabled(true)
      if (!isMagicAttackDisabled)
        setIsMagicAttackDisabled(true)
    }
  }, [enemy.HP_Current, player.HP_Current])

  /** Click Handlers */

  // Handler for when the melee attack is clicked.
  const handleMeleeClicked = () => {
    setIsMeleeAttackDisabled(true)

    playerMainCooldown = setTimeout(() => {
      setIsMeleeAttackDisabled(false)
    }, player.ATK_Freq * 1000)

    executeAttack(player, enemy, setPlayer, setEnemy)
  }

  // Handler for when the magic attack is clicked.
  const handleMagicClicked = () => {
    setIsMagicAttackDisabled(true)

    playerMagicCooldown = setTimeout(() => {
      setIsMagicAttackDisabled(false)
    }, player.MAG_Cooldown * 1000)

    executeAttack(player, enemy, setPlayer, setEnemy, "MAGIC")
  }

  /** JSX Component */
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
                <span>Enemy Element: {enemy.ATK_Elem ?? "Normal"}</span>
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
          <Stack>
            <LinearProgress 
              color='tertiary' 
              variant='determinate' 
              value={Math.floor(enemy.HP_Current/enemy.HP_Base*100)} 
              sx={{height: '2rem'}}
            />
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