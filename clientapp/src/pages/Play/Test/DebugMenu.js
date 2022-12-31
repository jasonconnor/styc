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
  
  const isLeftMost = useMemo(() => gameState === -2, [gameState]);
  const isRightMost = useMemo(() => gameState === 5, [gameState]);
  
  const changeGameStateHandler = (direction) => () => {
    if (isLeftMost && direction === -1) return;
    if (isRightMost && direction === 1) return;
    
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
        sx={{
          cursor: isLeftMost ? 'initial' : 'pointer',
          visibility: isLeftMost ? 'hidden' : 'initial',
        }}
        onClick={changeGameStateHandler(-1)}
        />
      <span>Game State ({gameState})</span>
      <ArrowRight 
        sx={{
          cursor: isRightMost ? 'initial' : 'pointer',
          visibility: isRightMost ? 'hidden' : 'initial',

        }}
        onClick={changeGameStateHandler(1)}
      />
    </Stack>
    }
    </>
  )
}

export default DebugMenu