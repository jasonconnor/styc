import { ArrowLeft, ArrowRight, ToggleOn } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateClinicState, updateGameState, updateShopState } from '../../../store/reducers/game'
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

  const gameValues = useSelector(state => state.game)
  const gameState = gameValues.State
  const shopState = gameValues.IsShopAvailable
  const clinicState = gameValues.IsClinicAvailable
  
  const isLeftMost = useMemo(() => gameState === -2, [gameState])
  const isRightMost = useMemo(() => gameState === 5, [gameState])
  
  const changeGameStateHandler = (direction) => () => {
    if (isLeftMost && direction === -1) return
    if (isRightMost && direction === 1) return
    
    dispatch(updateGameState(gameState + direction))
  }

  const toggleShopStateHandler = () => {
    dispatch(updateShopState(!shopState))
  }

  const toggleClinicStateHandler = () => {
    dispatch(updateClinicState(!clinicState))
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
        <Stack spacing={2}>
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
          <div>
              <span>Shop Availability</span>
              <IconButton disableRipple
                onClick={toggleShopStateHandler}
                sx={{padding: '0 8px'}}
              >
                <ToggleOn sx={{
                    transform: `scaleX(${ shopState ? 1 : -1 })`,
                    fill: shopState ? '#09dd16' : 'currentcolor'
                  }}
                />
              </IconButton>
          </div>
          <div style={{margin: 0}}>
              <span>Clinic Availability</span>
              <IconButton disableRipple
                onClick={toggleClinicStateHandler}
                sx={{padding: '0 8px'}}
              >
                <ToggleOn sx={{
                    transform: `scaleX(${ clinicState ? 1 : -1 })`,
                    fill: clinicState ? '#09dd16' : 'currentcolor'
                  }}
                />
              </IconButton>
          </div>
        </Stack>
      </>
      }
    </Box>
    }
    </>
  )
}

export default DebugMenu