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
    Tfoot,
    Stack,
    Button,
  } from '@chakra-ui/react'
import { ListBox } from './ui/ListBox'
import { Search } from './Search'
import { getDataApi, handleDelete } from '../utils/data'
import { PagesPoke } from './ui/PagesPoke'
// handleDelete

export const TablePokemon = ({}) => {

    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
      getDataApi(25, (page -1) * 25).then((data)=> setPokemon(data))
    },[page])

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
                        setPokemon={setPokemon}
                        pokemon={pokemon}
                        id={poke.idPokemon}
                        name={poke.name} 
                        type={poke.type.typeName}
                        isActive={poke.isActive}
                        poke={poke}
                    />
                </Tr>
            ))
        }
      </Tbody>
      <Tfoot>
      <PagesPoke 
       currentPage={page}
       onPageChange={(pageNumber) => setPage(pageNumber)}
       />
      </Tfoot>
    </Table>
    </TableContainer>

    </div>
  </>
  )
}
