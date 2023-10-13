import { Button, Stack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { BtnUpdate } from './BtnCustom'
import { handleDelete } from '../../utils/data'

export const OptionBtn = ({id, pokemon, setPokemon}) => {

  return (
    <Stack direction='row' spacing={2}  >
        <Button
            onClick={() => handleDelete(id, setPokemon)}
            leftIcon={<DeleteIcon />} 
            colorScheme='pink' 
            variant='solid'
        >
        </Button>
        <BtnUpdate />
    </Stack>
  )
}
