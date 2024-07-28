export async function getPokemonList(
  pageNumber: number,
  itemsPerPage: number
): Promise<PokemonEntry[]> {
  const startId = (pageNumber - 1) * itemsPerPage + 1;
  const endId = pageNumber * itemsPerPage + 1;

  const promises: Promise<PokemonEntryWithExtra>[] = [];
  for (let i = startId; i < endId; ++i) {
    promises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => ({
          id: data.id,
          name: data.name,
          imgUrl: data.sprites.front_default,
          ability: data.abilities[0].ability.name,
        }))
    );
  }

  const pokemonList: PokemonEntry[] = await Promise.all(promises);

  return pokemonList;
}

export function getPokemonDetail(pokemonId: number) {}