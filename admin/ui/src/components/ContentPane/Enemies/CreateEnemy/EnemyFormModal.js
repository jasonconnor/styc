import { Checkbox, Stack, Table, TableBody, TableCell, TableRow, TextField, Tooltip } from '@mui/material'
import { useState } from 'react'
import ElementsSelect from './ElementsSelect'
import FormModal from '../../../common/FormModal'
import { Info } from '@mui/icons-material'
import CustomTextField from '../../../common/CustomTextField'

const INITIAL_ENEMY = {
  name: '',
  levelBase: 1,
  experienceBase: null,
  hpBase: 1,
  attackBase: 1,
  attackElement: [],
  attackAccuracy: 0.8,
  attackFrequency: 1,
  defenseBase: 1,
  defenseEvade: 0.1,
  defenseElementResistance: [],
  defenseElementVulnerability: [],
  magicBase: null,
  magicElement: [],
  magicAccuracy: null,
  magicCooldown: null,
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
  const handleCreate = () => {
    onCreate()

    if (keepOpen) {
      setNewEnemy(INITIAL_ENEMY)
      return
    }

    handleClose()
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
                label='The name of the enemy'
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
                label='The base level of the enemy.'
                value={newEnemy.levelBase}
                onChange={(event) => updateEnemyProperty('levelBase', event.target.value)}
                size='small'
                type='number'
                required
                fullWidth
              />
            )}
          />

          <TableRow>
            <TableCell>Attack Elements</TableCell>
            <TableCell>
              <ElementsSelect
                elements={elements}
                enemy={newEnemy}
                updateEnemy={setNewEnemy}
                enemyProperty='attackElement'
                newElements={newElementsToAdd}
                updateNewElements={setNewElementsToAdd}
              />
            </TableCell>
          </TableRow>
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
      {/* <CustomTextField 
        label='The name of the enemy'
        placeholder='"Wild Boar"'
        value={newEnemy.name}
        onChange={(event) => updateEnemyProperty('name', event.target.value)}
        onClearText={_ => updateEnemyProperty('name', '')}
      /> */}
    </TableCell>
  </TableRow>)
}

export default EnemyFormModal