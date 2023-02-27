import { useEffect, useState } from 'react'
import { IconButton, Menu, MenuItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Add } from '@mui/icons-material'
import { GetAllEnemies } from '../../../services/Enemies.svc'
import './enemiesPanel.scss'

/** TODO:
 * Make Columns Sortable
 * Make Context Menu for row
 *  - Delete
 *  - View/Edit
 * Wire up Create Menu
 */

const EnemiesPanel = () => {
  const [enemies, setEnemies] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const getEnemies = async () => {
    const response = await GetAllEnemies()
    if (response.error) {
      // TODO: show error in UI
      return
    }
    setEnemies(response.enemies)
  }
  useEffect(() => { getEnemies() }, [])

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (<Stack id='enemies-panel-container' spacing={2}>
    <span>
      <IconButton variant='outlined'
        onClick={handleAddClick}
      >
        <Add />
      </IconButton>
    </span>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className='table-header'>
            <CustomTableColumnHeader>ID</CustomTableColumnHeader>
            <CustomTableColumnHeader>Name</CustomTableColumnHeader>
            <CustomTableColumnHeader>Level Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>Exp Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>HP Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>Attack Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>Attack Element</CustomTableColumnHeader>
            <CustomTableColumnHeader>Attack Accuracy</CustomTableColumnHeader>
            <CustomTableColumnHeader>Attack Frequency</CustomTableColumnHeader>
            <CustomTableColumnHeader>Defense Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>Defense Evade</CustomTableColumnHeader>
            <CustomTableColumnHeader>Defense Element Resistances</CustomTableColumnHeader>
            <CustomTableColumnHeader>Defense Element Vulnerabilities</CustomTableColumnHeader>
            <CustomTableColumnHeader>Magic Base</CustomTableColumnHeader>
            <CustomTableColumnHeader>Magic Elements</CustomTableColumnHeader>
            <CustomTableColumnHeader>Magic Accuracy</CustomTableColumnHeader>
            <CustomTableColumnHeader>Magic Cooldown</CustomTableColumnHeader>
            <CustomTableColumnHeader>Status Chance</CustomTableColumnHeader>
            <CustomTableColumnHeader>Article</CustomTableColumnHeader>
            <CustomTableColumnHeader>Created At</CustomTableColumnHeader>
            <CustomTableColumnHeader>Updated At</CustomTableColumnHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {enemies.map((enemy) => (
            <EnemyRow key={enemy._id} enemy={enemy} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem>Add Enemy</MenuItem>
    </Menu>
  </Stack>)
}

const CustomTableColumnHeader = ({ children }) => {
  return <TableCell sx={{ whiteSpace: 'nowrap' }}>
    <span>{children}</span>
  </TableCell>
}

const EnemyRow = ({ enemy }) => {
  const handleOpenContext = (event) => {
    event.preventDefault()
  }

  return (<TableRow className='enemy-row'
    onContextMenu={handleOpenContext}
  >
    <CellValue item={enemy._id} />
    <CellValue item={enemy.name} />
    <CellValue item={enemy.levelBase} />
    <CellValue item={enemy.experienceBase} />
    <CellValue item={enemy.hpBase} />
    <CellValue item={enemy.attackBase} />
    <CellValue items={enemy.attackElement} />
    <CellValue item={enemy.attackAccuracy} />
    <CellValue item={enemy.attackFrequency} />
    <CellValue item={enemy.defenseBase} />
    <CellValue item={enemy.defenseEvade} />
    <CellValue items={enemy.defenseElementResistance} />
    <CellValue items={enemy.defenseElementVulnerability} />
    <CellValue item={enemy.magicBase} />
    <CellValue items={enemy.magicElement} />
    <CellValue item={enemy.magicAccuracy} />
    <CellValue item={enemy.magicCooldown} />
    <CellValue item={enemy.statusChance} />
    <CellValue item={enemy.article} />
    <CellValue item={enemy.createdAt} />
    <CellValue item={enemy.updatedAt} />
  </TableRow>)
}

const CellValue = ({ item, items }) => {
  if (!items) {
    return (<TableCell>
      {item ?? 'none'}
    </TableCell>)
  }

  
  return (<TableCell>{
    items.map(item => item.name).join(', ')
  }
  </TableCell>)
}

export default EnemiesPanel