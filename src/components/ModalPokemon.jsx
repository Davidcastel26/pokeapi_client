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
// import { Formik, Field, Form } from 'formik';
import { Formik, Form } from 'formik'
import { Textfield } from './ui/TextField'

export const ModalPokemon = ({finalRef, isOpen, onClose}) => {
    // ReturnFocus() {
        // const { isOpen, onOpen, onClose } = useDisclosure()
        // const finalRef = React.useRef(null)

        const submitt = (values, actions) => {

          // console.log('submiteand al gran puta pero en minusculas');
  
          const vals = {...values}
              actions.resetForm()
              fetch("http://localhost:8080/pokeapi/pokemon", {
                  method: "POST",
                  credentials:"include",
                  headers:{
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(vals)
              }).catch( err => {
                  console.log(err);
                  return
              }).then(res => {
                  if(!res || !res.ok || res.status >= 400){
                      return
                  }
                  return res.json()
              })
              .then(data => { 
                  if(!data) return;
  
                  setUser({...data})
  
                  if(data.status){
                      setErrorSigUp(data.status)
                  }else if( data.loggedIn){
                      // console.log(data);
                      navigate('/home')
                  }
              })
      }
      
        return (
          <>
            
            {/* <BtnCreate mt={4} onClick={onOpen}/> */}
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Pokemon Facture</ModalHeader>
                <ModalCloseButton />
                
                <Formik 
                  initialValues={{ name: "", typeId:""}}
                  onSubmit={submitt}
                >
                  
                  <VStack 
                    as={Form} 
                    w={{base: "90%", md:"350px"}} 
                    // w={}
                    // w={{base: "90%", md: "500px"}} 
                    m="auto" 
                    justify="center" 
                    h="50vh"
                    spacing="1rem"
                  >
                      {/* <Heading></Heading> */}
                      {/* <Text as="p" color="red.500"> { errorSigUp }</Text> */}
                      {/* <ModalBody> */}
                      <Textfield label="Pokemon Name" name="name" placeholder="Enter a Pokemon name" autoComplete="off" type="text" />
                      <Textfield label="Pokemon Type" name="typeId" placeholder="Enter a type for pokemon" autoComplete="off" type="text" />
                      {/* </ModalBody>   */}
                      {/* <ButtonGroup className='mb-8'> */}
                      <ButtonGroup className='mt-10' >
                        {/* <Button colorScheme='blue' mr={3} onClick={onClose}> */}
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                        {/* <Button onClick={() => navigate("/register")} >Create Account</Button> */}
                        <Button variant='ghost' type="submit">Create</Button>
                      </ButtonGroup>
                  </VStack>
                    {/* ------------------------------------------*/}
                </Formik>
                
                {/* <ModalFooter>
                  
                  
                </ModalFooter> */}
                
              </ModalContent>
            </Modal>
          </>
        )
      }