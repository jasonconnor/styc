import { useEffect, useState } from 'react'
import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Add } from '@mui/icons-material'
import { GetAllEnemies } from '../../../services/Enemies.svc'
import './enemiesPanel.scss'

/** TODO:
 * Make Columns Sortable
 * Make Context Menu for row
 *  - Delete
 *  - View/Edit
 * Click to View
 */

const EnemiesPanel = () => {
  const [enemies, setEnemies] = useState([])

  const getEnemies = async () => {
    const response = await GetAllEnemies()
    if (response.error) {
      // TODO: show error in UI
      return
    }
    setEnemies(response.enemies)
  }
  useEffect(() => {getEnemies()}, [])

  return (<Stack id='enemies-panel-container' spacing={2}>
    <span>
      <Button variant='outlined'>
        <Add sx={{marginRight: '5px'}}/><span>Add enemy</span>
      </Button>
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
  </Stack>)
}

const CustomTableColumnHeader = ({children}) => {
  return <TableCell sx={{whiteSpace: 'nowrap'}}>
    <span>{children}</span>
  </TableCell>
}

const EnemyRow = ({enemy}) => {
  const handleOpenContext = (event) => {
    event.preventDefault()
  }

  return (<TableRow className='enemy-row'
    onContextMenu={handleOpenContext}
  >
    <TableCell>{enemy._id}</TableCell>
    <TableCell>{enemy.name}</TableCell>
    <TableCell>{enemy.levelBase}</TableCell>
    <TableCell>{enemy.experienceBase}</TableCell>
    <TableCell>{enemy.hpBase}</TableCell>
    <TableCell>{enemy.attackBase}</TableCell>
    <TableCell>{enemy.attackElement.length > 0 ? enemy.attackElement : 'none'}</TableCell>
    <TableCell>{enemy.attackAccuracy}</TableCell>
    <TableCell>{enemy.attackFrequency}</TableCell>
    <TableCell>{enemy.defenseBase}</TableCell>
    <TableCell>{enemy.defenseEvade}</TableCell>
    <TableCell>{enemy.defenseElementResistance.length > 0 ? enemy.defenseElementResistance : 'none'}</TableCell>
    <TableCell>{enemy.defenseElementVulnerability.length > 0 ? enemy.defenseElementVulnerability : 'none'}</TableCell>
    <TableCell>{enemy.magicBase ?? 'none'}</TableCell>
    <TableCell>{enemy.magicElement.length > 0 ? enemy.magicElement : 'none'}</TableCell>
    <TableCell>{enemy.magicAccuracy ?? 'none'}</TableCell>
    <TableCell>{enemy.magicCooldown ?? 'none'}</TableCell>
    <TableCell>{enemy.statusChance ?? 'none'}</TableCell>
    <TableCell>{enemy.article ?? 'none'}</TableCell>
    <TableCell>{enemy.createdAt ?? 'none'}</TableCell>
    <TableCell>{enemy.updatedAt ?? 'none'}</TableCell>
  </TableRow>)
}

export default EnemiesPanel