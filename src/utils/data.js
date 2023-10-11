// import dotenv from 'dotenv';
// import * as dotenv from 'dotenv'
// import 'dotenv/config'
// dotenv.config();

export const navInfoLinks = [
    {
        title:'Home',
        path: '/hero',
    },
    {
        title:'Types',
        path:'/types'
    },
]

export const getDataApi = async (limit, since) => {

    // const data = await fetch(`${env.POKEMON_API}?limit=${limit}&since=${since}`)
    const data = await fetch(`http://localhost:8080/pokeapi/pokemon/?limit=${limit}&since=${since}`)
    const pokemonData = await data.json()

    // console.log(pokemonData)
    return pokemonData;
}