import { getPokemonPage, API_URL } from "@/app/lib/pokeapi";
import Link from "next/link";
import SearchClient from "./SearchClient";
function getOffset(params: { page?: string }) {
    const page = Number(params.page ?? '1');
    return { page: Math.max(1, page), offset: (Math.max(1, page)) * 20 };
}

export default async function Pokedex({ 
    searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const params = await searchParams;
    const { page, offset } = getOffset(params);
    const data = await getPokemonPage(20, offset);
    

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-semibold">Pokédex</h1>

            <SearchClient />

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.results.map((p) => (
                <li key={p.name}>
                    <PokemonCard name={p.name} />
                </li>
                ))}

            </ul>
            <nav className="flex justify-between pt-4">
                <Link href={`/pokedex?page=${page - 1}`}
                    aria-disabled={page === 1}
                    className="border px-3 py-1 rounded">
                    Anterior
                </Link>
                <span>Página {page}</span>
                <Link href={`/pokedex?page=${page + 1}`} className="border px-3 py-1 rounded">
                    Siguiente
                </Link>
            </nav>
        </main>
    )
}


async function PokemonCard({ name }: { name: string }) {
    const idFromName = await IdFromName(name);

    return (
        <a href={`/pokedex/${name}`} className="block border rounded p-3 hover:shadow">
            <div className="text-sm text-gray-500">{name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromName}.png`} alt={name}
                className="w-full h-32 object-contain"
            />
        </a>
    );
}

async function IdFromName(name: string) {
    const pokemon_data_raw = await fetch(`${API_URL}/pokemon/${name}`);
    const pokemon_data = await pokemon_data_raw.json();
    return pokemon_data.id;
}
