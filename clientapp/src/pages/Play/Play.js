import { 
  AddCircle,
  AutoFixHigh,
  ColorizeTwoTone, 
  DirectionsRun, 
  Favorite, 
  FavoriteBorder,
  Fort,
  Healing,
  LocalPharmacy,
  Logout,
  Medication,
  RemoveCircle,
  Shield,
  Store,
  Storefront
} from '@mui/icons-material'
import { Chip, IconButton, Stack } from '@mui/material'
import './play.scss'

const Play = () => {
  return (<div class='play-page-container'>
    <Stack spacing={2}>
      <span>
        <IconButton>
          <ColorizeTwoTone sx={{ transform: 'rotate(180deg)' }} />
        </IconButton>
        Sword (Melee)
      </span>
      <span>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        Health
      </span>
      <span>
        <IconButton>
          <Healing />
        </IconButton>
        <IconButton>
          <Medication />
        </IconButton>
        <IconButton>
          <LocalPharmacy />
        </IconButton>
        Healing
      </span>
      <span>
        <IconButton>
          <DirectionsRun />
        </IconButton>
        <IconButton>
          <Logout />
        </IconButton>
        Run
      </span>
      <span>
        <IconButton>
          <AutoFixHigh />
        </IconButton>
        Magic (Range)
      </span>
      <span>
        <IconButton>
          <Shield />
        </IconButton>
          Block || Defense
      </span>
      <span>
        <IconButton>
          <Fort />
        </IconButton>
        <IconButton>
          <Store />
        </IconButton>
        <IconButton>
          <Storefront />
        </IconButton>
        Shop
      </span>
      <Stack direction='row' spacing={1}>
        <Chip
          avatar={<AddCircle />}
          label='Strength x1.5'
          sx={{width: 'fit-content'}}
          className='boon'
        />
        <Chip
          avatar={<AddCircle />}
          label='Armor +2'
          sx={{width: 'fit-content'}}
          className='boon'
        />
        <span>Boons</span>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Chip
          avatar={<RemoveCircle />}
          label='Poisoned'
          sx={{width: 'fit-content'}}
          className='debuff'
        />
        <Chip
          avatar={<RemoveCircle />}
          label='Slowed'
          sx={{width: 'fit-content'}}
          className='debuff'
        />
        <span>Debuffs</span>
      </Stack>
    </Stack>
  </div>)
}

export default Play