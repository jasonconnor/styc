import React from 'react'
import { IconButton } from '@mui/material'
import { ArrowBack, AutoStories } from '@mui/icons-material'
import colors from '../../../styles/_export.scss'

/*
            Goblin Rocket look back
                 ,      ,
                /(.-""-.)\
            |\  \/      \/  /|
            | \ / 0  0 \ / |
            \(   ,\__/ , )/
             \_,-\____/-,_/
              /   \/ \/   \
        ___/             \___
      /`    \      /      | |
     /       '----'       / /
    (          __        | /
     \_.-.___,'  `.___,.-'_/
       /              ,___)
      /                  \
     (    )                \
     /\___/                  \
    /                         \
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |                           |
   |    (   )           (   )  |
   |     \_/             \_/   |
  _|_                         _|_
 /   \                       /   \
|     |                     |     |
|     |                     |     |
|     |                     |     |
|     |                     |     |
|     |                     |     |
|_____|                     |_____|
  |||                         |||
 '---'                       '---' 
*/

const BackButton = (props) => {
  const {clickHandler} = props

  return (
    <IconButton disableRipple
      className="hover-expand"
      onClick={clickHandler}
      sx={{color: colors.black}}
    >
      <ArrowBack />
      <AutoStories sx={{transform: 'scaleX(-1)'}}/>
    </IconButton>
  )
}

export default BackButton