import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const CartType = ({typeName, pokemonType, id}) => {
  return (
   <>
    <CardHeader>
    <Heading size='md'> {typeName.toUpperCase()} </Heading>
  </CardHeader>
  <CardBody>
    <Text>Type id: {id} </Text>
  </CardBody>
  <CardBody>
    <Text>Total pokemons with this type: {pokemonType.length}</Text>
  </CardBody>
  <CardFooter>
    <Link to={`/type/${id}`} >
        <Button>View here</Button>
    </Link>
  </CardFooter>
  </>
  )
}
