type PokemonEntry = {
  id: number;
  name: string;
  imgUrl: string;
  ability: string;
};

type PokemonEntryWithExtra = PokemonEntry & {
  [extraProp: any]: any;
};
