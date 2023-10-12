import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    useDisclosure,
    VStack, 
    ButtonGroup,
    Heading,   
    Text
  } from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'
import { Formik, Field, Form } from 'formik';

export const ModalPokemon = ({finalRef, isOpen, onClose}) => {
    // ReturnFocus() {
        // const { isOpen, onOpen, onClose } = useDisclosure()
        // const finalRef = React.useRef(null)
      
        return (
          <>
            
            {/* <BtnCreate mt={4} onClick={onOpen}/> */}


            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
               
                  <ModalBody>

        
                    
                  </ModalBody>
                    
                
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant='ghost' type="submit">Create</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }