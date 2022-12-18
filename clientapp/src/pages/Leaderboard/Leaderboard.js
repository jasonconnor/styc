import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './leaderboard.scss'

const Leaderboard = () => {
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
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Leaderboard