import { useEffect, useState } from 'react'
import { Alert, IconButton, Menu, MenuItem, Snackbar } from '@mui/material'
import { Add } from '@mui/icons-material'
import EnemyFormModal from './EnemyFormModal'
import { GetAllElements } from '../../../../services/Elements.svc'


const CreateEnemy = (props) => {
  const {
    onCreate
  } = props

  const [elements, setElements] = useState([])
  const [newElements, setNewElements] = useState([])
  const [snackbarOpen, setSnakbarOpen] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const openCreateMenu = Boolean(anchorEl)

  // Should probably move this to a global state
  const getElements = () => async () => {
    const response = await GetAllElements()
    if (response.error) {
      // TODO: show error in UI
      return;
    }
    setElements(response.elements)
  }
  useEffect(getElements, [])

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseCreateMenu = () => {
    setAnchorEl(null)
  }

  const handleCreateClick = () => {
    handleCloseCreateMenu()
    setModalState(true)
  }

  const handleCloseCreateModal = (_, reason) => {
    if (reason && reason === 'backdropClick') return;
    setModalState(false)
  }

  const handleCloseSnackbar = (_, reason) => {
    if (reason && reason === 'clickaway') return
    setSnakbarOpen(false)
  }

  const handleOnCreate = async () => {
    const result = await onCreate()
    console.log('create enemy result', result)
    //setSnakbarOpen(true)
  }

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
        <MenuItem onClick={handleCreateClick}>Add Enemy</MenuItem>
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