// app/pokedex/[name]/page.tsx
import Link from 'next/link';
import { getPokemon } from '@/app/lib/pokeapi';
import StatsBar from '@/app/components/stats-bar';
export default async function PokemonPage({ params }: { params: Promise<{ page: string }> }) {
  const parameters = await params;
  const p = await getPokemon(parameters.page);


  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4 bg-gray-100 rounded shadow">
      <Link href="/pokedex" className="text-sm underline bg-blue-200 p-3 shadow rounded-full">
        ← Volver
      </Link>

      <header className={`flex items-center gap-4 mt-3`}>
        {p.sprites.front_default && (
          <img
            src={p.sprites.front_default}
            alt={p.name}
            width={96}
            height={96}
          />
        )}

        <div>
          <h1 className="text-2xl font-semibold capitalize">{p.name}</h1>
          <p className="text-sm text-gray-500">
            Tipos: {p.types.map(t => t.type.name).join(', ')} — Altura: {p.height / 10} m — Peso: {p.weight / 10} kg
          </p>
        </div>
      </header>

      <section>
        <h2 className="font-medium mb-2">Base stats</h2>
        <div className="bg-blue-100 rounded p-5 grid grid-cols-2 gap-3">
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
