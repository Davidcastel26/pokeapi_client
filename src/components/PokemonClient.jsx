import { Text } from '@chakra-ui/react'
import { BtnCreate } from './ui/BtnCustom'

export const PokemonClient = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 mb-8">
        <Text fontSize='4xl'>Pokemon Client</Text>
        <BtnCreate />
    </div>
  )
}
