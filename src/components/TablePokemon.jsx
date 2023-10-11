import { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  import { ListBox } from './ui/ListBox'
  import { Search } from './Search'
import { getDataApi } from '../utils/data'

export const TablePokemon = () => {

    const [pokemon, setPokemon] = useState([])

    

    useEffect(() => {
        getDataApi(5,0).then((data)=> setPokemon(data))
    },[])

  return (
    <>
    <div className='mb-6'>
    <Search />

    </div>
    <div>
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>Pokemons API</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Type</Th>
          <Th>Evolution Chain</Th>
          <Th>Is Active</Th>
          <Th>Settings</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            pokemon.map((poke) => (
                <Tr key={poke.idPokemon} >
                    <ListBox 
                        name={poke.name} 
                        type={poke.type.typeName}
                        isActive={poke.isActive}
                        poke={poke}
                    />
                </Tr>
            ))
        }
      </Tbody>
    </Table>
    </TableContainer>

    </div>
  </>
  )
}
