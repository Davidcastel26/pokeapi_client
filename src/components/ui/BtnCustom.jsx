import React from 'react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from '@chakra-ui/react'
import { ModalPokemon } from '../ModalPokemon'

export const BtnCreate = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
    <Button rightIcon={<AddIcon />} mt={4} onClick={onOpen}>
     Create  
    </Button>

    <ModalPokemon finalRef={finalRef} isOpen={isOpen}
      onClose={onClose}
    />
    </>
  )
}


export const BtnUpdate = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
    <Button 
      // mt={4} 
      onClick={onOpen} 
      colorScheme='blue' 
      variant='outline'
      rightIcon={<EditIcon />}  
    >
     {/* <span className='m-2'> </span>  <AddIcon /> */}
     edit
    </Button>

    <ModalPokemon finalRef={finalRef} isOpen={isOpen}
      onClose={onClose}
    />
    </>
  )
}