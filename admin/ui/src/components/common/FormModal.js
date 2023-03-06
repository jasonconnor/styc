import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import './formModal.scss'

const FormModal = ({ open, onClose, onCreate, header, children }) => {
  return (
    <Modal
      id='form-modal-container'
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      keepMounted={false}
      disablePortal
    >
      <Box className='form-modal-wrapper' 
      >
        <Typography variant='h5' className='form-header-container'>
          {header}
        </Typography>

        <Box className='form-body-container' 
          sx={{
            maxHeight: '50vh',
            overflowY: 'auto'
          }}
        >
          {children}
        </Box>

        <Stack className='form-footer-container'
          direction='row'
          spacing={2}
          justifyContent='flex-end'
        >
          <Button
            color='primary'
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant='contained'
            color='primary'
            onClick={onCreate}
          >
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default FormModal