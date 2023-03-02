import { Box, Button, Divider, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import './formModal.scss'

const FormModal = ({ open, onClose, header, children }) => {
  return (
    <Modal
      id='form-modal-container'
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

    >
      <Box className='form-modal-wrapper'>
        <Typography variant='h5' className='form-header-container'>
          {header}
        </Typography>

        <Box className='form-body-container'>
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
          >
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default FormModal