import { 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboard } from '../../store/reducers/leaderboard'

import './leaderboard.scss'

const Leaderboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getLeaderboard()
    )
  }, [])

  const highscores = useSelector(state => state.leaderboard.data);
  console.log(highscores)
  return (
    <div>
      <h2>Leaderboards</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align='right'>Score</TableCell>
              <TableCell align='right'>Enemies Slain</TableCell>
              <TableCell align='right'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {highscores && highscores.map((score) => (
              <TableRow
                key={score._id} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{score.user.username}</TableCell>
                <TableCell align='right'>{score.totalScore}</TableCell>
                <TableCell align='right'>{score.enemiesSlain}</TableCell>
                <TableCell align='right'>{score.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Leaderboard