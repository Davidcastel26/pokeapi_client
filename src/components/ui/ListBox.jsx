import React from 'react'
import { Stack, Td, Tr, propNames } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { OptionBtn } from './OptionBtn'

export const ListBox = ({name, type, poke, isActive}) => {

    // console.log(poke)

  return (
    <>
          <Td>{name}</Td>
          <Td>{type}</Td>
          {
            poke.evolutionTo && poke.evolutionTo.length > 0 
            ?   poke.evolutionTo.map((evoName) => (
                    
                    <Td key={evoName.idEvolution}>
                        {` 
                            ${evoName.evoName1} -  
                            ${evoName?.evoName2} 
                            ${evoName.evoName3 === null ? '':`- ${evoName.evoName3}` } 
                        `}
                    </Td>
                ))
            : <Td> No evoultion chain</Td>
          }
          <Td>
            {
                isActive 
                ? <Stack direction='row'>
                    <Switch 
                        isChecked 
                        id='isChecked' 
                        colorScheme='teal' 
                        size='lg' 
                    />
                </Stack>
                :
                <Stack direction='row'>
                    <Switch 
                        isReadOnly
                        colorScheme='teal' 
                        size='lg' 
                        
                    />
                </Stack>
            }
          </Td>
          <Td>
            <OptionBtn />
          </Td>
    </>
  )
}
