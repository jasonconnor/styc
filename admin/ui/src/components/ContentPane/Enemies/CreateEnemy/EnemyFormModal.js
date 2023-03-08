import { Checkbox, Stack, Table, TableBody, TableCell, TableRow, TextField, Tooltip } from '@mui/material'
import { useState } from 'react'
import ElementsSelect from './ElementsSelect'
import FormModal from '../../../common/FormModal'
import { Info } from '@mui/icons-material'
import CustomTextField from '../../../common/CustomTextField'
import { CreateNewEnemy } from '../../../../services/Enemies.svc'

const INITIAL_ENEMY = {
  name: '',
  levelBase: 1,
  experienceBase: 0,
  hpBase: 1,
  attackBase: 1,
  attackElement: [],
  attackAccuracy: 0.8,
  attackFrequency: 1,
  defenseBase: 1,
  defenseEvade: 0.1,
  defenseElementResistance: [],
  defenseElementVulnerability: [],
  magicBase: 0,
  magicElement: [],
  magicAccuracy: 0,
  magicCooldown: 0,
  statusChance: 0,
  article: null
}

/**
 * JSX Component for the Enemy Creation modal.
 * @param {{
 *  open: Boolean,
 *  onClose: Function,
 *  onCreate: Function,
 *  elements: Array<{
 *    _id: String,
 *    name: String 
 *  }>
 * }} props The props passed into the component.
 * @param props.open Indicates whether or not the modal is open.
 * @param props.onClose Method to call when the modal is closed.
 * @param props.onCreate Method to call when the create button is clicked.
 * @param props.elements The array of existing elements.
 * @param props.elements._id The ID of the element.
 * @param props.elements.name The name of the element.
 */
