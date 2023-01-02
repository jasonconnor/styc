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

    dispatch(
      updateGameState(GameStates.MAINMENU)
    )
  }, [gameState])
    
  // TODO: Fill with Skeleton of actual Newspaper layout
  return (
    <div>Game loading.....</div>
  )
}

export default Loading