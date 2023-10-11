import { Td, Tr, propNames } from '@chakra-ui/react'
import React from 'react'

export const ListBox = ({name, type, poke, isActive}) => {

    console.log(poke)

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
          <Td>{isActive ? "true" :"false"}</Td>
    </>
  )
}