const EnemyFormModal = ({ open, onClose, onCreate, elements }) => {
  const [newEnemy, setNewEnemy] = useState(INITIAL_ENEMY)
  const [newElementsToAdd, setNewElementsToAdd] = useState([])
  const [keepOpen, setKeepOpen] = useState(false)

  /** Handler for when the modal is closed. */
  const handleClose = () => {
    setNewEnemy(INITIAL_ENEMY)
    onClose()
  }

  /** Handler for when the create button is clicked. */
  const handleCreate = async () => {
    const {enemies: updatedEnemiesList, error} = await CreateNewEnemy(newEnemy)
    if (error) return

    if (keepOpen) {
      setNewEnemy(INITIAL_ENEMY)
      return
    }

    handleClose()
    
    onCreate(updatedEnemiesList)
  }

  /**
   * Method to update the specific property value of the new enemy state object.
   * @param {*} propertyName The name of the property to update.
   * @param {*} value The value to update the given property to.
   */
  const updateEnemyProperty = (propertyName, value) => {
    setNewEnemy(prev => {
      const newEnemyObj = { ...prev }
      newEnemyObj[propertyName] = value
      return newEnemyObj
    })
  }

  /** The JSX Component */
  return (
    <FormModal
      open={open}
      onClose={handleClose}
      onCreate={handleCreate}
      header='Create new enemy'
    >
      <Table>
        <TableBody>
          <EnemyFormTableRow
            name='Name *'
            description='The name of the enemy. (Required)'
            input={(
              <CustomTextField
                label='Enemy Name'
                placeholder='"Wild Boar"'
                required={true}
                value={newEnemy.name}
                onChange={(event) => updateEnemyProperty('name', event.target.value)}
                onClearText={_ => updateEnemyProperty('name', '')}
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Level *'
            description='The base level of the enemy. (Required)'
            input={(
              <TextField
                label='Base Lvl'
                value={newEnemy.levelBase}
                onChange={(event) => updateEnemyProperty('levelBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Experience *'
            description='The base experience awarded for defeating the enemy. (Required)'
            input={(
              <TextField
                label='Base Exp'
                value={newEnemy.experienceBase}
                onChange={(event) => updateEnemyProperty('experienceBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Health Points *'
            description='The base hp of the enemy. (Required)'
            input={(
              <TextField
                label='Base HP'
                value={newEnemy.hpBase}
                onChange={(event) => updateEnemyProperty('hpBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Attack Power *'
            description='The base atk power of the enemy. (Required)'
            input={(
              <TextField
                label='Base Atk'
                value={newEnemy.attackBase}
                onChange={(event) => updateEnemyProperty('attackBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Attack Elements'
            description="The elements of the enemy's base attack."
            input={(
              <ElementsSelect
                elements={elements}
                enemy={newEnemy}
                updateEnemy={setNewEnemy}
                enemyProperty='attackElement'
                newElements={newElementsToAdd}
                updateNewElements={setNewElementsToAdd}
              />
            )}
          />

          <EnemyFormTableRow
            name='Attack Accuracy *'
            description='The attack accuracy of the enemy. Should be a decimal number between 0 and 1. (Required)'
            input={(
              <TextField
                label='Atk Accuracy'
                value={newEnemy.attackAccuracy}
                onChange={(event) => updateEnemyProperty('attackAccuracy', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Attack Frequency *'
            description="The frequency of the enemy's attack per seconds. (Required)"
            input={(
              <TextField
                label='Atk Freq'
                value={newEnemy.attackFrequency}
                onChange={(event) => updateEnemyProperty('attackFrequency', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Defense Power *'
            description='The base def power of the enemy. (Required)'
            input={(
              <TextField
                label='Base Def'
                value={newEnemy.defenseBase}
                onChange={(event) => updateEnemyProperty('defenseBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Evasion *'
            description='The evasiveness of the enemy. Should be a decimal between 0 and 1. (Required)'
            input={(
              <TextField
                label='Evasion'
                value={newEnemy.defenseEvade}
                onChange={(event) => updateEnemyProperty('defenseEvade', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Elemental Resistances'
            description="The elements the enemy is resistent to."
            input={(
              <ElementsSelect
                elements={elements}
                enemy={newEnemy}
                updateEnemy={setNewEnemy}
                enemyProperty='defenseElementResistance'
                newElements={newElementsToAdd}
                updateNewElements={setNewElementsToAdd}
              />
            )}
          />

          <EnemyFormTableRow
            name='Elemental Weakness'
            description="The elements the enemy is vulnerable to."
            input={(
              <ElementsSelect
                elements={elements}
                enemy={newEnemy}
                updateEnemy={setNewEnemy}
                enemyProperty='defenseElementVulnerability'
                newElements={newElementsToAdd}
                updateNewElements={setNewElementsToAdd}
              />
            )}
          />

          <EnemyFormTableRow
            name='Base Magic Power'
            description='The base magic power of the enemy.'
            input={(
              <TextField
                label='Base Magic'
                value={newEnemy.magicBase}
                onChange={(event) => updateEnemyProperty('magicBase', event.target.value)}
                size='small'
                type='number'
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Magic Elements'
            description="The elements of the enemy's magical attack."
            input={(
              <ElementsSelect
                elements={elements}
                enemy={newEnemy}
                updateEnemy={setNewEnemy}
                enemyProperty='magicElement'
                newElements={newElementsToAdd}
                updateNewElements={setNewElementsToAdd}
              />
            )}
          />

          <EnemyFormTableRow
            name='Magic Accuracy'
            description='The accuracy of the magical attack of the enemy. Should be a decimal number between 0 and 1.'
            input={(
              <TextField
                label='Magic Accuracy'
                value={newEnemy.magicAccuracy}
                onChange={(event) => updateEnemyProperty('magicAccuracy', event.target.value)}
                size='small'
                type='number'
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Magic Cooldown'
            description='The base magic power of the enemy.'
            input={(
              <TextField
                label='Magic Cooldown'
                value={newEnemy.magicCooldown}
                onChange={(event) => updateEnemyProperty('magicCooldown', event.target.value)}
                size='small'
                type='number'
                fullWidth
              />
            )}
          />

          <EnemyFormTableRow
            name='Status Chance'
            description='The percentage chance of applying a status affect to its opponent. Should be a decimal between 0 and 1.'
            input={(
              <TextField
                label='Status Chance'
                value={newEnemy.statusChance}
                onChange={(event) => updateEnemyProperty('statusChance', event.target.value)}
                size='small'
                type='number'
                fullWidth
              />
            )}
          />

        </TableBody>
      </Table>

      <Stack direction='row' alignItems='center'>
        <Checkbox
          id='keep-modal-open-checkbox'
          size='small'
          checked={keepOpen}
          onChange={() => setKeepOpen(prev => !prev)}
        />
        <label htmlFor='keep-modal-open-checkbox'
          style={{ cursor: 'pointer' }}
        >
          Keep modal open after create
        </label>
      </Stack>
    </FormModal>
  )
}

/**
 * JSX Component for
 * @param {{
 *  name: String,
 *  description: String,
 *  input: JSX.Element
 * }} props 
 * @param props.name The display name.
 * @param props.description The tooltip description.
 * @param props.input The input component.
 */
const EnemyFormTableRow = (props) => {
  const {
    name,
    description,
    input
  } = props

  return (<TableRow>
    <TableCell>
      <Tooltip title={description}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <span>{name}</span>
          <Info sx={{ fontSize: '1rem' }} />
        </Stack>
      </Tooltip>
    </TableCell>
    <TableCell>
      {input}
    </TableCell>
  </TableRow>)
}

export default EnemyFormModal