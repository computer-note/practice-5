import Image from 'next/image';

interface Props {
  pokemonEntry: PokemonEntryType;
}

function PokemonEntry({ pokemonEntry }: Props) {
  return (
    <article className='flex flex-col items-center w-[250px] bg-slate-200'>
      <span className='bg-slate-300 w-[100%] text-center text-xl font-bold'>
        {pokemonEntry.id}:{pokemonEntry.name}
      </span>
      <Image
        src={pokemonEntry.imgUrl}
        width={200}
        height={200}
        alt={`${pokemonEntry.name}의 이미지`}
      />
      <span className='bg-slate-300 w-[100%] text-center'>
        ability:{pokemonEntry.ability}
      </span>
    </article>
  );
}

export default PokemonEntry;
