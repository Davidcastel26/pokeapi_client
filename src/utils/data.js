const linkOneType = 'http://localhost:8080/pokeapi/pokeType/?limit=1';
const linkTypes = 'http://localhost:8080/pokeapi/pokeType';

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

    // const data = await fetch(`${linkPokemon}?limit=${limit}&since=${since}`)
    const data = await fetch(`http://localhost:8080/pokeapi/pokemon/?limit=${limit}&since=${since}`)
    const pokemonData = await data.json()

    // console.log(pokemonData)
    return pokemonData;
}

export const getTypeApi = async () => {

    const data = await fetch('http://localhost:8080/pokeapi/pokeType')
    const typeDataAll = await data.json()

    // console.log(typeDataAll)
    return typeDataAll;
}