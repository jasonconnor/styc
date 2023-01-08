import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateGameState } from '../../../store/reducers/game'
import { GameStates } from '../Helpers/GameStates'

const DebugMenu = () => {
  const [showMenu, setShowMenu] = useState(true)
  const dispatch = useDispatch()
  
  const isDebug = useMemo(() => 
    new URLSearchParams(
      window.location.search
    ).get('Debug'),
    []
  )

  const gameState = useSelector(state => state.game.State)
  
  const isLeftMost = useMemo(() => gameState === -2, [gameState])
  const isRightMost = useMemo(() => gameState === 5, [gameState])
  
  const changeGameStateHandler = (direction) => () => {
    if (isLeftMost && direction === -1) return
    if (isRightMost && direction === 1) return
    
    dispatch(updateGameState(gameState + direction))
  }

  return (<>
    {isDebug &&
    <Box
      sx={{position: 'absolute', top: 0, left: 0, background: 'white'}}
    >
      <span onClick={() => setShowMenu(currentState => !currentState)}
        style={{cursor: 'pointer'}}
      >
        {showMenu ? '[ < ]' : '[ > ]'}
      </span>
      {showMenu &&
      <>
        <span style={{marginBottom: '1rem'}}>
          &nbsp;DEBUG MENU
        </span>
        <Stack direction='row' spacing={2} alignItems='center'>
          <ArrowLeft
            sx={{
              cursor: isLeftMost ? 'initial' : 'pointer',
              visibility: isLeftMost ? 'hidden' : 'initial',
            }}
            onClick={changeGameStateHandler(-1)}
            />
          <span style={{width: '250px'}}>
            Game State ({gameState}): {
              Object.keys(GameStates).find(key => GameStates[key] === gameState)
            }
          </span>
          <ArrowRight 
            sx={{
              cursor: isRightMost ? 'initial' : 'pointer',
              visibility: isRightMost ? 'hidden' : 'initial',

            }}
            onClick={changeGameStateHandler(1)}
          />
        </Stack>
        <Stack direction='row' spacing={2}>

        </Stack>
      </>
      }
    </Box>
    }
    </>
  )
}

export default DebugMenu