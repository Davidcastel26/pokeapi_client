
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

const url = import.meta.env.VITE_POKEMON_API || "http://localhost:8080";

export const getDataApi = async (limit, since) => {

    const data = await fetch(`${url}/pokeapi/pokemon/?limit=${limit}&since=${since}`)
    const pokemonData = await data.json()

    return pokemonData;
}

export const getTypeApi = async () => {

    const data = await fetch(`${url}/pokeapi/pokeType`)
    const typeDataAll = await data.json()

    return typeDataAll;
}

export const handleDelete = async (id, setPokemon) => {
  try {

    const response = await fetch(`${url}/pokeapi/pokemon/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      const newData = await getDataApi(25, 0);
      setPokemon(newData);
    } else {
      console.error('Delete request failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
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

export const searchPokemonsApi = async (searchParam) => {
  const data = await fetch(`${url}/pokeapi/pokemon/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchParam }),
  });

  return await data.json();
};
