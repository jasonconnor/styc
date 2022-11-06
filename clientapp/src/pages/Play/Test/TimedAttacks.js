import { 
  useCallback,
  useEffect,
  useState
} from 'react'
import { 
  Box, 
  Button, 
  Container, 
  Stack
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

  const checkStates = () => {
    if (health <= 0) {
      stopTimer()
    }
  }
  useEffect(checkStates, [health])

  const stopTimer = () => {
    clearInterval(enemyAttackTimer)
  }

  const reducePlayerHP = (amount) => {
    setHealth(prev => prev - amount)
  }

  const handleClickedEnemy = (index) => () => {
    // Clear current Timer
    stopTimer()

    const enemy = enemies[index]

    // Start interval timer to tick player health
    enemyAttackTimer = setInterval(() => {
      // Values inside this callback function remain the same.
      reducePlayerHP(enemy.Stats.ATK_DMG)
    }, enemy.Stats.ATK_FREQ * 1000)
  }

  return (
    <Box  sx={{ background: 'beige', color: '#888', paddingTop: '20px', paddingBottom: '20px' }}>
      <label>
        TimedAttacks
      </label>
      <Box>
        <label>Current HP: {health}/{maxHealth}</label>
      </Box>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' onClick={handleClickedEnemy(0)}>Slime</Button>
        <Button variant='contained' onClick={handleClickedEnemy(1)}>Mouse</Button>
        <Button variant='contained' color='secondary' onClick={stopTimer}>Stop Timer</Button>
        <Button variant='contained' color='secondary' onClick={() => reducePlayerHP(4)}>Reduce health by 4</Button>

      </Stack>

    </Box>
  )
}

export default TimedAttacks