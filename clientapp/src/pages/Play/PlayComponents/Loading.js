import { Print } from '@mui/icons-material'
import { LinearProgress, Stack } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateGameState } from '../../../store/reducers/game'
import { GameStates } from '../Helpers/GameStates'

const Loading = () => {
  const dispatch = useDispatch()
  const gameState = useSelector(state => state.game.State)
  
  // TODO: Only Switch to Main Menu after all
  // necessary data are loaded from API
  useEffect(() => {
    if (gameState !== null) return

    dispatch(updateGameState(GameStates.MAINMENU))
  }, [gameState])
    
  // TODO: Fill with Skeleton of actual Newspaper layout
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        minHeight: 'calc(100vh - 166.34px - 40px)'}}
    >
      <Print sx={{fontSize: '5rem'}}/>
      <span>STYC Components loading...</span>
      <LinearProgress sx={{width: '50%'}} />
    </Stack>
  )
}

export default Loading