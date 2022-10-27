import { 
  AddCircle,
  ColorizeTwoTone, 
  Favorite, 
  FavoriteBorder,
  Healing,
  RemoveCircle
} from '@mui/icons-material'
import { Chip, Stack } from '@mui/material'
import './play.scss'

const Play = () => {
  return (<div class='play-page-container'>
    <Stack spacing={2}>
      <span>
        <ColorizeTwoTone sx={{ transform: 'rotate(180deg)' }} />
        Sword
      </span>
      <span>
        <Favorite />
        <FavoriteBorder />
        Health
      </span>
      <span>
        <Healing />
        Healing
      </span>
      <Chip
        avatar={<AddCircle />}
        label='Boons'
        sx={{width: 'fit-content'}}
        className='boon'
      />
      <Chip
        avatar={<RemoveCircle />}
        label='Debuffs'
        sx={{width: 'fit-content'}}
        className='debuff'
      />
    </Stack>
  </div>)
}

export default Play