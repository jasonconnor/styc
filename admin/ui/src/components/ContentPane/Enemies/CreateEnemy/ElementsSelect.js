import { Cancel } from '@mui/icons-material'
import { Button, IconButton, ListSubheader, MenuItem, Select, Stack, TextField } from '@mui/material'
import { useState } from 'react'

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
 const [isTextError, setIsTextError] = useState(false)

 /**
  * Add an element to be created when enemy is created.
  * @param {{
  *  name: String
  * }} element 
  */
 const addNewElement = () => {
   if (newElements.some(el => el.name.toLowerCase() === newElementName) 
     || elements.some(el => el.name.toLowerCase() === newElementName)) {
     // put textfield in error state, name already exists
     setIsTextError(true)
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

 const handleChangedKeyPressed = (event) => {
   if (isTextError) setIsTextError(false)

   if (event.key === 'Enter') addNewElement()
 }

 const handleClearTextClicked = () => {
   setIsTextError(false)
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
         <TextField
           label={isTextError ? 'Element with name exists' : 'Add new element'}
           placeholder='"Poison"'
           size='small'
           value={newElementName}
           onChange={event => setNewElementName(event.target.value)}
           onKeyDown={handleChangedKeyPressed}
           error={isTextError}
           InputProps={{
             endAdornment: <IconButton onClick={handleClearTextClicked}><Cancel /></IconButton>
           }}
           sx={{
             '& > .MuiInputBase-root': {
               paddingRight: '0'
             }
           }}
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