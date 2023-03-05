import { Checkbox, Stack } from '@mui/material'
import { useState } from 'react'
import ElementsSelect from './ElementsSelect'
import FormModal from '../../../common/FormModal'

const INITIAL_ENEMY = {
  name: undefined,
  levelBase: undefined,
  experienceBase: undefined,
  hpBase: undefined,
  attackBase: undefined,
  attackElement: [],
  attackAccuracy: undefined,
  attackFrequency: undefined,
  defenseBase: undefined,
  defenseEvade: undefined,
  defenseElementResistance: [],
  defenseElementVulnerability: [],
  magicBase: undefined,
  magicElement: [],
  magicAccuracy: undefined,
  magicCooldown: undefined,
  statusChance: Number,
  article: undefined
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

  /** The JSX Component */
  return (
    <FormModal
      open={open}
      onClose={handleClose}
      onCreate={handleCreate}
      header='Create new enemy'
    >
      <ElementsSelect
        elements={elements}
        enemy={newEnemy}
        updateEnemy={setNewEnemy}
        enemyProperty='attackElement'
        newElements={newElementsToAdd}
        updateNewElements={setNewElementsToAdd}
      />
      <Stack direction='row' alignItems='center'>
        <Checkbox
          id='keep-modal-open-checkbox'
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

export default EnemyFormModal