import { PokemonClient } from "../PokemonClient"
import { TablePokemon } from "../TablePokemon"

export const Hero = () => {
  
  // do the fetch from the pokemons

  return (
    <>
      <PokemonClient />
      <TablePokemon  />
    </>
  )
}
