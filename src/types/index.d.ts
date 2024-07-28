type PokemonEntryType = {
  id: number;
  name: string;
  imgUrl: string;
  ability: string;
};

type PokemonEntryWithExtra = PokemonEntryType & {
  [extraProp: any]: any;
};
