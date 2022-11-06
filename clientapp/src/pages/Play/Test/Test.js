import TimedAttacks from './TimedAttacks'
import IconOptions from './IconOptions'
import { Container, Stack } from '@mui/material'

const Test = () => {
  return (<Container>
    <Stack spacing={4}>
      <TimedAttacks />
      <IconOptions />
      <br />
    </Stack>
  </Container>)
}

export default Test