import React,{useState} from 'react'
import { Stack, Td, Tr, propNames } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { OptionBtn } from './OptionBtn'
import { setPokenStateApi } from '../../utils/data'

export const ListBox = ({id, name, type, poke, isActive, setPokemon, pokemon}) => {

    // console.log(poke)
    const [pokeState, setPokeState] = useState(isActive);

    const changeState = (id) => {
      setPokeState(() => {
        setPokenStateApi(id, { state: !pokeState });
        return !pokeState;
      });
    };

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
          {pokeState ? (
          <Stack direction="row">
            <Switch
              isChecked={pokeState}
              id="isChecked"
              colorScheme="teal"
              size="lg"
              onChange={() => changeState(poke.idPokemon)}
            />
          </Stack>
        ) : (
          <Stack direction="row">
            <Switch
              colorScheme="teal"
              size="lg"
              onChange={() => changeState(poke.idPokemon)}
            />
          </Stack>
        )}
          </Td>
          <Td>
            <OptionBtn id={id} pokemon={pokemon} setPokemon={setPokemon}/>
          </Td>
    </>
  )
}
