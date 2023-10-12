import { useEffect, useState } from 'react'
import { Card, SimpleGrid, Text } from '@chakra-ui/react'
import { getTypeApi } from '../../utils/data'
import { CartType } from '../ui/CartType'

export const Types = () => {

  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(()=> {
    getTypeApi().then((dataType) => setPokemonTypes(dataType))
  },[])

  return (
    <div className='pb-10'>
    <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 mb-8">
       
        <Text fontSize='4xl'>Pokemon Types</Text>
        
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