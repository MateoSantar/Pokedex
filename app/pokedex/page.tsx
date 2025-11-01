import { getPokemonPage, API_URL } from "@/app/lib/pokeapi";
import Link from "next/link";
import Image from "next/image";
import SearchClient from "./SearchClient";
import pokelogo from '@/public/pokelogo.svg';
import AnimatedCard from "../components/animated-card";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
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
        <main className="max-w-4xl mx-auto my-4 p-4 space-y-4 bg-blue-200 rounded-lg shadow-lg border-3 ">
            <Image
                src={pokelogo.src}
                alt="Poke Logo"
                width="148"
                height="148"
                className="filter drop-shadow-lg mx-auto md:ml-0 hover:transform-[scale(1.1)] transition" />
            <SearchClient />

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.results.map((p) => (
                    <li key={p.name}>
                        <PokemonCard name={p.name} />
                    </li>
                ))}

            </ul>
            <nav className="flex justify-between items-center pt-4">
                <Link href={`/pokedex?page=${page - 1}`}
                    aria-disabled={page === 1}
                    className="border px-3 py-1 rounded bg-blue-900 text-yellow-400">
                    <ArrowLongLeftIcon className="size-8 mx-3"/>
                </Link>
                <span>Página {page}</span>
                <Link href={`/pokedex?page=${page + 1}`} className="border px-3 py-1 rounded bg-blue-900 text-yellow-400">
                    <ArrowLongRightIcon  className="size-8 mx-3"/>
                </Link>
            </nav>
        </main>
    )
}


async function PokemonCard({ name }: { name: string }) {
    const idFromName = await IdFromName(name);

    return (
        <AnimatedCard>

            <a href={`/pokedex/${name}`} className="block border rounded p-3 hover:shadow bg-gray-100 hover:transform-[scale(0.95)] hover:rounded-lg transition">
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromName}.png`}
                    alt={name}
                    width={148}
                    height={148}
                    className="w-full h-32 object-contain filter drop-shadow-sm"

                />
            </a>
        </AnimatedCard>

    );
}

async function IdFromName(name: string) {
    const pokemon_data_raw = await fetch(`${API_URL}/pokemon/${name}`);
    const pokemon_data = await pokemon_data_raw.json();
    return pokemon_data.id;
}
