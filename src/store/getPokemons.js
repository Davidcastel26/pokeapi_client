import { create} from 'zustand';

const url = import.meta.env.VITE_POKEMON_API || "http://localhost:8080";

// interface CounterState {
//     count: number 
//     title: string 
//     pokemons: Pokemons[]
//     increment: (value: number) => void
//     getPokemons: () => Promise<void>
//     clearStore: () => void
//     multyply: (value:number) => void 
// }

// export const usePokemonStore = create<CounterState>((set) => ({
export const usePokemonStore = create((set, get) => ({
    pokemons: [],
    evolution: ['1'],
    count: 20,
    title: 'Some title',
    increment: (value) => set( state => ({
        count: state.count + value
    })),
    getPokemons: async (limit, since) => {
        const data = await fetch(`${url}/pokeapi/pokemon/?limit=${limit}&since=${since}`)
        const pokemonData = await data.json()
        console.log(pokemonData)
        // return pokemonData;
        set(state => ({
            ...state,
            pokemons: pokemonData
        }))
    },
    clearStore: ( ) => {
        set({}, true)
    },
    mulitply: (value) => {
        const {count} = get()
        set({count: count * value})
    }
}))