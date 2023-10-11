import { Button, Stack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

export const OptionBtn = () => {
  return (
    <Stack direction='row' spacing={2}  >
        <Button
            leftIcon={<DeleteIcon />} 
            colorScheme='pink' 
            variant='solid'
        >
        </Button>
        <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'>
            edit
        </Button>
    </Stack>
  )
}
