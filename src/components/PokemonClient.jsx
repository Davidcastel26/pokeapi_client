import { Text } from '@chakra-ui/react'

import { ModalPokemon } from './ModalPokemon'
import { BtnCreate } from './ui/BtnCustom'

export const PokemonClient = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 mb-8">
        {/* <h1 className='mr-4'>PokemonClient</h1> */}
        <Text fontSize='4xl'>Pokemon Client</Text>
        {/* <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#3d3838] hover:bg-[#0F2C59] text-white"> */}
          {/* <AddIcon/> */}
        {/* </button> */}
        {/* <ModalPokemon /> */}
        <BtnCreate />
    </div>
  )
}
