import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box, Button, Grid, Stack
} from '@mui/material'
import { updateEnemy, updateGameState } from '../../../store/reducers/game'
import { GameStates } from '../Helpers/GameStates'
import Article from './Article'
import { 
  ClosedClinicArticle,
  ClosedShopArticle,
  NewClinicArticle,
  NewShopArticle
} from '../Helpers/ArticleHelper'

const Selection = () => {
  const dispatch = useDispatch()
  const shopState = useSelector(state => state.game.IsShopAvailable)
  const clinicState = useSelector(state => state.game.IsClinicAvailable)

  const shopArticle = useMemo(() => shopState 
      ? NewShopArticle 
      : ClosedShopArticle,
    [shopState])

  const clinicArticle = useMemo(() => clinicState 
    ? NewClinicArticle 
    : ClosedClinicArticle,
  [shopState])

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
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant='contained'
          onClick={clickClinicHandler}
        >
          Clinic
        </Button>
        <Button
          variant='contained'
          onClick={clickShopHandler}
        >
          Shop
        </Button>
        <Button
          variant='contained'
          onClick={clickEnemyHandler(1)}
        >
          Enemy 1
        </Button>
        <Button
          variant='contained'
          onClick={clickEnemyHandler(2)}
        >
          Enemy 2
        </Button>
        <Button
          variant='contained'
          onClick={clickEnemyHandler(3)}
        >
          Enemy 3
        </Button>
      </Stack>

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Article 
          {...clinicArticle}
          clickableTitle={clinicState}
          clickHandler={clickClinicHandler}
        />
      </Grid>

      <Grid item xs={4}>
        <Article 
          {...shopArticle}
          clickableTitle={shopState}
          clickHandler={clickShopHandler}
        />
      </Grid>
    </Grid>
    </>
  )
}

export default Selection