import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateGameState } from '../../../store/reducers/game';

const DebugMenu = () => {
  const dispatch = useDispatch();
  
  const isDebug = useMemo(() => 
    new URLSearchParams(
      window.location.search
    ).get('Debug'),
    []
  )
  
  const gameState = useSelector(state => state.game.State);
  
  const changeGameStateHandler = (direction) => () => {
    if (gameState === -2 && direction === -1) return;
    if (gameState === 5 && direction === 1) return;
    
    dispatch(
      updateGameState(gameState + direction)
    )
  }

  return (<>
    {isDebug &&
    <Stack
      direction='row'
      spacing={2}
    >
      <ArrowLeft
        sx={{cursor: 'pointer'}}
        onClick={changeGameStateHandler(-1)}
        />
      <span>Game State ({gameState})</span>
      <ArrowRight 
        sx={{cursor: 'pointer'}}
        onClick={changeGameStateHandler(1)}
      />
    </Stack>
    }
    </>
  )
}

export default DebugMenu