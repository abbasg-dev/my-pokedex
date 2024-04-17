import { Pokemon, PokemonList } from "../models/pokemon.model";

export const fetchPokemonList = async (
  offset: number = 0
): Promise<PokemonList> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
  );
  return response.json();
};

export const fetchPokemon = async (id: any): Promise<Pokemon> => {
  let queryId = id.queryKey[0];
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryId}`);
  return response.json();
};
