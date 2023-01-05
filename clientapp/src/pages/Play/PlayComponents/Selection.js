import { useDispatch } from 'react-redux'
import {
  Box, Button, Grid, Stack
} from '@mui/material'
import { updateEnemy, updateGameState } from '../../../store/reducers/game'
import { GameStates } from '../Helpers/GameStates'
import Article from './Article'
import { ClosedClinicArticle, ClosedShopArticle, NewClinicArticle, NewShopArticle } from '../Helpers/ArticleHelper'

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
          {...NewClinicArticle}
          clickableTitle={true}
          clickHandler={clickClinicHandler}
        />
      </Grid>

      <Grid item xs={4}>
        <Article 
          {...NewShopArticle}
          clickableTitle={true}
          clickHandler={clickShopHandler}
        />
      </Grid>

      <Grid item xs={4}>
        <Article 
          {...ClosedClinicArticle}
        />
      </Grid>

      <Grid item xs={4}>
        <Article
          {...ClosedShopArticle}
        />
      </Grid>
    </Grid>
    </>
  )
}

export default Selection