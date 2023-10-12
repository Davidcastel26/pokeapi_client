import React, {useState, useEffect} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
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
import { getTypeApi } from '../utils/data'

export const ModalPokemon = ({finalRef, isOpen, onClose}) => {

        // console.log(getTypeApi())

        const [type, setfirst] = useState([])
        const [seletedValue, setSelectedValue] = useState('')

        const handleChange = (event ) => {
          setSelectedValue(event.target.value)
          // console.log(event.target.value)
        }

        // console.log(handleChange)

        useEffect(() => {
          getTypeApi().then(types => setfirst(types))
        }, [])
        

        const submitt = (values, actions) => {

          const vals = {...values}
              actions.resetForm()
              fetch("http://localhost:8080/pokeapi/pokemon", {
                  method: "POST",
                  // credentials:"include",
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
                  initialValues={{ name:"", typeId:""}}
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
                      {/* <Textfield label="Pokemon Type" name="typeId" placeholder="Enter a type for pokemon" autoComplete="off" type="text" /> */}
                      <Select placeholder='Select option' onChange={handleChange}>
                      {
                          type.map( t => {
                            
                            return <option name={t.idTypes} value={t.idTypes} key={t.idTypes}>
                              {
                                t.typeName
                              }
                            </option>
                          })
                        }
                      </Select>
                      {/* </ModalBody>   */}
                      {/* <ButtonGroup className='mb-8'> */}
                      <ButtonGroup className='mt-10' >
                        {/* <Button colorScheme='blue' mr={3} onClick={onClose}> */}
                        <Button variant='ghost' mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                        {/* <Button onClick={() => navigate("/register")} >Create Account</Button> */}
                        <Button  colorScheme='blue' type="submit">Create</Button>
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