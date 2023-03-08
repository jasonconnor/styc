import { useEffect, useState } from 'react'
import { Menu, MenuItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { DeleteEnemy, GetAllEnemies } from '../../../services/Enemies.svc'
import './enemiesPanel.scss'
import CreateEnemy from './CreateEnemy/CreateEnemy'

/** TODO:
 * Make Columns Sortable
 * Make Context Menu for row
 *  - Delete
 *  - View/Edit
 * Wire up Create Menu
 */

const InitialContextMenu = {
  anchor: null,
  enemy: null
}

const EnemiesPanel = () => {
  const [contextMenu, setContextMenu] = useState(InitialContextMenu)
  const [enemies, setEnemies] = useState([])

  // Should probably move this to a global state
  const getEnemies = () => async () => {
    const response = await GetAllEnemies()
    if (response.error) {
      // TODO: show error in UI
      return
    }
    setEnemies(response.enemies)
  }
  useEffect(getEnemies, [])

  const handleCreateClicked = (updatedEnemiesList) => {
    setEnemies(updatedEnemiesList)
  }

  const handleContextMenu = (event, enemy) => {
    setContextMenu({
      enemy: enemy,
      anchor: {
        top: event.clientY,
        left: event.clientX
      }
    })
  }

  const handleDeleteEnemyClicked = async () => {
    await DeleteEnemy(contextMenu.enemy._id)

    // update enemies table
    setEnemies(enemies.filter(enemy => enemy._id !== contextMenu.enemy._id))
    // await getEnemies()
    
    // close context menu
    setContextMenu(InitialContextMenu)
  }

  return (<>
    <Stack id='enemies-panel-container' spacing={2}>
      <CreateEnemy
        onCreate={handleCreateClicked}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className='table-header'>
              <CustomTableColumnHeader>No.</CustomTableColumnHeader>
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
            {enemies.map((enemy, index) => (
              <EnemyRow key={enemy._id} enemy={enemy} listNum={index} onContext={handleContextMenu} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>

    {/* Popups */}
    <Menu
      anchorReference='anchorPosition'
      anchorPosition={contextMenu.anchor}
      open={contextMenu.anchor !== null}
      onClose={_ => setContextMenu(InitialContextMenu)}
      disablePortal
      PaperProps={{onContextMenu: (e) => e.preventDefault()}}
    >
      {/* <MenuItem>Edit</MenuItem> */}
      <MenuItem onClick={handleDeleteEnemyClicked}>Delete</MenuItem>
    </Menu>
  </>)
}

const CustomTableColumnHeader = ({ children }) => {
  return <TableCell sx={{ whiteSpace: 'nowrap' }}>
    <span>{children}</span>
  </TableCell>
}

const EnemyRow = ({ enemy, listNum, onContext }) => {
  const handleOpenContext = (event) => {
    event.preventDefault()
    onContext(event, enemy)
  }

  return (<TableRow className='enemy-row'
    onContextMenu={handleOpenContext}
  >
    <TableCell>{listNum + 1}</TableCell>
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
    items.length > 0
      ? items.map(item => item.name).join(', ')
      : 'none'
  }
  </TableCell>)
}

export default EnemiesPanel