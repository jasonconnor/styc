import TimedAttacks from './TimedAttacks'
import IconOptions from './IconOptions'
import { Container, Stack } from '@mui/material'
import BattleSystemTest from './BattleSystemTest'

const Test = () => {
  return (<Container>
    <Stack spacing={4}>
      <TimedAttacks />
      <IconOptions />
      <br />
      <BattleSystemTest />
    </Stack>
  </Container>)
}

export default Test