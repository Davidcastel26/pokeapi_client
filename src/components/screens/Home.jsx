import { Text } from '@chakra-ui/react'
import {shallow} from 'zustand/shallow';
import React, { useEffect, useState } from 'react'
import { usePokemonStore } from '../../store/getPokemons'

export const Home = () => {

  const [page, setPage] = useState(1);

  const {count, title, pokemons, evolution} = usePokemonStore(( state ) => ({
    pokemons: state.pokemons,
    evolution: state.evolution,
    count: state.count,
    title: state.title,
  }), shallow)

  const {increment, getPokemons, clearStore, mulitply} = usePokemonStore()

  useEffect(()=>{
    getPokemons(25, (page - 1) * 25)
  },[])

  return (
    <div className="grid gird-cols-1 lg:grid-cols-12">
        <div>
      <h1>{title}: {count}</h1>
      <button
        onClick={() => { increment(10)}}
      >
        increment by 10
      </button>
      <button onClick={() => clearStore()}>
        clear
      </button>
      <button onClick={()=> mulitply(2)}>
        multiply by 2
      </button>
      <hr />
      {
        // pokemons.map(poke => (
        //   <p key={poke.idPokemon}>poke</p>
        // ))
        JSON.stringify(pokemons)
      }
    </div>
       
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <Text className=' mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                Welcome to Pokemon Web Inform App
            </Text>
            <Text className="text-base sm:text-lg mb-6 lg:text-xl ">
            Create a TypeScript-based REST API using Node.js and Express.js as the framework, with PostgreSQL as the database, and Prisma as the Object-Relational Mapping (ORM) tool. This api will enable you to build a robust and efficient backend system for the front-ends' applications, ensuring seamless data management and powerful REST endpoints. 
            </Text>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <img src='../assets/pokemon.png' alt="logo" width={400} height={400}/>
        </div>
    </div>
  )
}
