// app/pokedex/[name]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getPokemon, PokemonDetail } from '@/app/lib/pokeapi';
import StatsBar from '@/app/components/stats-bar';
import Error from '../error';
import { Press_Start_2P } from 'next/font/google';
import { type_icons } from '@/app/components/type_icons';
const pressTwoStart = Press_Start_2P({ weight: '400' });
export default async function PokemonPage({ params }: { params: Promise<{ page: string }> }) {
  const parameters = await params;
  let p: PokemonDetail;
  try {
    p = await getPokemon(parameters.page);


  } catch (error) {
    return <Error error={error as Error} />
  }


  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4 bg-gray-200 rounded shadow mt-5 border-4">
      <Link href="/pokedex" className="text-sm bg-blue-900 text-yellow-400 p-3 shadow rounded-md">
        ← Volver
      </Link>

      <header className={`flex flex-col md:flex-row items-center gap-4 mt-5 bg-gray-30 rounded-lg shadow`}>
        {p.sprites.front_default && (
          <div className="relative w-32 h-32 mb-0 pt-2">
            <Image
              src={p.sprites.front_default as string}
              alt={p.name}
              fill
              className="object-contain filter drop-shadow-lg"
              unoptimized
            />
          </div>

        )}

        <div>
          <h1 className={`text-2xl font-semibold capitalize text-center md:text-left ${pressTwoStart.className}`}>{p.name}</h1>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                {p.types.map((t) => {
                  const typeName = t.type.name as keyof typeof type_icons;
                  const Icon = type_icons[typeName]; // buscamos el icono
                  return (
                    <span key={typeName} className={`flex items-center gap-3 ${pressTwoStart.className}`}>
                      {Icon && <Image src={Icon} alt={typeName} width={40} height={40} />}
                      {typeName.toUpperCase()}
                    </span>
                  );
                }
                )}

              </div>
            <p className="text-sm text-gray-500 pl-3 pb-2 ">
              Altura: {p.height / 10} m — Peso: {p.weight / 10} kg
            </p>
          </div>

        </div>
      </header>

      <section>
        <h2 className={`font-medium mb-2 text-center ${pressTwoStart.className}`}>Base stats</h2>
        <div className="bg-blue-100 rounded p-5 grid grid-cols-1 md:grid-cols-2 gap-3 ">
          {p.stats.map(s => (
            <StatsBar
              key={s.stat.name}
              label={s.stat.name}
              value={s.base_stat}
              max={200}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
