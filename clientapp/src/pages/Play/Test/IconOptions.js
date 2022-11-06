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
import { Box, Chip, Container, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'

const IconOptions = () => {
  return (
    <Box sx={{ background: 'beige', color: '#888', paddingTop: '20px', paddingBottom: '20px' }}>
      <Box>
        <Typography>Potential Icons</Typography>
      </Box>
      <Stack
        direction='row'
        flexWrap='wrap'
        spacing={4}
        divider={
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'unset' }} />
        }
        justifyContent='center'
      >
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
        <span>
          <Stack direction='row' spacing={1}>
            <Tooltip disableInteractive title='Your STR has been increased to 15'>
              <Chip
                avatar={<AddCircle />}
                label='Strength x1.5'
                sx={{ width: 'fit-content' }}
                className='boon'
              />
            </Tooltip>
            <Tooltip disableInteractive title='Your DEF has been increased to 12'>
              <Chip
                avatar={<AddCircle />}
                label='Armor +2'
                sx={{ width: 'fit-content' }}
                className='boon'
              />
            </Tooltip>
            <span>Boons</span>
          </Stack>
          <br />
          <Stack direction='row' spacing={1}>
            <Tooltip disableInteractive title={<span>You will lose 5 HP every second.<br /><i>Effect ends in 3 seconds.</i></span>}>
              <Chip
                avatar={<RemoveCircle />}
                label='Poisoned-5 (3s)'
                sx={{ width: 'fit-content' }}
                className='debuff'
              />
            </Tooltip>
            <Tooltip disableInteractive title={<><span>Your attacks have a 2 second delay.<br /><i>Effect ends in 5 seconds.</i></span><br /><span>----OR----</span><br /><span>Your attacks' cooldown takes 2 seconds longer to recover.<br /><i>Effect ends in 5 seconds.</i></span></>}>
              <Chip
                avatar={<RemoveCircle />}
                label='Slowed-2 (5s)'
                sx={{ width: 'fit-content' }}
                className='debuff'
              />
            </Tooltip>
            <span>Debuffs</span>
          </Stack>
        </span>
      </Stack>
    </Box>
  )
}

export default IconOptions