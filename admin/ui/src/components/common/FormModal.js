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
      <Stack className='form-modal-wrapper'
        spacing={2}
      >
        <Typography variant='h5' className='form-header-container'>
          {header}
        </Typography>

        <Box className='form-body-container'>
          {children}
        </Box>

        <Stack className='form-footer-container'
          direction='row'
          spacing={1}
          justifyContent='flex-end'
        >
          <Button variant='outlined'
            color='secondary'
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant='contained'
            color='secondary'
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default FormModal