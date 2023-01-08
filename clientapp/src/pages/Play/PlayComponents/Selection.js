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
import { ENEMIES } from '../Helpers/GameConstants'

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
    [clinicState])

  // Handler Methods
  const clickClinicHandler = () => {
    dispatch(updateGameState(GameStates.CLINIC))
  }

  const clickShopHandler = () => {
    dispatch(updateGameState(GameStates.SHOP))
  }

  const clickEnemyHandler = (enemy) => () => {
    // Choose an enemy based on enemy
    dispatch(updateEnemy(enemy))
    dispatch(updateGameState(GameStates.COMBAT))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Article 
          {...ENEMIES[0].Article}
          clickableTitle={true}
          clickHandler={clickEnemyHandler(ENEMIES[0])}
        />
      </Grid>

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
  )
}

export default Selection