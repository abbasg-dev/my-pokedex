"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPokemonList } from "./services/pokemon.service";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import styled from "styled-components";
const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;
const App = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useQuery("pokemonList", () => fetchPokemonList());
  if (isLoading) return "Loading...";
  const filteredPokemons = data?.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Pokemon..."
      />
      <PokemonList pokemons={filteredPokemons} />
    </>
  );
};
export default App;
