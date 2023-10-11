import { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
import { getTypeApi } from '../../utils/data'
import { CartType } from '../ui/cartType'

export const Types = () => {

  const [pokemonTypes, setPokemonTypes] = useState([])
    
  useEffect(()=> {
    getTypeApi().then((dataType) => setPokemonTypes(dataType))
  },[])

  // console.log(pokemonTypes)

  return (
    <div className='pb-10'>
    <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 mb-8">
        {/* <h1 className='mr-4'>PokemonClient</h1> */}
        <Text fontSize='4xl'>Pokemon Types</Text>
        <Text fontSize='2xl'>total types {pokemonTypes.length}</Text>
        {/* <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#3d3838] hover:bg-[#0F2C59] text-white"> */}
          {/* <span className='m-2'>Create </span> <AddIcon/> */}
        {/* </button> */}
    </div>
  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    {
      pokemonTypes.map((pokemonType)=>(
        <Card key={pokemonType.idTypes}>
          <CartType 
            typeName={pokemonType.typeName}
            id={pokemonType.idTypes}
            pokemonType={pokemonType.pokemon}
          />
        </Card>
      ))
    }
  </SimpleGrid>
  </div>
  )
}
