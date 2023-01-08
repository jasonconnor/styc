import React from 'react'
import { IconButton } from '@mui/material'
import { ArrowBack, AutoStories } from '@mui/icons-material'
import colors from '../../../styles/_export.scss'

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