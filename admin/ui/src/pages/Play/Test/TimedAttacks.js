import { 
  useEffect,
  useMemo,
  useState
} from 'react'
import { 
  Box, 
  Button, 
  LinearProgress, 
  Stack,
  Tooltip,
  Typography
} from '@mui/material'

// Constants
const enemies = [
  {
    Name: 'Slime',
    Stats: {
      ATK_FREQ: 2,
      ATK_DMG: 2,
      MaxHealth: 8
    }
  },
  {
    Name: 'Mouse',
    Stats: {
      ATK_FREQ: .5,
      ATK_DMG: 1,
      MaxHealth: 5
    }
  }
]
const maxHealth = 10
const playerAttack = 2

let enemyAttackTimer = null;

/**
 * Timed Attacks POC
 */
const TimedAttacks = () => {
  const [health, setHealth] = useState(maxHealth)
  const [selectedEnemy, setSelectedEnemy] = useState(null)

  const isPlayerDead = useMemo(() => health <= 0, [health])
  const enemyHealthPercentage = useMemo(() => {
    if (!selectedEnemy) return null

    return selectedEnemy.Stats.Health/selectedEnemy.Stats.MaxHealth*100
  }, [selectedEnemy])

  // Conditions for stopping timer
  const checkStates = () => {
    if (isPlayerDead || selectedEnemy?.Stats.Health <= 0) {
      stopTimer()
    }
  }
  useEffect(checkStates, [isPlayerDead, selectedEnemy?.Stats.Health])

  // Method to stop timer
  const stopTimer = () => {
    clearInterval(enemyAttackTimer)
    enemyAttackTimer = null;
  }

  // Method to reduce player health
  const reducePlayerHP = (amount) => () => {
    setHealth(prev => prev - amount)
  }

  // Handler for when an enemy is selected
  const handleClickedEnemy = (index) => () => {
    // Clear current Timer
    stopTimer()
    
    // Temp prevent additional triggers.
    // Shouldn't need this in real implementation.
    if (isPlayerDead) return

    const enemy = enemies[index]
    enemy.Stats.Health = enemy.Stats.MaxHealth

    // For displaying enemy info
    setSelectedEnemy(enemy)

    // Start interval timer to tick player health
    enemyAttackTimer = setInterval(() => {
      // Values inside this callback function remain the same.
      reducePlayerHP(enemy.Stats.ATK_DMG)
    }, enemy.Stats.ATK_FREQ * 1000)
  }

  // Function currying:  () => () => {}
  // Handler method for when heal is clicked.
  const heal = (amount) => () => {
    // Intentially allowing healing over max health for debugging enemy attacks.
    setHealth(currentHealth => currentHealth + amount)
    // disallow healing over max health:
    // setHealth(currentHealth => Math.min(currentHealth + amount, maxHealth))
  }

  // Handler method for when attack is clicked, subtract health from enemy until they're dead.
  const attack = () => {
    // If there are no active enemy or if the enemy is dead, do nothing
    if (!selectedEnemy || selectedEnemy.Stats.Health <= 0) return

    // Copy over current enemy details and decrease the health by player's attack
    setSelectedEnemy(current => {
      const enemy = {
        ...current,
        Stats: {
          ...current.Stats,
          Health: current.Stats.Health - playerAttack
        }
      }

      return enemy
    })
  }

  // JSX
  return (
    <Box  sx={{ background: 'beige', color: '#888', paddingTop: '20px', paddingBottom: '20px' }}>
      <label>
        TimedAttacks
      </label>
      <Box>
        <label>Current HP: {health}/{maxHealth}</label>
        {selectedEnemy &&
        <div>
          <Typography>Active enemy: {selectedEnemy.Name}</Typography>
          <Typography>{selectedEnemy.Stats.Health}/{selectedEnemy.Stats.MaxHealth} HP</Typography>
          <LinearProgress variant="determinate" value={enemyHealthPercentage}></LinearProgress>
          <Typography>Damage rate: </Typography>
          {/* <Tooltip 
            title={`${selectedEnemy.Stats.ATK_DMG} damage every ${selectedEnemy.Stats.ATK_FREQ} seconds.`}
          > */}
            -{selectedEnemy.Stats.ATK_DMG}HP/{selectedEnemy.Stats.ATK_FREQ}s
          {/* </Tooltip> */}
          
        </div>
        }
      </Box>
      <Stack className='test-button-container' direction='row' spacing={2}>
        <Tooltip title='Slimes deal 2 damage every 2 seconds.'>
          <Button variant='contained' onClick={handleClickedEnemy(0)}>Slime</Button>
        </Tooltip>
        <Tooltip title='Mice deal 1 damage every 0.5 seconds.'>
          <Button variant='contained' onClick={handleClickedEnemy(1)}>Mouse</Button>
        </Tooltip>
        <Button variant='contained' color='secondary' onClick={stopTimer} disabled={isPlayerDead}>Stop Timer</Button>
        <Button variant='contained' color='tertiary' onClick={reducePlayerHP(4)}>Reduce health by 4</Button>
        <Button variant='contained' color='tertiary' onClick={heal(5)}>Heal 5 HP</Button>
      </Stack>
      <br />
      <Tooltip title={`Deal ${playerAttack} damage to the enemy.`}>
        <span>
          <Button variant='contained' onClick={attack} disabled={!selectedEnemy}>Attack enemy</Button>
        </span>
      </Tooltip>
    </Box>
  )
}

export default TimedAttacks