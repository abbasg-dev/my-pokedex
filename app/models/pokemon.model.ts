export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  types: Type[];
  sprites: Sprites;
  stats: Stat[];
  weight: number;
}

export interface Type {
  slot: number;
  type: { name: string };
}

export interface Sprites {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: { name: string };
}

export interface PokemonListProps {
  pokemons: Pokemon[] | undefined;
}
