import { useDispatch } from 'react-redux'
import {
  Box, Button
} from '@mui/material'
import { updateEnemy, updateGameState } from '../../../store/reducers/game'
import { GameStates } from '../Helpers/GameStates'

const Selection = () => {
  const dispatch = useDispatch()

  // Handler Methods
  const clickClinicHandler = () => {
    dispatch(updateGameState(GameStates.CLINIC))
  }

  const clickShopHandler = () => {
    dispatch(updateGameState(GameStates.SHOP))
  }

  const clickEnemyHandler = (enemy) => () => {
    // Choose an enemy based on enemy
    // dispatch(updateEnemy())
    dispatch(updateGameState(GameStates.COMBAT))
  }

  return (
    <Box>
      <Button
        onClick={clickClinicHandler}
      >
        Clinic
      </Button>
      <Button
        onClick={clickShopHandler}
      >
        Shop
      </Button>
      <Button
        onClick={clickEnemyHandler(1)}
      >
        Enemy 1
      </Button>
      <Button
        onClick={clickEnemyHandler(2)}
      >
        Enemy 2
      </Button>
      <Button
        onClick={clickEnemyHandler(3)}
      >
        Enemy 3
      </Button>
    </Box>
  )
}

export default Selection