import { getPokemonList } from '@/api/pokemonApi';
import PokemonEntry from '@/components/PokemonEntry';

export default async function Home() {
  const pokemonList = await getPokemonList(1, 6);

  return (
    <main>
      <section className='flex flex-wrap gap-3 bg-green-200 justify-center'>
        {pokemonList.map(pokemonEntry => (
          <PokemonEntry
            key={pokemonEntry.id}
            pokemonEntry={pokemonEntry}
          />
        ))}
      </section>
    </main>
  );
}
