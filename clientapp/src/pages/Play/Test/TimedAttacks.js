import { 
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { 
  Box, 
  Button, 
  Container, 
  Stack,
  Tooltip,
  Typography
} from '@mui/material'

const enemies = [
  {
    Name: 'Slime',
    Stats: {
      ATK_FREQ: 2,
      ATK_DMG: 2
    }
  },
  {
    Name: 'Mouse',
    Stats: {
      ATK_FREQ: .5,
      ATK_DMG: 1
    }
  }
]

const maxHealth = 10

let enemyAttackTimer;

const TimedAttacks = () => {
  const [health, setHealth] = useState(maxHealth)
  const [selectedEnemy, selectEnemy] = useState(null)

  const isPlayerDead = useMemo(() => health <= 0, [health])

  const checkStates = () => {
    if (isPlayerDead) {
      stopTimer()
    }
  }
  useEffect(checkStates, [isPlayerDead])

  const stopTimer = () => {
    clearInterval(enemyAttackTimer)
    selectEnemy(null)
  }

  const reducePlayerHP = (amount) => {
    setHealth(prev => prev - amount)
  }

  const handleClickedEnemy = (index) => () => {
    // Clear current Timer
    stopTimer()
    
    // Temp prevent additional triggers.
    // Shouldn't need this in real implementation.
    if (isPlayerDead) return

    // For displaying enemy info
    selectEnemy(enemies[index])

    const enemy = enemies[index]

    // Start interval timer to tick player health
    enemyAttackTimer = setInterval(() => {
      // Values inside this callback function remain the same.
      reducePlayerHP(enemy.Stats.ATK_DMG)
    }, enemy.Stats.ATK_FREQ * 1000)
  }

  // Function currying:  () => () => {}
  const heal = (amount) => () => {
    setHealth(currentHealth => currentHealth + amount)
  }

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
          <Typography>Damage rate: </Typography>
          {/* <Tooltip 
            title={`${selectedEnemy.Stats.ATK_DMG} damage every ${selectedEnemy.Stats.ATK_FREQ} seconds.`}
          > */}
            -{selectedEnemy.Stats.ATK_DMG}HP/{selectedEnemy.Stats.ATK_FREQ}s
          {/* </Tooltip> */}
          
        </div>
        }
      </Box>
      <Stack direction='row' spacing={2}>
        <Tooltip title='Slimes deal 2 damage every 2 seconds.'>
          <Button variant='contained' onClick={handleClickedEnemy(0)}>Slime</Button>
        </Tooltip>
        <Tooltip title='Mice deal 1 damage every 0.5 seconds.'>
          <Button variant='contained' onClick={handleClickedEnemy(1)}>Mouse</Button>
        </Tooltip>
        <Button variant='contained' color='secondary' onClick={stopTimer} disabled={isPlayerDead}>Stop Timer</Button>
        <Button variant='contained' color='secondary' onClick={() => reducePlayerHP(4)}>Reduce health by 4</Button>
        <Button variant='contained' color='secondary' onClick={heal(10)}>Heal 10 HP</Button>
      </Stack>

    </Box>
  )
}

export default TimedAttacks