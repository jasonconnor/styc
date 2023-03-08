import { useEffect, useState } from 'react'
import { Alert, IconButton, Menu, MenuItem, Snackbar } from '@mui/material'
import { Add } from '@mui/icons-material'
import EnemyFormModal from './EnemyFormModal'
import { GetAllElements } from '../../../../services/Elements.svc'

/**
 * JSX Component for adding the Add Enemy button.
 * @param {{
 *  onCreate: Function
 * }} props The props passed into the component.
 * @param props.onCreate The method to call when the create button is clicked.
 */
const CreateEnemy = ({onCreate}) => {
  const [elements, setElements] = useState([])
  const [newElements, setNewElements] = useState([])
  const [snackbarOpen, setSnakbarOpen] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const openCreateMenu = Boolean(anchorEl)

  // Should probably move this to a global state
  /** Fetch elements from the API. */
  const getElements = () => async () => {
    const response = await GetAllElements()
    if (response.error) {
      // TODO: show error in UI
      return;
    }
    setElements(response.elements)
  }
  useEffect(getElements, [])

  /** Handler for when the add button is clicked to open the create menu. */
  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  /** Handler for when the create menu is closed. */
  const handleCloseCreateMenu = () => {
    setAnchorEl(null)
  }

  /** Handler method for when the create menu option is clicked. */
  const handleMenuOptionCreateClick = () => {
    handleCloseCreateMenu()
    setModalState(true)
  }

  /** Handler for when the modal is closed. */
  const handleCloseCreateModal = (_, reason) => {
    if (reason && reason === 'backdropClick') return;
    setModalState(false)
  }

  /** Handler for when the snackbar is closed. */
  const handleCloseSnackbar = (_, reason) => {
    if (reason && reason === 'clickaway') return
    setSnakbarOpen(false)
  }

  /** Handler method for when the create button is clicked. */
  const handleOnCreate = (updatedEnemiesList) => {
    setSnakbarOpen(true)
    // Parent Callback
    onCreate(updatedEnemiesList)
  }

  /** The JSX Component */
  return (
    <span>
      <IconButton variant='outlined'
        onClick={handleAddClick}
      >
        <Add />
      </IconButton>

      {/* Popups */}

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openCreateMenu}
        onClose={handleCloseCreateMenu}
        disablePortal
      >
        <MenuItem onClick={handleMenuOptionCreateClick}>Add Enemy</MenuItem>
      </Menu>

      <EnemyFormModal
        open={modalState}
        onClose={handleCloseCreateModal}
        onCreate={handleOnCreate}
        elements={elements}
        newElements={newElements}
        updateNewElements={setNewElements}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity='success'
        >
          New enemy created successfully!
        </Alert>
      </Snackbar>
    </span>
  )
}

export default CreateEnemy