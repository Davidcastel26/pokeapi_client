import { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    Tfoot,
    Stack,
    Button,
    Input
  } from '@chakra-ui/react';
import { ListBox } from './ui/ListBox';
import { getDataApi, searchPokemonsApi } from '../utils/data';
import { PagesPoke } from './ui/PagesPoke';

export const TablePokemon = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
      if (searchTerm) {
        searchPokemonsApi(searchTerm).then((data) => setPokemon(data));
      } else {
        getDataApi(25, (page - 1) * 25).then((data) => setPokemon(data));
      }
    }, [searchTerm, page]);

    const handleSearchInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const clearSearchInput = () => {
      setSearchTerm('');
    };
  

  return (
    <>
    <div>
    {/* <Stack spacing={3} direction='colum'> */}
    <div className=" w-full sm:w-fit ">
        <Input
          placeholder="Search...."
          // size="lg"
          // width='auto'
          className='mb-4 sm:w-4 '
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        {/* <Stack direction='row'  spacing={4} align='center'> */}
      
        <Button 
          className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-3"
          onClick={() => searchPokemonsApi(searchTerm)}>Search</Button>
        <Button 
          className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-3"
          onClick={clearSearchInput} > Clear </Button>

        {/* </Stack> */}
    </div>
    {/* </Stack> */}

    
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