import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { updateGameState } from '../../../store/reducers/game';

const Loading = () => {
  const dispatch = useDispatch();
  
  // TODO: Only Switch to Main Game after all
  // necessary data are loaded from API
  useEffect(() => {
    dispatch(
      updateGameState(0)
      )
    }, []);
    
  // TODO: Fill with Skeleton of actual Newspaper layout
  return (
    <div>Game loading.....</div>
  )
}

export default Loading