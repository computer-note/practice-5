import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import {
  getPokemonList,
  getTotalPokemonCount,
} from '@/api/pokemonApi';
import PokemonList from '@/components/PokemonList';
import { QKEY_POKEMON_LIST } from '@/constants/query';

const startPage = 1;
const itemsPerPage = 6;

export default async function Home() {
  const queryClient = new QueryClient();

  const totalCount = await getTotalPokemonCount();
  await queryClient.prefetchQuery({
    queryKey: [QKEY_POKEMON_LIST, startPage],
    queryFn: () => getPokemonList(startPage, itemsPerPage),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonList
          totalCount={totalCount}
          currentPage={startPage}
          itemsPerPage={itemsPerPage}
        />
      </HydrationBoundary>
    </main>
  );
}
