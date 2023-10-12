
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

const url ="http://localhost:8080"

export const getDataApi = async (limit, since) => {

    // const data = await fetch(`${linkPokemon}?limit=${limit}&since=${since}`)
    const data = await fetch(`${url}/pokeapi/pokemon/?limit=${limit}&since=${since}`)
    const pokemonData = await data.json()

    // console.log(pokemonData)
    return pokemonData;
}

export const getTypeApi = async () => {

    const data = await fetch(`${url}/pokeapi/pokeType`)
    const typeDataAll = await data.json()

    // console.log(typeDataAll)
    return typeDataAll;
}

export const handleDelete = async (id, setPokemon) => {
  try {
    // Realiza la solicitud de eliminación
    const response = await fetch(`${url}/pokeapi/pokemon/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      // La eliminación fue exitosa, actualiza la lista de Pokémon
      const newData = await getDataApi(25, 0);
      setPokemon(newData);
    } else {
      // Handle errors or non-200 status codes here
      console.error('Delete request failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  console.log('holi' + id);
};

export const getTypeByIdApi = async (id) => {
  const data = await fetch(`${url}/pokeapi/pokeType/${id}`)
  const typeDataId = await data.json()
  return typeDataId
}

export const setPokenStateApi = async (id, body) => {
  await fetch(`${url}/pokeapi/pokemon/${id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
  }).then(() => console.log("changed pokemon state"))
}
