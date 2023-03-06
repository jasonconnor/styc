import { Button, ListSubheader, MenuItem, Select, Stack } from '@mui/material'
import { useState } from 'react'
import CustomTextField from '../../../common/CustomTextField'

/**
 * JSX Component for selecting a list of elements.
 * @param {{
 *  elements: Array<string>,
 *  enemy: object
 *  enemyProperty: String,
 *  updateEnemy: Function,
 *  newElements: Array<string>,
 *  updateNewElements: Function
 * }} props The props passed into the component.
 * @param {Array<string>} props.elements The array of existing element objects.
 * @param {object} props.enemy The enemy enemy object.
 * @param {string} props.enemyProperty The property name of the enemy object.
 * @param {Function} props.updateEnemy The method used to update the enemy object.
 * @param {Array<string>} props.newElements The array of new elements objects.
 * @param {Function} props.updateNewElements The method used to update the new elements array.
 * @returns 
 */
const ElementsSelect = (props) => {
  const {
    elements,
    enemy,
    enemyProperty,
    updateEnemy,
    newElements,
    updateNewElements
  } = props

  const [newElementName, setNewElementName] = useState('')
  const [isTextError, setIsTextError] = useState(null)

  /**
   * Add an element to be created when enemy is created.
   * @param {{
   *  name: String
   * }} element 
   */
  const addNewElement = () => {
    if (newElementName === '') {
      setIsTextError('Element name cannot be empty')
      return
    }

    if (newElements.some(el => el.name.toLowerCase() === newElementName)
      || elements.some(el => el.name.toLowerCase() === newElementName)) {
      // put textfield in error state, name already exists
      setIsTextError('Element with name exists')
      return
    }
    const newElement = { _id: newElementName, name: newElementName }
    updateNewElements(prev => [...prev, newElement])
    setNewElementName('')
  }

  const updateTheEnemyObject = (value) => {
    updateEnemy(prev => {
      const updatedEnemy = { ...prev }
      updatedEnemy[enemyProperty] = value
      return updatedEnemy
    })
  }

  const handleSelectChanged = (event) => {
    updateTheEnemyObject(event.target.value)
  }

  const handleClearTextClicked = () => {
    setIsTextError(null)
    setNewElementName('')
  }

  return (<Stack direction='row' spacing={1} alignItems='center'>
    <Select
      multiple
      displayEmpty
      value={enemy[enemyProperty]}
      onChange={handleSelectChanged}
      renderValue={(selected) => {
        return selected.length !== 0
          ? <span>Selected: {selected.length}</span>
          : <em>Select elements</em>;
      }}
      size='small'
      sx={{
        width: '15rem',
        maxHeight: '2rem'
      }}
      MenuProps={{
        sx: {
          '& .Mui-selected': {
            background: '#f7ba2099'
          }
        }
      }}
    >
      <MenuItem
        onKeyDown={e => e.stopPropagation()}
      >
        <Stack direction='row' alignItems='center' spacing={1}>
          <CustomTextField 
            label={isTextError ? isTextError : 'Add new element'}
            placeholder='"Poison"'
            value={newElementName}
            onChange={event => setNewElementName(event.target.value)}
            error={isTextError}
            onEnterKeyPressed={addNewElement}
            onClearText={handleClearTextClicked}
            updateErrorState={setIsTextError}
          />
          <Button
            variant='contained'
            onClick={addNewElement}
          >
            Add
          </Button>
        </Stack>
      </MenuItem>

      {/* New Elements To Create */}
      {newElements.length &&
        <ListSubheader>- Select from new elements -</ListSubheader>
      }
      {newElements.length && newElements.map(el => (
        <MenuItem value={el._id} key={el._id}>{el.name}</MenuItem>
      ))
      }

      {/* Existing Elements */}
      <ListSubheader>- Select from existing elements -</ListSubheader>
      {elements?.length
        ? elements
          .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0)
          .map(el => (
            <MenuItem value={el._id} key={el._id}>{el.name}</MenuItem>
          ))
        : <span style={{ padding: '1rem', fontStyle: 'italic' }}>
          No existing elements
        </span>}
    </Select>
    <Button variant='outlined' size='small'
      onClick={() => updateTheEnemyObject([])}
    >
      Clear
    </Button>
  </Stack>)
}

export default ElementsSelect