import React from 'react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from '@chakra-ui/react'
import { ModalPokemon } from '../ModalPokemon'

export const BtnCreate = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
    <Button className='w-full sm:w-fit rounded-full ' rightIcon={<AddIcon />} mt={2} onClick={onOpen}>
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
      onClick={onOpen} 
      colorScheme='blue' 
      variant='outline'
      rightIcon={<EditIcon />}  
    >
     edit
    </Button>

    <ModalPokemon finalRef={finalRef} isOpen={isOpen}
      onClose={onClose}
    />
    </>
  )
}