'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getPokemonList } from '@/api/pokemonApi';
import PokemonEntry from './PokemonEntry';
import PageNavigation from './PageNavigation';
import { QKEY_POKEMON_LIST } from '@/constants/query';

interface Props {
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
}

function PokemonList({
  totalCount,
  currentPage,
  itemsPerPage,
}: Props) {
  const [page, setPage] = useState<number>(currentPage);

  const {
    data: pokemonList,
    isPending,
    error,
  } = useQuery({
    queryKey: [QKEY_POKEMON_LIST, page],
    queryFn: () => getPokemonList(page, 6),
  });

  if (isPending || error) {
    return <h1>pending or error</h1>;
  }

  return (
    <section className='flex flex-wrap gap-3 bg-green-200 justify-center'>
      {pokemonList.map(pokemonEntry => (
        <PokemonEntry
          key={pokemonEntry.id}
          pokemonEntry={pokemonEntry}
        />
      ))}
      <PageNavigation
        totalCount={totalCount}
        currentPage={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
    </section>
  );
}

export default PokemonList;
