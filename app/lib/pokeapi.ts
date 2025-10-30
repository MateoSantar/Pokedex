export const API_URL = " https://pokeapi.co/api/v2";

export type PokemonDetail = {
    name: string;
    sprites: { front_default: string | null };
    types: { slot: number; type: string }[];
    height: number;
    weight: number;
    stats: { base_stat: number; stat: { name: string } }[];
}
export type pokemonListItem = {
    name: string;
    url: string;
}

export type PokemonListResponse = {
    count: number;
    results: pokemonListItem[];
}

export async function getPokemonPage(limit = 20, offset = 0): Promise<PokemonListResponse> {
    const poke_data = await fetch(`${API_URL}/pokemon?limit${limit}&offset=${offset}`,
        {
            next: { revalidate: 60 }
        });

    if (!poke_data.ok) throw new Error('Error fetching list');
    return poke_data.json();
}


export async function getPokemon(name: string){
    const poke_data = await fetch(`${API_URL}/pokemon/${name}`,
        {
            next: { revalidate: 60 }
        }
    );
    
    if (!poke_data.ok) throw new Error('Not found');
    return poke_data.json();
}

